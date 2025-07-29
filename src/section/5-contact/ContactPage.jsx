import { useRef, useState, useContext, useEffect} from 'react';
import { motion } from 'framer-motion';
import { ContactContext, ContactProvider, initialContactState } from './context/ContactContext.jsx';
import ContactForm from './components/ContactForm/ContactForm';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Alert from './components/Alert/Alert';
import './contact_Page.scss';

const ContactContent = () => {
  const { message, setMessage } = useContext(ContactContext);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});

  const handleAlertClose = () => {
    setShowAlert(false);
    setMessage({ ...initialContactState.message });
  };

  // Show alert when message changes
  useEffect(() => {
    if (message.text) {
      setShowAlert(true);
      setAlertMessage(message);
      
      // Auto-hide success messages after 5 seconds
      if (message.color === 'green') {
        const timer = setTimeout(() => {
          setShowAlert(false);
          setMessage({ ...initialContactState.message });
        }, 5000);
        
        return () => clearTimeout(timer);
      }
    }
  }, [message]);

  return (
    <div className="contact-container" id="contact">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Me</h2>
        <p className="subtitle">Get in touch</p>
      </motion.div>

      <div className="contact-content">
        <ContactInfo />
        <ContactForm />
      </div>

      <Alert 
        message={showAlert ? alertMessage : null} 
        onClose={handleAlertClose}
      />
    </div>
  );
};

const ContactPage = () => {
  const [state, setState] = useState({
    ...initialContactState,
    input1: useRef(null),
    input2: useRef(null),
  });

  const updateState = (newState) => {
    setState(prev => ({
      ...prev,
      ...newState
    }));
  };

  return (
    <ContactProvider
      value={{
        ...state,
        setMessage: (message) => updateState({ message }),
        setBoleanoAlerta: (boleanoAlerta) => updateState({ boleanoAlerta }),
        setAlerta: (alerta) => updateState({ alerta }),
      }}
    >
      <ContactContent />
    </ContactProvider>
  );
};

export default ContactPage;
