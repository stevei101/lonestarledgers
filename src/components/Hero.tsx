import DashboardMockup from './DashboardMockup'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 hero-gradient overflow-hidden">
      <svg className="state-bg-overlay" viewBox="0 0 1000 1000" fill="#002868" aria-hidden="true">
        <path d="M962.3,428.1c-14.7-27.1-50.6-56.1-50.6-56.1s-16.7-11.8-21.6-19.6c-4.9-7.8-15.7-25.5-15.7-25.5l-2.9-24.5l-19.6-13.7l-7.8-30.4l-15.7-3.9l-22.5,13.7l-4.9-25.5l-12.7-1.1L781,250.7L730,227.2l-37.2-56.8l-15.7,3.9l-11.8-17.6l-21.6,2.9l-6.9,25.5l-44.1,2l-47-51.9l-26.5,4.9l-11.8-22.5l-46.1-1.1L453.6,56.6l-50,2l-3.9-39.2l-330.3,5.9l19.6,359.7l30.4,12.7l12.7,48l13.7,11.8l20.6,51l26.5,11.8l-1,34.3l37.2,14.7l17.6,37.2l40.2,12.7l31.4,47l25.5,13.7l10.8,42.1l43.1,44.1l23.5,47l48,15.7l22.5,44.1l47,15.7l29.4,44.1l111.7,46.1l44.1-12.7l21.6-27.4l15.7,2L806.5,885l19.6-5.9l5.9-26.5l37.2-11.8l4.9-24.5l30.4-33.3l-2.9-26.5l26.5-16.7l10.8-23.5l14.7,2.9l22.5-35.3l-5.9-21.6l18.6-24.5l-2.9-22.5l25.5-35.3l-5.9-21.6l12.7-18.6l24.5,15.7l25.5-44.1l-10.8-19.6l18.6-43.1l-11.8-17.6L962.3,428.1z" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-3/5 text-center md:text-left">
            <div className="inline-flex items-center space-x-3 mb-8 bg-white py-2 px-4 rounded-full border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tx-red" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-widest text-tx-blue uppercase">
                Bookkeeping &amp; advisory for Texas SMBs
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-6 leading-[1.05] tracking-tight font-playfair text-tx-blue">
              Texas-Modern Bookkeeping
            </h1>

            <p className="text-xl text-slate-700 mb-4 max-w-xl leading-relaxed font-medium">
              CPA-ready books, less manual entry, and real-time cash visibility — without the spreadsheet chaos.
            </p>

            <p className="text-base text-slate-500 mb-10 max-w-xl leading-relaxed">
              Built for owner-operators and growing teams across Central Texas and beyond — retail, trades, and
              professional services from roughly $500K to $10M in annual revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-10 py-4 bg-tx-red text-white font-bold text-base rounded-lg shadow-lg hover:bg-tx-blue transition-colors text-center"
              >
                Get started today
              </a>
              <a
                href="#guts"
                className="px-10 py-4 border-2 border-tx-blue text-tx-blue font-semibold text-base rounded-lg hover:bg-tx-blue hover:text-white transition-colors text-center"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="md:w-2/5 w-full">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
