import { useState } from 'react'

export default function Technical() {
  const [progress, setProgress] = useState(0)
  const [vendor, setVendor] = useState('Analyzing...')
  const [tax, setTax] = useState('Verifying...')
  const [vendorReady, setVendorReady] = useState(false)
  const [taxReady, setTaxReady] = useState(false)

  const simulateProcess = () => {
    setProgress(0)
    setVendor('Analyzing...')
    setTax('Verifying...')
    setVendorReady(false)
    setTaxReady(false)

    setTimeout(() => {
      setProgress(100)
      setTimeout(() => {
        setVendor("Terry Black's BBQ")
        setVendorReady(true)
        setTimeout(() => {
          setTax('8.25% Applied [✓]')
          setTaxReady(true)
        }, 500)
      }, 700)
    }, 100)
  }

  return (
    <section id="guts" className="py-32 bg-slate-900 text-white relative overflow-hidden scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-slate-800 rounded-3xl p-10 shadow-2xl relative border border-slate-700 font-mono">
              <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-6">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] text-slate-500 tracking-[0.3em] uppercase">document_scan_demo</span>
              </div>

              <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-6 text-center">
                Simulated demo · Sample receipt
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl relative overflow-hidden">
                  <div
                    className="scanner-line"
                    style={{
                      top: `${progress}%`,
                      display: progress > 0 && progress < 100 ? 'block' : 'none',
                    }}
                  />
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-2">
                      <p className="text-tx-red text-[10px] font-bold uppercase tracking-widest">Inbound Stream</p>
                      <p className="text-xs opacity-60 italic">Processing: Receipt_TX_8829.png</p>
                    </div>
                    <i className="fas fa-file-invoice text-2xl opacity-20" aria-hidden="true" />
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full">
                    <div
                      className="bg-blue-500 h-full transition-all duration-700"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <p className="text-[10px] text-slate-500 uppercase mb-2">Vendor</p>
                    <p className={`text-xs ${vendorReady ? 'text-green-400' : 'text-slate-400'}`}>{vendor}</p>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <p className="text-[10px] text-slate-500 uppercase mb-2">TX Compliance</p>
                    <p className={`text-xs ${taxReady ? 'text-green-400' : 'text-slate-400'}`}>{tax}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={simulateProcess}
                  className="text-xs font-bold bg-tx-copper text-white px-6 py-3 rounded-lg hover:bg-tx-red transition-colors uppercase tracking-widest"
                >
                  Try a sample scan
                </button>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h4 className="text-tx-copper font-bold tracking-[0.3em] uppercase text-xs mb-6">Built for performance</h4>
            <h2 className="text-4xl md:text-6xl mb-6 leading-tight font-playfair">AI-powered. Built for reliability.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Our ingestion engine uses AI-assisted OCR and categorization with a Rust core for speed and stability —
              so your books stay accurate when volume spikes.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {['AI OCR', 'Smart categories', 'Rust engine'].map((badge) => (
                <span
                  key={badge}
                  className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-tx-copper/20 text-tx-copper border border-tx-copper/40"
                >
                  {badge}
                </span>
              ))}
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <i className="fas fa-file-invoice text-tx-copper mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Document processing</p>
                  <p className="text-slate-400 text-sm">
                    Invoices, receipts, and statements extracted with high accuracy — less manual entry for your team.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <i className="fas fa-chart-line text-tx-copper mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Real-time visibility</p>
                  <p className="text-slate-400 text-sm">
                    Cash flow, tax estimates, and spending patterns in one place for better decisions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
