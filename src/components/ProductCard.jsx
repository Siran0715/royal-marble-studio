import { motion } from 'framer-motion'
import MarbleSlab from './MarbleSlab'

export default function ProductCard({ product, onOpen, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (index % 6) * 0.06, duration: 0.5 }}
      className="card-lift group border border-[var(--line)] bg-[var(--surface)] cursor-pointer"
      onClick={() => onOpen(product)}
    >
      <MarbleSlab variant={product.variant} className="h-56 w-full">
        <div className="absolute top-3 left-3 spec-tag bg-black/40 text-quarry px-2 py-1 backdrop-blur-sm">
          {product.category}
        </div>
        <div className="absolute inset-0 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-[0.68rem] font-mono uppercase tracking-widest2 text-quarry border border-quarry/50 px-3 py-1.5 backdrop-blur-sm">
            View slab
          </span>
        </div>
      </MarbleSlab>
      <div className="p-5">
        <h3 className="font-display text-lg mb-1">{product.name}</h3>
        <p className="spec-tag mb-3">{product.origin} · {product.finish}</p>
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-brass">${product.price}/sq ft</span>
          <span className="text-xs font-mono uppercase tracking-wide opacity-60 group-hover:opacity-100 group-hover:text-brass transition-colors">
            Details →
          </span>
        </div>
      </div>
    </motion.article>
  )
}
