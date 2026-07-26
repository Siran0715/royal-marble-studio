import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import hero1 from "../assets/hero/galleryHero1.jpg";
import hero2 from "../assets/hero/galleryHero2.jpg";
import hero3 from "../assets/hero/galleryHero3.jpg";

const images = [hero1, hero2, hero3];

export default function GalleryHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[current]})`,
          }}
          initial={{
            opacity: 0,
            scale: 1,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1.08,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 1.12,
          }}
          transition={{
            duration: 1.6,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}