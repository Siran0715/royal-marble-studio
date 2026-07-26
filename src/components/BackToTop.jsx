import { AnimatePresence, motion } from 'framer-motion'
import { useScrollPosition } from '../hooks/useScrollPosition'

export default function BackToTop() {
  const { scrolled } = useScrollPosition()

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full border border-brass bg-ink text-quarry flex items-center justify-center hover:bg-brass hover:text-ink transition-colors"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}
