const services = [
  {
    icon: 'fa-hat-cowboy-side',
    title: 'Precision Ledgering',
    description: 'Daily reconciliation via our automated engine. Every transaction is verified, categorized, and audit-protected in real-time.'
  },
  {
    icon: 'fa-chart-line',
    title: 'The Pflugerville Pivot',
    isCopperTheme: true,
    description: 'Strategic advisory for growing firms. We offer cash flow forecasting and KPI dashboards to help you scale your business.'
  },
  {
    icon: 'fa-landmark',
    title: 'Comptroller Guard',
    description: 'Specialized handling of Texas Franchise Tax and Sales & Use Tax. We keep you perfectly aligned with the Comptroller.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="h-1 w-20 bg-tx-red mb-8"></div>
            <h2 className="text-5xl md:text-6xl mb-6 font-playfair">Service as Big as Texas.</h2>
            <p className="text-lg text-slate-500">We don't just crunch numbers. We build the financial infrastructure for the trailblazers of the Silicon Hills and the traditional trades alike.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-12 border rounded-3xl card-hover group relative overflow-hidden transition-all duration-300 ${
                service.isCopperTheme
                  ? 'border-slate-100 bg-white border-b-8 border-tx-copper'
                  : 'border-slate-100 bg-slate-50'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:text-white transition-all duration-500 ${
                service.isCopperTheme
                  ? 'bg-slate-50 text-tx-copper group-hover:bg-tx-copper'
                  : 'bg-white text-tx-blue group-hover:bg-tx-blue'
              }`}>
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${service.isCopperTheme ? 'text-tx-copper' : ''}`}>
                {service.title}
              </h3>
              <p className={service.isCopperTheme ? 'text-slate-700 leading-relaxed font-semibold' : 'text-slate-500 leading-relaxed'}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
