import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MarbleSlab from './MarbleSlab'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

export default function ProductModal({ product, onClose }) {
  useLockBodyScroll(Boolean(product))

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative bg-[var(--surface)] max-w-3xl w-full grid md:grid-cols-2 max-h-[88vh] overflow-y-auto plaque-border"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-brass hover:text-ink transition-colors"
            >
              ✕
            </button>
            <MarbleSlab variant={product.variant} className="min-h-[280px] md:min-h-full" />
            <div className="p-8 flex flex-col">
              <p className="eyebrow mb-2">{product.category}</p>
              <h3 className="font-display text-3xl mb-4">{product.name}</h3>
              <p className="text-sm leading-relaxed opacity-80 mb-6">{product.desc}</p>

              <dl className="grid grid-cols-2 gap-y-3 text-sm mb-6 font-mono">
                <dt className="opacity-60">Origin</dt>
                <dd>{product.origin}</dd>
                <dt className="opacity-60">Finish</dt>
                <dd>{product.finish}</dd>
                <dt className="opacity-60">Price</dt>
                <dd className="text-brass">${product.price} / sq ft</dd>
                <dt className="opacity-60">Slab code</dt>
                <dd>RMS-{product.id.toUpperCase()}</dd>
              </dl>

              <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-4">
                <Link to="/contact" className="btn-brass justify-center flex-1">
                  Request Quote
                </Link>
                <button onClick={onClose} className="btn-ghost flex-1">
                  Continue Browsing
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
