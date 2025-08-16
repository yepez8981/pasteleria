from django.contrib import admin
from .models import Cliente, Reparacion, Accesorio, VentaAccesorio

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'telefono', 'correo', 'fecha_registro')
    search_fields = ('nombre', 'correo', 'telefono')

@admin.register(Reparacion)
class ReparacionAdmin(admin.ModelAdmin):
    list_display = ('orden_numero', 'cliente', 'marca', 'modelo', 'estado', 'fecha_recepcion')
    list_filter = ('estado', 'tecnico_asignado', 'fecha_recepcion')
    search_fields = ('orden_numero', 'cliente__nombre', 'marca', 'modelo', 'imei')
    readonly_fields = ('orden_numero', 'fecha_recepcion')
    fieldsets = (
        ('Información del Cliente', {
            'fields': ('cliente',)
        }),
        ('Información del Equipo', {
            'fields': ('marca', 'modelo', 'imei', 'falla_reportada')
        }),
        ('Estado de la Reparación', {
            'fields': ('orden_numero', 'estado', 'tecnico_asignado', 'observaciones', 'costo_total', 'fecha_recepcion', 'fecha_entrega')
        }),
    )

@admin.register(Accesorio)
class AccesorioAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'precio', 'stock')
    search_fields = ('nombre',)

@admin.register(VentaAccesorio)
class VentaAccesorioAdmin(admin.ModelAdmin):
    list_display = ('id', 'accesorio', 'cliente', 'cantidad', 'precio_venta', 'fecha_venta')
    list_filter = ('fecha_venta', 'accesorio')
    search_fields = ('cliente__nombre', 'accesorio__nombre')
    readonly_fields = ('precio_venta', 'fecha_venta')
