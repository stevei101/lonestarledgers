export default function DashboardMockup() {
  return (
    <div className="relative animate-float">
      <div className="bg-white p-3 shadow-[0_50px_100px_-20px_rgba(0,40,104,0.25)] rounded-2xl border border-slate-200">
        <div className="h-96 rounded-xl overflow-hidden flex flex-col">
          {/* Top Section - Operating Cash */}
          <div className="bg-tx-blue h-1/3 flex items-center justify-center relative">
            <i className="fas fa-star text-white text-6xl opacity-20 absolute"></i>
            <div className="text-center text-white z-10">
              <p className="text-[10px] font-bold tracking-widest opacity-70 mb-1 uppercase">Operating Cash</p>
              <p className="text-4xl font-black tracking-tight">$482,904.22</p>
            </div>
          </div>

          {/* Bottom Section - Metrics */}
          <div className="bg-white h-2/3 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm border-b pb-3">
                <span className="text-slate-400">Monthly Revenue</span>
                <span className="font-bold text-green-600">+$124,500</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b pb-3">
                <span className="text-slate-400">TX Tax Liability</span>
                <span className="font-bold text-tx-red italic">Calculated</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Compliance</span>
                <span className="font-bold text-tx-blue">Audit-Ready</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-tx-blue h-full w-[85%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
