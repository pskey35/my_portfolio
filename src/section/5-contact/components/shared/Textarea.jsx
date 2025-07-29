import './Textarea.scss';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Textarea = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <motion.textarea
      ref={ref}
      className={`custom-textarea ${className}`}
      whileFocus={{
        boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.5)',
        borderColor: '#3498db'
      }}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
