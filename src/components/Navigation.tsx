export default function Navigation() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-14 bg-tx-blue rounded-b-lg flex flex-col items-center justify-center text-white shadow-md">
              <i className="fas fa-star text-white text-[10px] mb-1"></i>
              <span className="font-bold text-2xl leading-none">L</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-tx-blue leading-none">LONE STAR</span>
              <span className="text-[10px] font-black tracking-[0.4em] text-tx-red">LEDGERS</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-10 items-center font-bold text-xs tracking-widest uppercase">
            <a href="#services" className="nav-link text-slate-600 hover:text-tx-blue">Services</a>
            <a href="#guts" className="nav-link text-slate-600 hover:text-tx-blue">The Tech</a>
            <a href="#about" className="nav-link text-slate-600 hover:text-tx-blue">The Handshake</a>
            <a href="#contact" className="px-8 py-4 bg-tx-red text-white hover:brightness-110 transition-all shadow-lg flex items-center gap-3">
              <span>CONSULTATION</span>
              <i className="fas fa-chevron-right text-[10px]"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
