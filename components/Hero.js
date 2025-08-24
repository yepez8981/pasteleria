import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2575&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-primary opacity-70"></div>
      <div className="relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-sans font-extrabold uppercase tracking-wider"
        >
          <span className="text-accent">Forja</span> Tu Mejor
          <br />
          Versión
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-text-secondary font-body"
        >
          Instalaciones de élite, entrenadores expertos y una comunidad que te inspira a superar tus límites.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <Link href="/signup" className="bg-accent text-white font-bold py-4 px-8 rounded-md text-lg uppercase hover:bg-red-700 transition-colors duration-300">
            Únete Ahora
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
