import { CONTACT_HREF } from '../constants'

const services: Array<{
  icon: string
  title: string
  description: string
  learnMore: string
  isCopperTheme?: boolean
}> = [
  {
    icon: 'fa-file-invoice-dollar',
    title: 'Precision Ledgering',
    description:
      'Daily reconciliation via our automated engine. Every transaction is verified, categorized, and audit-protected in real-time.',
    learnMore: '#guts',
  },
  {
    icon: 'fa-chart-line',
    title: 'Growth Advisory',
    isCopperTheme: true,
    description:
      'Cash flow forecasting and KPI dashboards for growing firms — see what is coming before month-end surprises.',
    learnMore: CONTACT_HREF,
  },
  {
    icon: 'fa-landmark',
    title: 'Comptroller Guard',
    description:
      'Texas Franchise Tax and Sales & Use Tax tracking aligned with Comptroller requirements — stay audit-ready.',
    learnMore: CONTACT_HREF,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="h-1 w-20 bg-tx-red mb-8" aria-hidden="true" />
            <h2 className="text-5xl md:text-6xl mb-6 font-playfair text-tx-blue">Service as big as Texas.</h2>
            <p className="text-lg text-slate-500">
              Complete bookkeeping for owner-operators and finance leads — from document intake through
              CPA-ready exports.
            </p>
          </div>
          <p className="text-sm font-semibold text-tx-copper uppercase tracking-widest">
            Works with QuickBooks &amp; Xero
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className={`p-12 border rounded-3xl card-hover group relative overflow-hidden transition-all duration-300 flex flex-col ${
                service.isCopperTheme
                  ? 'border-slate-100 bg-white border-b-8 border-tx-copper'
                  : 'border-slate-100 bg-slate-50'
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:text-white transition-all duration-500 ${
                  service.isCopperTheme
                    ? 'bg-slate-50 text-tx-copper group-hover:bg-tx-copper'
                    : 'bg-white text-tx-blue group-hover:bg-tx-blue'
                }`}
                aria-hidden="true"
              >
                <i className={`fas ${service.icon} text-2xl`} />
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${service.isCopperTheme ? 'text-tx-copper' : 'text-tx-blue'}`}
              >
                {service.title}
              </h3>
              <p
                className={`flex-grow ${
                  service.isCopperTheme ? 'text-slate-700 leading-relaxed font-medium' : 'text-slate-500 leading-relaxed'
                }`}
              >
                {service.description}
              </p>
              <a
                href={service.learnMore}
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-tx-red hover:text-tx-blue transition-colors"
              >
                Learn more <i className="fas fa-arrow-right text-[10px]" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
