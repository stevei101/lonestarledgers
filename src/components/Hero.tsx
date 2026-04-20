import DashboardMockup from './DashboardMockup'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 hero-gradient overflow-hidden">
      {/* Texas Map Background */}
      <svg className="state-bg-overlay" viewBox="0 0 1000 1000" fill="#002868">
        <path d="M962.3,428.1c-14.7-27.1-50.6-56.1-50.6-56.1s-16.7-11.8-21.6-19.6c-4.9-7.8-15.7-25.5-15.7-25.5l-2.9-24.5l-19.6-13.7l-7.8-30.4l-15.7-3.9l-22.5,13.7l-4.9-25.5l-12.7-1.1L781,250.7L730,227.2l-37.2-56.8l-15.7,3.9l-11.8-17.6l-21.6,2.9l-6.9,25.5l-44.1,2l-47-51.9l-26.5,4.9l-11.8-22.5l-46.1-1.1L453.6,56.6l-50,2l-3.9-39.2l-330.3,5.9l19.6,359.7l30.4,12.7l12.7,48l13.7,11.8l20.6,51l26.5,11.8l-1,34.3l37.2,14.7l17.6,37.2l40.2,12.7l31.4,47l25.5,13.7l10.8,42.1l43.1,44.1l23.5,47l48,15.7l22.5,44.1l47,15.7l29.4,44.1l111.7,46.1l44.1-12.7l21.6-27.4l15.7,2L806.5,885l19.6-5.9l5.9-26.5l37.2-11.8l4.9-24.5l30.4-33.3l-2.9-26.5l26.5-16.7l10.8-23.5l14.7,2.9l22.5-35.3l-5.9-21.6l18.6-24.5l-2.9-22.5l25.5-35.3l-5.9-21.6l12.7-18.6l24.5,15.7l25.5-44.1l-10.8-19.6l18.6-43.1l-11.8-17.6L962.3,428.1z"/>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Content */}
          <div className="md:w-3/5 text-center md:text-left">
            <div className="inline-flex items-center space-x-3 mb-8 bg-white py-2 px-4 rounded-full border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tx-red"></span>
              <span className="text-[11px] font-black tracking-widest text-tx-blue uppercase">Zero-Lag Financials</span>
            </div>

            <h1 className="text-6xl md:text-8xl mb-8 leading-[0.9] tracking-tight font-playfair">
              Texas Grit. <br/>
              <span className="text-tx-blue">Digital</span> <br/>
              <span className="text-tx-red">Precision.</span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-light">
              Powered by Gemini AI and our high-concurrency Rust engine, we deliver audit-proof bookkeeping for the bold businesses defining the new Texas economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a href="#contact" className="px-10 py-5 bg-tx-blue text-white font-bold text-lg shadow-2xl hover:bg-slate-900 transition-all flex items-center justify-center gap-4">
                SECURE YOUR BOOKS <i className="fas fa-star text-[10px]"></i>
              </a>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/50 backdrop-blur border border-white shadow-sm rounded-lg">
                <i className="fas fa-lock text-tx-red text-2xl"></i>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Security</p>
                  <p className="font-bold text-tx-blue uppercase">100% US SOIL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="md:w-2/5">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
