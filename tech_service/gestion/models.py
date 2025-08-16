import uuid
from django.db import models

class Cliente(models.Model):
    nombre = models.CharField(max_length=200)
    telefono = models.CharField(max_length=20, blank=True)
    correo = models.EmailField(max_length=254, unique=True)
    direccion = models.TextField(blank=True)
    fecha_registro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre

class Reparacion(models.Model):
    ESTADO_CHOICES = [
        ('Recibido', 'Recibido'),
        ('En proceso', 'En Proceso'),
        ('Listo para entregar', 'Listo para Entregar'),
        ('Entregado', 'Entregado'),
    ]

    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='reparaciones')
    orden_numero = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    imei = models.CharField(max_length=15, unique=True)
    falla_reportada = models.TextField()
    observaciones = models.TextField(blank=True)
    estado = models.CharField(max_length=50, choices=ESTADO_CHOICES, default='Recibido')
    tecnico_asignado = models.CharField(max_length=100, blank=True)
    costo_total = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    fecha_recepcion = models.DateTimeField(auto_now_add=True)
    fecha_entrega = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Reparación {self.id} - {self.marca} {self.modelo} para {self.cliente.nombre}"

class Accesorio(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

class VentaAccesorio(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.SET_NULL, null=True, related_name='compras')
    accesorio = models.ForeignKey(Accesorio, on_delete=models.PROTECT)
    cantidad = models.PositiveIntegerField()
    precio_venta = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_venta = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Venta de {self.cantidad} x {self.accesorio.nombre} a {self.cliente.nombre if self.cliente else 'Cliente eliminado'}"

    def save(self, *args, **kwargs):
        # Actualizar el precio de venta al momento de guardar
        self.precio_venta = self.accesorio.precio * self.cantidad

        # Restar del stock
        if self.pk is None: # Solo restar en la creación de la venta
            self.accesorio.stock -= self.cantidad
            self.accesorio.save()

        super().save(*args, **kwargs)
