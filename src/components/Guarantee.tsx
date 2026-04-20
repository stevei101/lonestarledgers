export default function Guarantee() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <i className="fas fa-star text-tx-red text-4xl mb-12 animate-pulse"></i>
        <h2 className="text-5xl md:text-7xl mb-10 max-w-4xl mx-auto italic font-playfair">Don't mess with your books.</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-20 leading-relaxed">
          In Texas, a handshake means everything. At Lone Star Ledgers, we're bringing that level of accountability to your digital financials. No outsourcing, no compromises.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-20">
          <div>
            <h4 className="text-4xl font-black text-tx-blue mb-2">100%</h4>
            <p className="text-xs uppercase font-bold tracking-widest text-slate-400">US-Based Staff</p>
          </div>
          <div>
            <h4 className="text-4xl font-black text-tx-blue mb-2">Real-Time</h4>
            <p className="text-xs uppercase font-bold tracking-widest text-slate-400">Ledger Visibility</p>
          </div>
          <div>
            <h4 className="text-4xl font-black text-tx-blue mb-2">Zero</h4>
            <p className="text-xs uppercase font-bold tracking-widest text-slate-400">Outsourced Data</p>
          </div>
        </div>
      </div>
    </section>
  )
}
