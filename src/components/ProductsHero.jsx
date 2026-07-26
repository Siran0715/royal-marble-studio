import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import banner1 from "../assets/hero/products_banner.jpg";
import banner2 from "../assets/hero/products_banner2.jpg";

const images = [banner1, banner2];

export default function ProductsHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
              <motion.img
                key={current}
                src={images[current]}
                alt={`url ${current + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.08 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1 },
                  scale: { duration: 5.5, ease: "linear" },
                }}
              />
            </AnimatePresence>

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/15 to-black/10" />
    </div>
  );
}