import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const SignupPage = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle form submission, validation, and API calls here.
    // For this prototype, we'll just redirect to the login page.
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Únete a GYMX</title>
        <meta name="description" content="Crea tu cuenta en GYMX y comienza tu transformación." />
      </Head>
      <div className="min-h-[80vh] flex items-center justify-center bg-primary py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full space-y-8 bg-secondary p-10 rounded-xl"
        >
          <div>
            <h2 className="mt-6 text-center text-3xl md:text-4xl font-sans font-bold text-white">
              Crea tu cuenta
            </h2>
            <p className="mt-2 text-center text-sm text-text-secondary">
              ¿Ya eres miembro?{' '}
              <Link href="/login" className="font-medium text-accent hover:text-red-700">
                Inicia sesión
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Nombre</label>
                <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 bg-primary placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm" placeholder="Nombre completo" />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">Email</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 bg-primary placeholder-gray-500 text-white focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Contraseña</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-600 bg-primary placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm" placeholder="Contraseña" />
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-accent hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                Crear Cuenta
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SignupPage;
