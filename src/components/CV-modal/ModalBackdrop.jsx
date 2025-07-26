import { motion } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

export const ModalBackdrop = ({ children, onClick }) => (
  <motion.div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    variants={backdropVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={onClick}
  >
    {children}
  </motion.div>
);
