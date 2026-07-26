import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import contactCTA from "../assets/hero/contact-cta.jpg";

export default function ContactCTABanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactCTA})`,
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/45" />

      {/* Content */}
      <div className="relative z-10 container-lux py-20 flex flex-col lg:flex-row items-center justify-between gap-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow text-brassBright mb-3">
            FREE CONSULTATION
          </p>

          <h2 className="font-display text-white text-[clamp(2rem,5vw,3.5rem)] leading-tight max-w-2xl">
            Ready to Transform
            <br />
            Your Space?
          </h2>

          <p className="text-white/80 mt-5 max-w-xl leading-relaxed">
            From premium marble selection to expert fabrication and
            installation, our team is here to help you create a space
            that reflects timeless luxury.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="#contact-form"
            className="btn-brass text-center whitespace-nowrap"
          >
            Schedule a Consultation
          </a>
        </motion.div>

      </div>
    </section>
  );
}