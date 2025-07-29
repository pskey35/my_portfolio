import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Input = forwardRef(({ icon, className = '', ...props }, ref) => {
  return (
    <div className={`input-container ${className}`}>
      {icon && <span className="input-icon">{icon}</span>}
      <motion.input
        ref={ref}
        className={`custom-input ${icon ? 'with-icon' : ''}`}
        whileFocus={{ 
          boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.5)',
          borderColor: '#3498db'
        }}
        {...props}
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
