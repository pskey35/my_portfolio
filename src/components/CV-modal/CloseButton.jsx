import { motion } from 'framer-motion';

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 }
};

export const CloseButton = ({ onClick }) => (
  <motion.button
    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full transition-colors"
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
    onClick={onClick}
    aria-label="Close modal"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </motion.button>
);
