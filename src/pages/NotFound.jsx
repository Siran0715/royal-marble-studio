import { Link } from 'react-router-dom'
import MarbleSlab from '../components/MarbleSlab'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <MarbleSlab variant="nero" className="absolute inset-0" />
      <div className="relative z-10 text-center text-quarry px-6">
        <p className="eyebrow mb-3">Slab Not Found</p>
        <h1 className="font-display text-6xl mb-6">404</h1>
        <p className="text-stone mb-8 max-w-sm mx-auto">This page hasn&apos;t been quarried yet. Let&apos;s get you back to solid ground.</p>
        <Link to="/" className="btn-brass">Return Home</Link>
      </div>
    </section>
  )
}
