import { motion } from 'framer-motion'
import ContactHero from '../components/ContactHero'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import ContactCTABanner from "../components/ContactCTABanner";

const HOURS = [
  ['Monday – Friday', '9:00 AM – 6:00 PM'],
  ['Saturday', '10:00 AM – 4:00 PM'],
  ['Sunday', 'By appointment'],
]

export default function Contact() {
  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden">
  <ContactHero />

  <div className="relative z-10 container-lux flex items-center justify-start min-h-[80vh]">
  <div className="max-w-3xl">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="eyebrow text-brassBright mb-4"
    >
      GET IN TOUCH
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="font-display text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-tight max-w-3xl"
    >
      Let's Build Something
      <br />
      Extraordinary Together
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="text-white/85 mt-6 max-w-xl text-lg leading-relaxed"
    >
      Whether you're renovating a home, designing a commercial
      space, or selecting premium marble for your next project,
      our specialists are ready to guide you from selection to
      installation.
    </motion.p>
    </div>
  </div>
      </section>


      <section className="section-pad !pt-16">
        <div className="container-lux grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Project Enquiry" title="Send a Message" />
            <div id="contact-form" className="mt-2">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-7 border border-[var(--line)]"
            >
              <p className="eyebrow mb-4">Showroom</p>
              <p className="text-sm leading-relaxed opacity-80">
                481 Quarry Row, Design District<br />
                Los Angeles, CA 90013
              </p>
              <div className="hairline-x my-5" />
              <dl className="text-sm space-y-3">
                <div className="flex justify-between">
                  <dt className="opacity-60">Phone</dt>
                  <dd>+1 (213) 555-0199</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="opacity-60">Email</dt>
                  <dd>studio@royalmarble.example</dd>
                </div>
              </dl>
              <a
                href="https://wa.me/12135550199"
                target="_blank"
                rel="noreferrer"
                className="btn-brass w-full justify-center mt-6"
              >
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
  className="p-7 border border-[var(--line)] rounded-xl bg-[var(--surface)]"
>
  <p className="eyebrow mb-5">Business Hours</p>

  <ul className="text-sm space-y-4">
    {HOURS.map(([day, time]) => (
      <li
        key={day}
        className="flex justify-between items-center border-b border-[var(--line)] pb-3 last:border-0 last:pb-0"
      >
        <span className="opacity-70">{day}</span>

        <span className="font-medium">{time}</span>
      </li>
    ))}
  </ul>

  <div className="mt-7 rounded-lg border border-[#C79A4B]/30 bg-[#C79A4B]/10 px-4 py-3">
    <p className="text-sm font-medium text-[#C79A4B]">
      Appointments Recommended
    </p>

    <p className="text-xs mt-1 opacity-70">
      Schedule your visit for dedicated assistance and faster material selection.
    </p>
  </div>
</motion.div>
          </div>
        </div>
      </section>

       <section className="pb-24">
  <div className="container-lux">
    <ContactCTABanner />
  </div>
</section>

      {/* MAP */}
      <section className="pb-16">
  <div className="container-lux">
    <div className="overflow-hidden rounded-2xl border border-[var(--line)] shadow-2xl h-[500px]">
      <iframe
        title="Royal Marble Studio location"
        src="https://www.google.com/maps?q=Los+Angeles+Design+District&output=embed"
        width="100%"
        height="100%"
        style={{
          border: 0,
          filter: "grayscale(0.2) contrast(1.05)",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>
    </>
  )
}
