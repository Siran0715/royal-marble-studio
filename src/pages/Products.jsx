import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MarbleSlab from '../components/MarbleSlab'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import SectionHeading from '../components/SectionHeading'
import { PRODUCTS, CATEGORIES } from '../data/products'
import ProductsHero from "../components/ProductsHero";

export default function Products() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [active, setActive] = useState(null)

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCat = category === 'All' || p.category === category
      const matchesQuery =
        !query.trim() ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.origin.toLowerCase().includes(query.toLowerCase())
      return matchesCat && matchesQuery
    })
  }, [query, category])

  return (
    <>
     <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">

          <ProductsHero />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-white/5" />
</div>
       <div className="relative z-10 container-lux w-full">
  <div className="max-w-3xl">

    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="eyebrow text-brassBright mb-5"
    >
      Full Catalogue
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.7 }}
      className="font-display text-white text-[clamp(2.5rem,5vw,4.2rem)] leading-[1.05]"
    >
      Italian Marble, Granite,
      <br />
      Tiles, Quartz &amp; Onyx
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="text-white/80 text-lg mt-6 leading-relaxed max-w-xl"
    >
      Every slab is available for showroom viewing before fabrication.
      Search or filter to find your material.
    </motion.p>

  </div>
</div>
      </section>

      <section className="section-pad !pt-14">
        <div className="container-lux">
          <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between mb-10">
            <div className="relative w-full lg:max-w-sm">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or origin…"
                aria-label="Search products"
                className="w-full bg-transparent border border-[var(--line)] focus:border-brass outline-none px-4 py-3 pl-10 text-sm transition-colors"
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50 text-sm">⌕</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`font-mono text-[0.7rem] uppercase tracking-widest2 px-4 py-2 border transition-colors ${
                    category === c
                      ? 'bg-ink text-quarry border-ink dark:bg-brass dark:text-ink dark:border-brass'
                      : 'border-[var(--line)] hover:border-brass hover:text-brass'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
              <p className="font-display text-2xl mb-2">No slabs match your search.</p>
              <p className="opacity-60 text-sm">Try a different keyword or clear your filters.</p>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} onOpen={setActive} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-lux">
          <div className="glass p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <SectionHeading
              eyebrow="Custom Orders"
              title="Can't find your exact stone?"
              desc="We source directly from twelve quarry partners worldwide. Tell us the material, quantity and timeline — we'll find your slab."
            />
            <Link to="/contact" className="btn-brass shrink-0">Request Quote</Link>
          </div>
        </div>
      </section>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  )
}
