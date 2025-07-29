import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      color: '#3498db'
    },
    {
      icon: <FaWhatsapp className="contact-icon" />,
      title: 'WhatsApp',
      value: '+1 234 567 8900',
      href: 'https://wa.me/12345678900',
      color: '#25D366'
    }
  ];

  return (
    <motion.div 
      className="contact-info"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3>Talk to me</h3>
      
      <div className="contact-methods">
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.href}
            className="contact-method"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              y: -5,
              boxShadow: `0 5px 15px ${method.color}33`
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="icon-container" style={{ backgroundColor: `${method.color}22` }}>
              {method.icon}
            </div>
            <div className="method-details">
              <span className="method-title">{method.title}</span>
              <span className="method-value">{method.value}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
