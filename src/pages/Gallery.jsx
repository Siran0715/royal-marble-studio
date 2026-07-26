import { useState } from 'react'
import { motion } from 'framer-motion'
import MarbleSlab from '../components/MarbleSlab'
import SectionHeading from '../components/SectionHeading'
import Lightbox from '../components/Lightbox'
import { GALLERY, INSPIRATION_3D, BEFORE_AFTER } from '../data/gallery'
import GalleryHero from "../components/GalleryHero";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [reveal, setReveal] = useState({})

  const nav = (dir) => {
    setActiveIndex((i) => (i + dir + GALLERY.length) % GALLERY.length)
  }

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <GalleryHero />
        <div className="relative z-10 container-lux w-full">
  <div className="max-w-3xl">

    <motion.p
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="eyebrow text-brassBright mb-5"
>
  Luxury Portfolio
</motion.p>

<motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.45, duration: 0.7 }}
  className="font-display text-white text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.05] max-w-4xl"
>
  Explore Our
  <br />
  Finest Marble Projects
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
  className="text-white/80 text-lg mt-6 max-w-xl"
>
  Discover handcrafted interiors featuring premium marble,
  granite, quartz and natural stone installations.
</motion.p>

  </div>
</div>
        {/* <div className="relative z-10 container-lux">
          <p className="eyebrow text-brassBright mb-3">Portfolio</p>
          <h1 className="font-display text-black text-[clamp(2.2rem,5vw,3.6rem)] max-w-2xl">
            
          </h1>
          <p className="text-stone mt-4 max-w-xl">
            
          </p>
        </div> */}
      </section>

      {/* MASONRY GALLERY */}
      <section className="section-pad !pt-16">
        <div className="container-lux">
          <SectionHeading eyebrow="Completed Work" title="Project Gallery" desc="Tap any image to open it full-screen." />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 mt-10 [&>*]:mb-5">
            {GALLERY.map((g, i) => (
              <motion.button
                key={g.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 6) * 0.06 }}
                onClick={() => setActiveIndex(i)}
                className="block w-full text-left break-inside-avoid group relative overflow-hidden border border-[var(--line)]"
              >
                <MarbleSlab
                  variant={g.variant}
                  className="w-full transition-transform duration-700 group-hover:scale-[1.06]"
                  style={{ height: g.h }}
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="spec-tag !text-stone mb-1">{g.tag}</p>
                    <p className="font-display text-lg text-quarry">{g.title}</p>
                  </div>
                </MarbleSlab>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 3D DESIGN INSPIRATION */}
      <section className="section-pad bg-ink text-quarry">
        <div className="container-lux">
          <SectionHeading
            eyebrow="3D Design Inspiration"
            title="See the Stone in the Room"
            desc="Concept visualisations across living rooms, kitchens, bathrooms, staircases, TV walls and hotel lobbies — each rendered with a real Royal Marble finish."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {INSPIRATION_3D.map((d, i) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden border border-white/10"
              >
                <MarbleSlab variant={d.variant} className="h-72 transition-transform duration-700 group-hover:scale-[1.05]">
                  <div className="absolute top-4 left-4 spec-tag !text-stone bg-black/40 px-2 py-1 backdrop-blur-sm">3D Render</div>
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="font-display text-xl text-quarry">{d.title}</h3>
                    <p className="text-sm text-stone mt-1">{d.desc}</p>
                  </div>
                </MarbleSlab>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading eyebrow="Transformations" title="Before &amp; After" desc="Drag isn't needed — hover to reveal the after." />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {BEFORE_AFTER.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-80 overflow-hidden border border-[var(--line)]"
                onMouseEnter={() => setReveal((r) => ({ ...r, [b.id]: true }))}
                onMouseLeave={() => setReveal((r) => ({ ...r, [b.id]: false }))}
              >
                {/* Before: flat grey */}
                <div className="absolute inset-0 bg-[#8b8880] flex items-end p-5">
                  <p className="spec-tag !text-white/90">Before — {b.before}</p>
                </div>
                {/* After: marble slab, revealed via clip-path wipe */}
                <div
                  className="absolute inset-0 transition-[clip-path] duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                  style={{ clipPath: reveal[b.id] ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
                >
                  <MarbleSlab variant={b.variant} className="w-full h-full">
                    <div className="absolute inset-0 flex items-end p-5">
                      <p className="spec-tag !text-stone">After — {b.after}</p>
                    </div>
                  </MarbleSlab>
                </div>
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="font-display text-quarry drop-shadow text-sm md:text-base">{b.title}</span>
                  <span className="spec-tag !text-quarry bg-black/40 px-2 py-1 backdrop-blur-sm md:hidden">Tap &amp; hold</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox items={GALLERY} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onNav={nav} />
    </>
  )
}
