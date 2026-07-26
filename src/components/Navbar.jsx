import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const { scrolled } = useScrollPosition()
  const [open, setOpen] = useState(false)
  useLockBodyScroll(open)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 glass' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="container-lux flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 border border-brass flex items-center justify-center font-display italic text-lg text-brass">R</span>
          <span className="font-display text-lg tracking-wide leading-none">
            Royal Marble<span className="block text-[0.62rem] eyebrow mt-1">Studio</span>
          </span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `relative font-mono text-[0.72rem] tracking-widest2 uppercase pb-1 transition-colors ${
                    isActive ? 'text-brass' : 'text-current opacity-80 hover:opacity-100'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-0.5 h-[1.5px] w-full bg-brass"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block w-6 h-px bg-current transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass mt-3"
          >
            <ul className="container-lux flex flex-col py-6 gap-5">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `font-mono text-sm tracking-widest2 uppercase ${isActive ? 'text-brass' : ''}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
