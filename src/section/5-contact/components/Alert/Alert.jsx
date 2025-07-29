import './Alert.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useContact } from '../../context/ContactContext';

const Alert = () => {
  const { message, setMessage } = useContact();

  const handleClose = () => {
    setMessage({});
  };

  return (
    <AnimatePresence>
      {message.text && (
        <motion.div
          className={`alert ${message.color || 'info'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <span>{message.text}</span>
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
