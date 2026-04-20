import { useState } from 'react'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-3xl p-12 md:p-20 shadow-2xl border border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-playfair">The Pflugerville Pivot</h2>
            <p className="text-slate-500 italic">Start your free 20-minute strategy session today.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-50 p-5 rounded-xl border border-slate-100 focus:border-tx-blue outline-none transition-all font-medium"
                required
              />
              <input
                type="email"
                placeholder="Work Email"
                className="w-full bg-slate-50 p-5 rounded-xl border border-slate-100 focus:border-tx-blue outline-none transition-all font-medium"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full bg-slate-50 p-5 rounded-xl border border-slate-100 focus:border-tx-blue outline-none transition-all font-medium"
              required
            />

            <button
              type="submit"
              className="w-full py-6 bg-tx-blue text-white font-black text-xl tracking-[0.2em] shadow-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-4"
            >
              CLAIM MY AUDIT <i className="fas fa-bolt text-xs"></i>
            </button>

            {isSubmitted && (
              <div className="text-center p-4 bg-green-50 text-green-700 rounded-lg font-bold border border-green-100">
                <i className="fas fa-check-circle mr-2"></i> Session requested. We'll be in touch within the hour.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
