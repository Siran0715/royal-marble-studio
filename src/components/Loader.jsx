import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center gap-6"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <motion.span
        initial={{ opacity: 0, letterSpacing: '0.1em' }}
        animate={{ opacity: 1, letterSpacing: '0.3em' }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="font-display italic text-3xl text-quarry"
      >
        Royal Marble
      </motion.span>
      <div className="w-48 h-px bg-white/10 overflow-hidden">
        <motion.div
          className="h-full bg-brass"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <span className="eyebrow">Sourcing the finest stone</span>
    </motion.div>
  )
}
