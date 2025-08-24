import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiCalendar, FiBarChart2, FiUser, FiLogOut } from 'react-icons/fi';

const DashboardPage = () => {
  // Mock user data
  const user = {
    name: 'Alex',
    membership: 'Anual',
    renewalDate: '15 de Diciembre, 2024',
  };

  const dashboardItems = [
    { icon: <FiCalendar />, title: 'Agendar Clases', description: 'Reserva tu próxima sesión de HIIT, Yoga y más.', href: '#' },
    { icon: <FiBarChart2 />, title: 'Ver mi Progreso', description: 'Revisa tus estadísticas y logros personales.', href: '#' },
    { icon: <FiUser />, title: 'Mi Perfil', description: 'Actualiza tus datos y preferencias.', href: '#' },
    { icon: <FiLogOut />, title: 'Cerrar Sesión', description: 'Desconéctate de forma segura.', href: '/' },
  ];

  return (
    <>
      <Head>
        <title>Mi Panel - GYMX</title>
        <meta name="description" content="Panel de control personal para miembros de GYMX." />
      </Head>
      <div className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-sans font-bold">Bienvenido de nuevo, <span className="text-accent">{user.name}</span></h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 p-8 bg-primary rounded-lg border border-gray-700"
          >
            <h2 className="text-2xl font-sans font-bold">Estado de tu Membresía</h2>
            <p className="mt-2 text-text-secondary">
              Plan actual: <span className="font-bold text-white">{user.membership}</span>
            </p>
            <p className="text-text-secondary">
              Próxima renovación: <span className="font-bold text-white">{user.renewalDate}</span>
            </p>
            <button className="mt-4 bg-accent text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300">
              Administrar Membresía
            </button>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dashboardItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-primary p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex flex-col items-center text-center"
              >
                <div className="text-accent text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-sans font-bold mb-2">{item.title}</h3>
                <p className="text-text-secondary flex-grow">{item.description}</p>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default DashboardPage;
