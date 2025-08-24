import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Planes', href: '/plans' },
    { name: 'Entrenadores', href: '/trainers' },
    { name: 'Instalaciones', href: '/facilities' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <header className="bg-secondary/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-3xl font-sans font-bold text-accent tracking-wider">
            GYM<span className="text-text-primary">X</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="font-body text-text-secondary hover:text-accent transition-colors duration-300">
                  {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/login" className="font-body text-text-secondary hover:text-accent transition-colors duration-300 mr-4">
              Login
            </Link>
            <Link href="/signup" className="bg-accent text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300">
              Únete Ahora
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary"
        >
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:bg-primary" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:bg-primary" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link href="/signup" className="mt-2 w-full text-center bg-accent text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300">
              Únete Ahora
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
