import Head from 'next/head';
import { trainers } from '@/data/trainers';
import TrainerCard from '@/components/TrainerCard';
import { motion } from 'framer-motion';

const TrainersPage = () => {
  return (
    <>
      <Head>
        <title>Entrenadores - GYMX</title>
        <meta name="description" content="Conoce a nuestro equipo de entrenadores personales expertos en GYMX." />
      </Head>
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-sans font-bold">Conoce a los Expertos</h1>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              Nuestro equipo de profesionales está aquí para guiarte, motivarte y asegurar que alcances tus metas de la forma más segura y efectiva.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {trainers.map((trainer, index) => (
              <TrainerCard key={trainer.name} trainer={trainer} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainersPage;
