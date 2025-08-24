import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const PlanCard = ({ plan, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
      className={`relative border-2 rounded-lg p-8 flex flex-col h-full ${
        plan.highlight ? 'border-accent bg-secondary' : 'border-secondary'
      }`}
    >
      {plan.highlight && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 text-sm font-bold rounded-full">
          MÁS POPULAR
        </div>
      )}
      <h3 className="text-3xl font-sans font-bold text-center mb-2">{plan.name}</h3>
      <p className="text-center mb-6">
        <span className="text-5xl font-sans font-extrabold text-accent">${plan.price}</span>
        <span className="text-text-secondary">/mes</span>
      </p>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
            <span className="font-body text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="/signup" className={`mt-auto w-full text-center font-bold py-3 px-6 rounded-md transition-colors duration-300 ${plan.highlight ? 'bg-accent text-white hover:bg-red-700' : 'bg-gray-600/50 text-text-primary hover:bg-accent'}`}>
        Contratar Ahora
      </Link>
    </motion.div>
  );
};

export default PlanCard;
