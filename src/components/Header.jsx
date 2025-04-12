import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12 px-4 relative"
    >
      <motion.img
        src={logo}
        alt="Lamina Labs Logo"
        className="w-12 h-12 md:w-16 md:h-16 max-w-[150px] max-h-[150px] object-contain mx-auto mb-4 drop-shadow-[0_0_12px_rgba(0,255,204,0.66)]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-neon-cyan drop-shadow-[0_0_10px_rgba(0,255,238,0.33)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Lamina Labs
      </motion.h1>
    </motion.header>
  );
};

export default Header;