import { motion } from 'framer-motion'
import MarbleSlab from '../components/MarbleSlab'
import SectionHeading from '../components/SectionHeading'
import CountUp from '../components/CountUp'
import { TEAM, STATS, PROCESS, CERTIFICATIONS } from '../data/content'
import aboutBg from "../assets/hero/aboutBg.jpg";

export default function About() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${aboutBg})`,
  }}
/>

<div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container-lux grid md:grid-cols-2 gap-10 items-end">
          <div>
            <p className="eyebrow text-brass mb-3">Since 1997</p>
            <h1 className="font-display text-white text-[clamp(2.2rem,5vw,3.8rem)]">
              Twenty-Eight Years of Stone, Craft and Precision
            </h1>
          </div>
          <p className="text-white/85 max-w-md md:justify-self-end leading-relaxed">
            Royal Marble Studio began as a single family workshop in 1997, cutting slabs by hand for local architects.
            Today we operate a full quarry-to-install pipeline for residential and hospitality clients across the country —
            without losing the hand-finished attention that started it all.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section-pad">
        <div className="container-lux grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-[var(--line)]"
          >
            <span className="eyebrow">Our Vision</span>
            <h3 className="font-display text-2xl mt-3 mb-3">Stone as a lasting material, not a trend.</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              We want every space we touch to still feel considered in fifty years — chosen for how the light moves across it, not for what's fashionable this season.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 border border-[var(--line)]"
          >
            <span className="eyebrow">Our Mission</span>
            <h3 className="font-display text-2xl mt-3 mb-3">Uncompromising craft, honestly priced.</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              To give architects, designers and homeowners direct access to quarry-grade stone and master fabrication — with transparent specs and no hidden markup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="pb-4">
        <div className="container-lux grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-[var(--line)]">
          {STATS.map((s) => (
            <div key={s.id} className="text-center">
              <p className="font-display text-4xl md:text-5xl text-brass">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="spec-tag mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading eyebrow="How We Work" title="Our Process" desc="Five stages, the same sequence on every project — from a single vanity top to an entire hotel lobby." />
          <div className="mt-12 grid md:grid-cols-5 gap-8">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <span className="font-mono text-xs text-brass">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-lg mt-2 mb-2">{p.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{p.desc}</p>
                {i < PROCESS.length - 1 && (
                  <span className="hidden md:block absolute top-1.5 -right-4 w-8 h-px bg-[var(--line)]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad bg-[var(--bg-2)]">
        <div className="container-lux">
          <SectionHeading eyebrow="Leadership" title="Our Team" desc="The people behind every slab that leaves our workshop." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {TEAM.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <MarbleSlab variant={m.variant} className="h-64 border border-[var(--line)] mb-4" />
                <h3 className="font-display text-lg">{m.name}</h3>
                <p className="spec-tag mt-1">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading eyebrow="Standards" title="Certifications" />
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {CERTIFICATIONS.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-4 p-5 border border-[var(--line)]"
              >
                <span className="w-2 h-2 rounded-full bg-brass shrink-0" />
                <span className="text-sm">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
