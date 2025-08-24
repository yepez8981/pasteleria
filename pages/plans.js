import Head from 'next/head';
import { plans } from '@/data/plans';
import PlanCard from '@/components/PlanCard';
import { motion } from 'framer-motion';

const PlansPage = () => {
  return (
    <>
      <Head>
        <title>Planes y Membresías - GYMX</title>
        <meta name="description" content="Elige el plan de membresía de GYMX que mejor se adapte a tus objetivos." />
      </Head>
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-sans font-bold">Nuestros Planes</h1>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              Tenemos una membresía para cada objetivo y presupuesto. Encuentra la tuya y empieza a transformar tu vida hoy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlansPage;
