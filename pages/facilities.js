import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const facilityImages = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop', alt: 'Zona de pesas libres' },
  { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2575&auto=format&fit=crop', alt: 'Área de entrenamiento funcional' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop', alt: 'Máquinas de cardio' },
  { src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2487&auto=format&fit=crop', alt: 'Hombre entrenando' },
  { src: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2487&auto=format&fit=crop', alt: 'Cintas de correr' },
  { src: 'https://images.unsplash.com/photo-1623874106686-5be2b325c8f7?q=80&w=2532&auto=format&fit=crop', alt: 'Vestuarios modernos' },
];

const FacilitiesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <Head>
        <title>Instalaciones - GYMX</title>
        <meta name="description" content="Explora nuestras instalaciones de primera clase en GYMX." />
      </Head>
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-sans font-bold">Nuestras Instalaciones</h1>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              Un espacio diseñado para la excelencia. Equipamiento de última generación y un ambiente que inspira.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {facilityImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative h-80 w-full overflow-hidden rounded-lg group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                 <p className="absolute bottom-4 left-4 text-white font-bold text-lg">{image.alt}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FacilitiesPage;
