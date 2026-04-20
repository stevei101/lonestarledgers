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
    <section id="guts" className="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Visualization */}
          <div className="order-2 md:order-1">
            <div className="bg-slate-800 rounded-3xl p-10 shadow-2xl relative border border-slate-700 font-mono">
              <div className="flex items-center justify-between mb-10 border-b border-slate-700 pb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[10px] text-slate-500 tracking-[0.3em] uppercase">lone_star_engine.rs</span>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl relative overflow-hidden">
                  <div
                    className="scanner-line"
                    style={{
                      top: `${progress}%`,
                      display: progress > 0 && progress < 100 ? 'block' : 'none'
                    }}
                  ></div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-2">
                      <p className="text-tx-red text-[10px] font-bold uppercase tracking-widest">Inbound Stream</p>
                      <p className="text-xs opacity-60 italic">Processing: Receipt_TX_8829.png</p>
                    </div>
                    <i className="fas fa-file-invoice text-2xl opacity-20"></i>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full">
                    <div
                      className="bg-blue-500 h-full transition-all duration-700"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <p className="text-[10px] text-slate-500 uppercase mb-2">Vendor</p>
                    <p className={`text-xs ${vendorReady ? 'text-green-400' : 'text-slate-400'}`}>
                      {vendor}
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <p className="text-[10px] text-slate-500 uppercase mb-2">TX Compliance</p>
                    <p className={`text-xs ${taxReady ? 'text-green-400' : 'text-slate-400'}`}>
                      {tax}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={simulateProcess}
                  className="text-[10px] font-bold border border-slate-600 px-4 py-2 rounded-full hover:bg-slate-700 transition-colors uppercase tracking-widest"
                >
                  Run Live Test
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h4 className="text-tx-red font-bold tracking-[0.4em] uppercase text-xs mb-8">Superior Technical Guts</h4>
            <h2 className="text-5xl md:text-7xl mb-8 leading-tight italic font-playfair">No Guts, No Glory.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              While other firms rely on legacy spreadsheets or offshore data entry, we built our own <strong>Lone Star Ingestion Engine</strong> in Rust. It's built for safety, speed, and 100% US-based processing.
            </p>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <i className="fas fa-bolt text-tx-red mt-1"></i>
                <div>
                  <p className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Rust-Based Speed</p>
                  <p className="text-slate-400 text-sm">Thread-safe, memory-efficient processing that handles thousands of records in milliseconds.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <i className="fas fa-brain text-tx-red mt-1"></i>
                <div>
                  <p className="font-bold text-white mb-1 uppercase tracking-widest text-xs">Gemini AI Integration</p>
                  <p className="text-slate-400 text-sm">Automated categorization that learns the nuances of your specific industry transactions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
