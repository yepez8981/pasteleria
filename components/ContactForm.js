import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to a form handling service (e.g., Formspree, Netlify Forms, or a custom backend endpoint)
    setStatus('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Nombre</label>
          <input type="text" name="name" id="name" required className="w-full bg-secondary border-gray-600 rounded-md p-3 focus:ring-accent focus:border-accent" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
          <input type="email" name="email" id="email" required className="w-full bg-secondary border-gray-600 rounded-md p-3 focus:ring-accent focus:border-accent" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">Asunto</label>
        <input type="text" name="subject" id="subject" required className="w-full bg-secondary border-gray-600 rounded-md p-3 focus:ring-accent focus:border-accent" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Mensaje</label>
        <textarea name="message" id="message" rows="5" required className="w-full bg-secondary border-gray-600 rounded-md p-3 focus:ring-accent focus:border-accent"></textarea>
      </div>
      <div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-accent text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          Enviar Mensaje
        </motion.button>
      </div>
      {status && <p className="text-center text-green-400 mt-4">{status}</p>}
    </form>
  );
};

export default ContactForm;
