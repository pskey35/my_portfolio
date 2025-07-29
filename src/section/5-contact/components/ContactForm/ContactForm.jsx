import './ContactForm.scss';
import { useRef, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ContactContext } from '../../context/ContactContext';
import Input from '../shared/Input';
import Textarea from '../shared/Textarea';
import Alert from '../Alert/Alert';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const { setMessage, message } = useContext(ContactContext);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRef.current || !messageRef.current) return;

    const email = emailRef.current.value.trim();
    const messageText = messageRef.current.value.trim();

    // Simple check for email
    if (!email.includes('@')) {
      setMessage({
        color: 'error',
        text: 'Por favor ingresa un correo válido',
      });
      return;
    }

    // Validate message
    if (messageText.length < 10) {
      setMessage({
        color: 'red',
        text: 'Message must be at least 10 characters long',
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const data = {
        email_from: emailRef.current.value.trim(),
        email_body: messageRef.current.value.trim()
      };

      const response = await fetch(`${import.meta.env.VITE_API}/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const result = await response.json();
      console.log("resultaod,.....")
      console.log(result)

      // Show success message
      setShowSuccess(true);
      setMessage({
        color: 'success',
        text: '¡Correo enviado exitosamente!',
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      // Clear form
      emailRef.current.value = '';
      messageRef.current.value = '';

    } catch (error) {
      setMessage({
        color: 'error',
        text: 'Error al enviar el correo. Por favor intenta de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h7>Write me your project</h7>

      <div className="form-group">
        <Input
          ref={emailRef}
          type="email"
          id="email"
          placeholder="Tu correo electrónico"
          required
        />
      </div>
      <div className="form-group">
        <Textarea
          ref={messageRef}
          id="message"
          placeholder="Tu mensaje"
          required
          rows="5"
        />
      </div>
      <motion.button
        type="submit"
        className="send-button"
        disabled={isSubmitting}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <span className="loader">Enviando...</span>
        ) : (
          <>
            <FaPaperPlane className="send-icon" />
            Enviar mensaje
          </>
        )}
      </motion.button>
      {showSuccess && <Alert />}
      {message.text && (
        <motion.div
          className={`message ${message.color}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {message.text}
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
