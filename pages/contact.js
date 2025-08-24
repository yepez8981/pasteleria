import Head from 'next/head';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  const contactInfo = [
    { icon: <FiMapPin />, text: '123 Calle Ficticia, Ciudad, País' },
    { icon: <FiMail />, text: 'contacto@gymx.com' },
    { icon: <FiPhone />, text: '+1 (234) 567-890' },
  ];

  return (
    <>
      <Head>
        <title>Contacto - GYMX</title>
        <meta name="description" content="Ponte en contacto con GYMX. Encuéntranos en el mapa, envíanos un email o llámanos." />
      </Head>
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-sans font-bold">Ponte en Contacto</h1>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              ¿Tienes preguntas? ¿Listo para empezar? Contáctanos y te responderemos lo antes posible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info and Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-sans font-bold mb-6">Información de Contacto</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-accent text-2xl mr-4">{info.icon}</span>
                    <span className="text-text-secondary">{info.text}</span>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="h-80 bg-secondary rounded-lg flex items-center justify-center">
                <p className="text-text-secondary">[Aquí iría un mapa interactivo de Google Maps]</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-secondary p-8 rounded-lg"
            >
              <h2 className="text-3xl font-sans font-bold mb-6">Envíanos un Mensaje</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
