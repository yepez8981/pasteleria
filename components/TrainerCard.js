import { motion } from 'framer-motion';
import Image from 'next/image';

const TrainerCard = ({ trainer, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -10 }}
      className="bg-secondary rounded-lg overflow-hidden group"
    >
      <div className="relative h-80 w-full">
        <Image
          src={trainer.image}
          alt={trainer.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-sans font-bold text-white">{trainer.name}</h3>
          <p className="text-accent font-semibold">{trainer.specialty}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="font-body text-text-secondary">{trainer.bio}</p>
      </div>
    </motion.div>
  );
};

export default TrainerCard;
