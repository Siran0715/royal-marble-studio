import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import MarbleSlab from './MarbleSlab'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

export default function Lightbox({ items, activeIndex, onClose, onNav }) {
  const open = activeIndex !== null && activeIndex !== undefined
  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, onNav])

  const item = open ? items[activeIndex] : null

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className="absolute inset-0 bg-black/85" onClick={onClose} />

          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brass hover:text-ink transition-colors"
          >
            ✕
          </button>
          <button
            onClick={() => onNav(-1)}
            aria-label="Previous image"
            className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brass hover:text-ink transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => onNav(1)}
            aria-label="Next image"
            className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brass hover:text-ink transition-colors"
          >
            →
          </button>

          <motion.figure
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            className="relative z-[6] w-full max-w-3xl"
          >
            <MarbleSlab variant={item.variant} className="w-full aspect-[4/3] plaque-border" animate={false} />
            <figcaption className="mt-4 flex items-center justify-between text-quarry">
              <span className="font-display text-xl">{item.title}</span>
              <span className="spec-tag !text-stone">{item.tag}</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
