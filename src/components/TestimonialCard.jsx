import { motion } from 'framer-motion'

export default function TestimonialCard({ t, index = 0 }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08 }}
      className="glass p-7 flex flex-col gap-5 h-full"
    >
      <span className="font-display italic text-4xl text-brass leading-none">“</span>
      <p className="text-[0.96rem] leading-relaxed opacity-85 flex-1">{t.quote}</p>
      <footer className="flex items-center gap-3 pt-2 border-t border-[var(--line)]">
        <span className="w-10 h-10 rounded-full bg-gradient-to-br from-brass to-ink/60 flex items-center justify-center font-display text-sm text-quarry">
          {t.name.split(' ').map((n) => n[0]).join('')}
        </span>
        <div>
          <p className="text-sm font-medium">{t.name}</p>
          <p className="spec-tag">{t.role}</p>
        </div>
      </footer>
    </motion.blockquote>
  )
}
