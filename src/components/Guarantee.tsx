export default function Guarantee() {
  return (
    <section id="about" className="py-32 bg-white scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-tx-red mb-4">About us</p>
          <h2 className="text-5xl md:text-6xl mb-8 max-w-4xl mx-auto font-playfair text-tx-blue">
            Built for Texas businesses
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Lone Star Ledgers is bookkeeping and financial advisory for small and mid-size Texas companies — not a
            news site, school data portal, or unrelated &ldquo;Lone Star Ledger&rdquo; projects you may find elsewhere
            online.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#f9f7f4] border-2 border-tx-red rounded-2xl p-10 mb-20 text-center">
          <h3 className="text-2xl font-playfair text-tx-red mb-4">Our guarantee</h3>
          <p className="text-slate-600 leading-relaxed">
            We understand the needs of Texas businesses — from family-owned shops to growing companies. If you are
            not satisfied with our service, we will make it right. No offshore data entry. US-based team. A real
            handshake-level commitment to your books.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-16 text-center">
          <div>
            <h4 className="text-4xl font-black text-tx-blue mb-2">100%</h4>
            <p className="text-xs uppercase font-bold tracking-widest text-slate-500">US-based staff</p>
          </div>
          <div>
            <h4 className="text-4xl font-black text-tx-blue mb-2">Real-time</h4>
            <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Ledger visibility</p>
          </div>
          <div>
            <h4 className="text-4xl font-black text-tx-blue mb-2">Zero</h4>
            <p className="text-xs uppercase font-bold tracking-widest text-slate-500">Outsourced data entry</p>
          </div>
        </div>
      </div>
    </section>
  )
}
