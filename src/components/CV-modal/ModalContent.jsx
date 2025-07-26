import { motion } from 'framer-motion';
import { CloseButton } from './CloseButton';
import { DownloadButton } from './DownloadButton';
import { PrintButton } from './PrintButton';

const contentVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300
    }
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

export const ModalContent = ({ onClose }) => (
  <motion.div 
    className="relative bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col"
    variants={contentVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={(e) => e.stopPropagation()}
  >
    <div className="relative">
      <img 
        src="/CV_jaymeLn.png" 
        alt="CV Preview" 
        className="w-full h-auto max-h-[80vh] object-contain"
      />
      
      {/* Desktop Controls */}
      <div className="absolute top-4 right-4 flex gap-3">
        <CloseButton onClick={onClose} />
      </div>
      
      <div className="absolute bottom-4 right-4 flex gap-3">
        <PrintButton />
        <DownloadButton />
      </div>
      
      {/* Mobile Controls */}
      <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-4">
        <DownloadButton mobile />
      </div>
    </div>
  </motion.div>
);
