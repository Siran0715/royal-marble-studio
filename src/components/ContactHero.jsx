import { motion } from "framer-motion";
import contactHero from "../assets/hero/contact-hero.jpg";

export default function ContactHero() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactHero})`,
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/10" />

      {/* Additional Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}