export default function Footer() {
  return (
    <footer className="bg-tx-blue text-white py-24 border-t-8 border-tx-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-12 bg-white flex flex-col items-center justify-center text-tx-blue relative">
                <i className="fas fa-star text-[8px] mb-1"></i>
                <span className="font-black text-2xl leading-none">L</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">LONE STAR LEDGERS</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              The financial bedrock for Texas entrepreneurs. Providing the clarity and precision required to turn small businesses into Texas institutions.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-tx-red transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-tx-red transition-all">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* State Focus */}
          <div>
            <h4 className="font-black uppercase tracking-[0.4em] text-xs mb-10 text-tx-red">State Focus</h4>
            <ul className="grid grid-cols-2 gap-4 text-slate-400 text-sm font-bold">
              <li className="hover:text-white cursor-pointer">Pflugerville</li>
              <li className="hover:text-white cursor-pointer">Round Rock</li>
              <li className="hover:text-white cursor-pointer">Austin</li>
              <li className="hover:text-white cursor-pointer">Taylor</li>
              <li className="hover:text-white cursor-pointer">Dallas</li>
              <li className="hover:text-white cursor-pointer">Houston</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-white/5 p-8 border border-white/10">
            <h4 className="font-black uppercase tracking-[0.3em] text-xs mb-6">Texas Disclosure</h4>
            <p className="text-[10px] text-slate-500 italic leading-relaxed uppercase tracking-widest mb-6">
              Lone Star Ledgers LLC is a private bookkeeping and financial advisory firm. We are NOT a CPA firm and do not provide audit, review, or attest services under the Texas Public Accountancy Act.
            </p>
            <p className="text-[10px] text-slate-400 font-bold tracking-widest">TX PERMIT #8829-LEDGER</p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-[9px] font-black tracking-[0.6em] uppercase">
          &copy; 2026 LONE STAR LEDGERS LLC • BUILT IN TEXAS
        </div>
      </div>
    </footer>
  )
}
