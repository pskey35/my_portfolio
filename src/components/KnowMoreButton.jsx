import { motion } from "framer-motion";
import IconKnowMore from "../section/1-home/assets/icons/know_more.jsx";

/**
 * Reusable CTA button that redirects to a hash link.
 * Single-responsibility: handles only rendering & animation of the button.
 * Open for extension (custom children, href), closed for modification.
 */
export default function KnowMoreButton({ href = "#about" }) {
  return (
    <motion.a
      href={href}
      className="texto-boton"
      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="more">Know more</span>
      <span className="icon">
        <IconKnowMore />
      </span>
    </motion.a>
  );
}


