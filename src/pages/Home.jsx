import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MarbleSlab from '../components/MarbleSlab'
import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'
import CountUp from '../components/CountUp'
import { PRODUCTS, CATEGORIES } from '../data/products'
import { TESTIMONIALS, BRANDS, STATS } from '../data/content'
import HeroSlider from "../components/HeroSlider";

const FEATURED_CATEGORIES = CATEGORIES.filter((c) => c !== 'All').map((cat) => ({
  name: cat,
  variant: PRODUCTS.find((p) => p.category === cat)?.variant || 'calacatta',
  count: PRODUCTS.filter((p) => p.category === cat).length,
}))

const WHY = [
  { title: 'Quarry-Direct Sourcing', desc: 'We buy blocks straight from partner quarries in Italy, Spain and India — no middlemen inflating price or timeline.' },
  { title: 'In-House Fabrication', desc: 'Every cut, seam and polish happens in our own workshop under one roof, so quality never leaves our hands.' },
  { title: 'Precision Book-Matching', desc: 'Feature walls and islands are vein-matched slab to slab for a continuous, gallery-grade surface.' },
  { title: 'White-Glove Installation', desc: 'Our own certified crews install and seal on site — never subcontracted, always accountable.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
        <HeroSlider />
        <div className="relative z-10 container-lux pb-20 md:pb-28 w-full">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="eyebrow mb-5 text-brassBright"
          >
            Royal Marble Studio — Est. 1997
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="font-display text-quarry text-[clamp(2.4rem,7vw,5.2rem)] leading-[1.02] max-w-4xl"
          >
            Premium Marble &amp; Granite for <span className="italic text-brassBright">Luxury Spaces</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-stone max-w-lg mt-6 text-[1.02rem] leading-relaxed"
          >
            From quarry to installation — hand-selected Italian marble, granite, quartz and onyx, fabricated and fitted by our own master craftsmen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/products" className="btn-brass">Explore Collection</Link>
            <Link to="/contact" className="btn-ghost !text-quarry !border-quarry/30 hover:!border-brass hover:!text-brassBright">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute right-8 bottom-10 hidden lg:flex flex-col items-center gap-3 text-quarry/70"
        >
          <span className="[writing-mode:vertical-rl] font-mono text-[0.65rem] tracking-widest2 uppercase">Scroll</span>
          <span className="w-px h-14 bg-quarry/30" />
        </motion.div>
      </section>

        {/* Premium feature cards */}
            <section className="section-pad pt-24">
        <div className="container-lux">
      
          <SectionHeading
            eyebrow="Why Choose Royal Marble"
            title="Experience the Difference"
            desc="From consultation to installation, we ensure every project receives exceptional craftsmanship and personalized attention."
          />
      
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      
            <motion.div
              whileHover={{ y: -8 }}
              className="border border-[var(--line)] rounded-xl p-8 text-center"
            >
              <div className="text-5xl mb-5">💬</div>
      
              <h3 className="font-display text-xl mb-3">
                Free Consultation
              </h3>
      
              <p className="text-sm opacity-70 leading-relaxed">
                Get expert guidance on choosing the ideal marble, granite or quartz for your project.
              </p>
            </motion.div>
      
            <motion.div
              whileHover={{ y: -8 }}
              className="border border-[var(--line)] rounded-xl p-8 text-center"
            >
              <div className="text-5xl mb-5">🪨</div>
      
              <h3 className="font-display text-xl mb-3">
                Premium Stone Selection
              </h3>
      
              <p className="text-sm opacity-70 leading-relaxed">
                Explore an exclusive collection of imported and domestic natural stones.
              </p>
            </motion.div>
      
            <motion.div
              whileHover={{ y: -8 }}
              className="border border-[var(--line)] rounded-xl p-8 text-center"
            >
              <div className="text-5xl mb-5">📐</div>
      
              <h3 className="font-display text-xl mb-3">
                Transparent Pricing
              </h3>
      
              <p className="text-sm opacity-70 leading-relaxed">
                Clear quotations with no hidden costs from selection through installation.
              </p>
            </motion.div>
      
            <motion.div
              whileHover={{ y: -8 }}
              className="border border-[var(--line)] rounded-xl p-8 text-center"
            >
              <div className="text-5xl mb-5">🏆</div>
      
              <h3 className="font-display text-xl mb-3">
                Professional Installation
              </h3>
      
              <p className="text-sm opacity-70 leading-relaxed">
                Experienced craftsmen ensure flawless fabrication and precision installation.
              </p>
            </motion.div>
      
          </div>
      
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="pt-15 pb-20">
        <div className="container-lux">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="The Collection"
              title="Featured Marble Categories"
              desc="Five material families, each fabricated to the same exacting tolerances — chosen to suit the light, traffic and mood of your space."
            />
            <Link to="/products" className="btn-ghost self-start md:self-auto shrink-0">View All Products</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {FEATURED_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to="/products" className="block group card-lift">
                  <MarbleSlab variant={cat.variant} className="h-64 border border-[var(--line)]">
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <p className="spec-tag !text-stone mb-1">{cat.count} finishes</p>
                      <h3 className="font-display text-xl text-quarry">{cat.name}</h3>
                      <span className="mt-2 text-[0.7rem] font-mono uppercase tracking-widest2 text-brassBright opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore →
                      </span>
                    </div>
                  </MarbleSlab>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad bg-[var(--bg-2)]">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Why Royal Marble"
            title="Why Design Firms Choose Us"
            desc="Twenty-eight years of stonework, distilled into four commitments we hold on every project — residential or hospitality, one slab or four hundred."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-xl mt-3 mb-2.5">{w.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{w.desc}</p>
                <div className="hairline-x mt-5" />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-[var(--line)]">
            {STATS.map((s) => (
              <div key={s.id} className="text-center md:text-left">
                <p className="font-display text-4xl md:text-5xl text-brass">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="spec-tag mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Client Voices"
            title="Customer Testimonials"
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.id} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="pb-20 md:pb-28">
        <div className="container-lux">
          <p className="eyebrow text-center mb-8">Brands We Work With</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {BRANDS.map((b) => (
              <span key={b} className="font-display italic text-xl md:text-2xl opacity-50 hover:opacity-100 hover:text-brass transition-all">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden">
        <MarbleSlab variant="emperador" className="min-h-[280px] flex items-center">
          <div className="container-lux relative z-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="font-display text-quarry text-3xl md:text-4xl max-w-lg text-center md:text-left">
              Ready to bring stone into your space?
            </h3>
            <Link to="/contact" className="btn-brass shrink-0">Request a Quote</Link>
          </div>
        </MarbleSlab>
      </section>
    </>
  )
}
