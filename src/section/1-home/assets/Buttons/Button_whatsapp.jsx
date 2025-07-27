


import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// WhatsApp brand colors
const whatsappGreen = '#25D366';
const whatsappDarkGreen = '#128C7E';


const WhatsAppSVG = ({ isHovered, fill, width, height }) => {
  return (
    <motion.svg
      version="1.1"
      fill={isHovered ? whatsappGreen : fill}
      width={width}
      height={height}
      viewBox="0 0 90 90"
      style={{
        position: 'relative',
        zIndex: 2,
        transform: isHovered ? 'rotate(10deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease, fill 0.3s ease',
      }}
    >
      <motion.path
        id="WhatsApp"
        d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522
    c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982
    c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537
    c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938
    c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537
    c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333
    c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882
    c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977
    c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344
    c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223
    C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"
        initial={{ pathLength: 0, fill: 'rgba(0,0,0,0)' }}
        animate={{
          pathLength: 1,
          fill: isHovered ? whatsappGreen : fill
        }}
        transition={{
          default: { duration: 1, ease: 'easeInOut' },
          fill: { duration: 0.3, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  )
}


const Button_WhatsApp = ({ width = '45px', height = '45px', fill = 'currentColor' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  // WhatsApp brand colors are now defined at the top of the file

  // Handle ripple effect on click
  const handleClick = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const newRipple = {
      id: Date.now(),
      x: x - 15, // Center the ripple on click
      y: y - 15, // Center the ripple on click
      size: Math.max(width, height) * 1.5
    };

    setRipples([...ripples, newRipple]);
  };

  // Clean up ripples
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples(ripples.slice(1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <motion.div
      className="whatsapp-button"
      whileHover={{
        scale: 1.1,
        transition: { type: 'spring', stiffness: 500, damping: 15 }
      }}
      whileTap={{
        scale: 0.95,
        transition: { type: 'spring', stiffness: 500, damping: 20 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
      }}
    >
      <a
        href="https://api.whatsapp.com/send?phone=51928867544"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block' }}
      >
        <WhatsAppSVG isHovered={isHovered} fill={fill} width={width} height={height}></WhatsAppSVG>

        {/* Ripple effects */}
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              className="ripple"
              initial={{
                opacity: 0.6,
                scale: 0,
                x: ripple.x,
                y: ripple.y,
                width: 30,
                height: 30,
                borderRadius: '50%',
                backgroundColor: 'rgba(37, 211, 102, 0.3)',
                position: 'absolute',
                zIndex: 1,
              }}
              animate={{
                opacity: 0,
                scale: 3,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            />
          ))}
        </AnimatePresence>
      </a>
    </motion.div>
  );
};

export default Button_WhatsApp;