import { Link } from 'react-router-dom'

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
  { label: 'Houzz', href: 'https://houzz.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-quarry border-t border-brass/30">
      <div className="container-lux py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 border border-brass flex items-center justify-center font-display italic text-lg text-brass">R</span>
            <span className="font-display text-lg">Royal Marble Studio</span>
          </div>
          <p className="text-sm text-stone leading-relaxed max-w-xs">
            Quarry-direct marble, granite, quartz and onyx for architects, designers and homeowners who don&apos;t compromise.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2.5 text-sm text-stone">
            <li><Link to="/" className="hover:text-brassBright transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-brassBright transition-colors">Products</Link></li>
            <li><Link to="/gallery" className="hover:text-brassBright transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-brassBright transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-brassBright transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Showroom</p>
          <ul className="space-y-2.5 text-sm text-stone">
            <li>481 Quarry Row, Design District</li>
            <li>Los Angeles, CA 90013</li>
            <li>+1 (213) 555-0199</li>
            <li>studio@royalmarble.example</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Follow</p>
          <ul className="space-y-2.5 text-sm">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone hover:text-brassBright transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lux py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone font-mono tracking-wide">
          <p>© {new Date().getFullYear()} Royal Marble Studio. All rights reserved.</p>
          <p>Crafted in stone, since 1997.</p>
        </div>
      </div>
    </footer>
  )
}
