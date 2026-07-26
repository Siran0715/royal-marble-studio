import { useId } from 'react'

/**
 * MarbleSlab — procedural stone texture.
 * Renders a unique, living marble/granite surface entirely in SVG
 * (no external photography), so every slab shown across the site
 * is generated, not stock. This is the site's signature visual device.
 *
 * variants tuned to real stone families: calacatta, nero, emperador,
 * onyx-green, travertine, granite-grey
 */
const PALETTES = {
  calacatta: { base: '#F3EEE3', vein: '#B8A98C', vein2: '#9C7A3C', freq: 0.012, seed: 4 },
  nero:      { base: '#1B1917', vein: '#3A3733', vein2: '#C79A4B', freq: 0.016, seed: 9 },
  emperador: { base: '#4A3626', vein: '#7A5A3C', vein2: '#D6B36A', freq: 0.014, seed: 2 },
  onyx:      { base: '#173226', vein: '#2E5C46', vein2: '#C79A4B', freq: 0.018, seed: 7 },
  travertine:{ base: '#E9DFC9', vein: '#CBB98F', vein2: '#A98650', freq: 0.02,  seed: 5 },
  granite:   { base: '#3A3B3D', vein: '#5C5D60', vein2: '#8E8A82', freq: 0.09,  seed: 11 },
}

export default function MarbleSlab({ variant = 'calacatta', className = '', animate = true, style, children }) {
  const uid = useId().replace(/:/g, '')
  const p = PALETTES[variant] || PALETTES.calacatta

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <svg
        className={`absolute inset-0 w-full h-full ${animate ? 'animate-veinDrift' : ''}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id={`vein-${uid}`}>
            <feTurbulence type="fractalNoise" baseFrequency={p.freq} numOctaves={5} seed={p.seed} result="noise" />
            <feColorMatrix in="noise" type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0" result="alphaNoise" />
            <feComponentTransfer in="alphaNoise" result="sharp">
              <feFuncA type="discrete" tableValues="0 0 0 0.2 0.4 0.7 0.9 1 1" />
            </feComponentTransfer>
            <feGaussianBlur in="sharp" stdDeviation="0.6" result="soft" />
            <feComposite in="soft" in2="SourceGraphic" operator="in" />
          </filter>
          <linearGradient id={`base-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={p.base} />
            <stop offset="100%" stopColor={p.base} stopOpacity="0.92" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#base-${uid})`} />
        <rect width="100%" height="100%" fill={p.vein} filter={`url(#vein-${uid})`} opacity="0.55" />
        <rect width="100%" height="100%" fill={p.vein2} filter={`url(#vein-${uid})`} opacity="0.25" transform="rotate(35 50 50)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
      {children}
    </div>
  )
}

export const MARBLE_VARIANTS = Object.keys(PALETTES)
