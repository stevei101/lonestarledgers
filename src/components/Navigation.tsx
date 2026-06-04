import { useState } from 'react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#guts', label: 'How it works' },
  { href: '#about', label: 'About' },
] as const

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24 items-center">
          <a href="#" className="flex items-center space-x-3" aria-label="Lone Star Ledgers home">
            <div
              className="w-12 h-14 bg-tx-blue rounded-b-lg flex flex-col items-center justify-center text-white shadow-md"
              aria-hidden="true"
            >
              <i className="fas fa-star text-white text-[10px] mb-1" />
              <span className="font-bold text-2xl leading-none">L</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-tx-blue leading-none">
                LONE STAR
              </span>
              <span className="text-[10px] font-black tracking-[0.4em] text-tx-red">LEDGERS</span>
            </div>
          </a>

          <div className="hidden md:flex space-x-8 items-center font-semibold text-xs tracking-widest uppercase">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-slate-600 hover:text-tx-blue">
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 bg-tx-red text-white hover:bg-tx-blue transition-colors rounded-lg shadow-md"
            >
              Get started
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-tx-blue"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`} aria-hidden="true" />
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden pb-6 border-t border-slate-100 flex flex-col gap-4 pt-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 font-semibold uppercase tracking-widest text-sm py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 bg-tx-red text-white text-center font-bold uppercase tracking-widest text-sm rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Get started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
