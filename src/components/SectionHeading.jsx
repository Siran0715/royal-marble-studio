import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, desc, align = 'left', light = false }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={`font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] ${light ? 'text-quarry' : ''}`}
      >
        {title}
      </motion.h2>
      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`mt-4 text-[0.98rem] leading-relaxed ${light ? 'text-stone' : 'opacity-70'}`}
        >
          {desc}
        </motion.p>
      )}
    </div>
  )
}
