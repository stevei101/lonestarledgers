export default function Footer() {
  return (
    <footer className="bg-tx-blue text-white py-16 border-t-8 border-tx-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div
                className="w-10 h-12 bg-white flex flex-col items-center justify-center text-tx-blue"
                aria-hidden="true"
              >
                <i className="fas fa-star text-[8px] mb-1" />
                <span className="font-black text-2xl leading-none">L</span>
              </div>
              <span className="text-xl font-black tracking-tighter">LONE STAR LEDGERS</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Bookkeeping and advisory for Texas entrepreneurs — clarity and precision for businesses that plan to
              grow.
            </p>
            <p className="text-slate-500 text-xs leading-relaxed mb-8">
              Not affiliated with unrelated &ldquo;Lone Star Ledger&rdquo; school-data or news sites.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-tx-red transition-all"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-tx-copper">Serving Texas</h4>
            <ul className="grid grid-cols-2 gap-3 text-slate-400 text-sm">
              {['Austin', 'Pflugerville', 'Round Rock', 'Taylor', 'Dallas', 'Houston'].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-tx-copper">Legal</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <a href="#privacy" className="text-slate-300 hover:text-white transition-colors">
                  Privacy notice
                </a>
              </li>
              <li>
                <a href="#terms" className="text-slate-300 hover:text-white transition-colors">
                  Terms of use
                </a>
              </li>
            </ul>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Lone Star Ledgers LLC is a bookkeeping and financial advisory firm. We are not a CPA firm and do not
              provide audit, review, or attest services.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-slate-500 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Lone Star Ledgers LLC · Built in Texas
        </div>
      </div>
    </footer>
  )
}
