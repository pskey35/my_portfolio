import { motion } from 'framer-motion';

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

const handlePrint = () => {
  window.print();
};

export const PrintButton = () => (
  <motion.button
    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
    onClick={handlePrint}
    aria-label="Print CV"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 14h12v8H6z" />
    </svg>
  </motion.button>
);
