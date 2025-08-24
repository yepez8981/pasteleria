import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="bg-primary text-text-primary min-h-screen flex flex-col">
      <Header />
      <motion.main
        key={children.key} // Using key to trigger animation on route change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
