const INTEGRATIONS = ['QuickBooks', 'Xero', 'CSV export'] as const

const CITIES = ['Austin', 'Pflugerville', 'Round Rock', 'Dallas', 'Houston'] as const

export default function Trust() {
  return (
    <section className="py-20 bg-[#f9f7f4] border-y border-slate-200 scroll-reveal" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="trust-heading" className="text-3xl font-playfair text-tx-blue mb-4">
              Trusted by Texas operators
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Serving businesses in {CITIES.join(', ')}, and statewide remote clients. We integrate with the tools
              your CPA already uses.
            </p>
            <div className="flex flex-wrap gap-3">
              {INTEGRATIONS.map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-tx-blue shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              CSV export available today; direct QuickBooks and Xero sync on our roadmap — ask us for current
              status.
            </p>
          </div>

          <blockquote className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-tx-red">
            <p className="text-lg text-slate-700 italic font-playfair leading-relaxed mb-6">
              &ldquo;We cut month-end close from nine days to three. The categorization actually understands restaurant
              COGS — our CPA noticed immediately.&rdquo;
            </p>
            <footer className="text-sm">
              <cite className="not-italic font-bold text-tx-blue">Maria S.</cite>
              <span className="text-slate-500"> — Owner, multi-location food service, Round Rock</span>
            </footer>
            <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest">Representative client story</p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
