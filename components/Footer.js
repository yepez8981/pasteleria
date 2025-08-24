import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaYoutube />, href: '#' },
  ];

  const footerLinks = [
    { name: 'Política de Privacidad', href: '/privacy' },
    { name: 'Términos de Servicio', href: '/terms' },
    { name: 'Carreras', href: '/careers' },
  ];

  return (
    <footer className="bg-primary border-t border-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Slogan */}
          <div>
            <h2 className="text-3xl font-sans font-bold text-accent tracking-wider">
              GYM<span className="text-text-primary">X</span>
            </h2>
            <p className="font-body text-text-secondary mt-2">Forja tu mejor versión.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-lg font-bold text-text-primary tracking-wide">Enlaces</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-body text-text-secondary hover:text-accent transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-sans text-lg font-bold text-text-primary tracking-wide">Síguenos</h3>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-text-secondary hover:text-accent transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary/50 text-center text-text-secondary font-body">
          <p>&copy; {new Date().getFullYear()} GYMX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
