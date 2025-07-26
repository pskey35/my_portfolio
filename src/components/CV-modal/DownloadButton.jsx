import { motion } from 'framer-motion';

const buttonVariants = {
  hover: { y: -2 },
  tap: { y: 1 }
};

export const DownloadButton = ({ mobile = false }) => (
  <motion.a
    href="/jayme_new_CV.pdf"
    download="jayme_new_CV.pdf"
    className={`flex items-center gap-2 ${
      mobile 
        ? 'bg-white text-black px-6 py-3 rounded-full font-medium text-sm shadow-lg'
        : 'bg-black/80 text-white p-3 rounded-full backdrop-blur-sm hover:bg-black/90 transition-colors'
    }`}
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
    aria-label="Download CV"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width="20"
      height="20"
      className={mobile ? 'text-black' : 'text-white'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {mobile && <span>Download CV</span>}
  </motion.a>
);
