import { useState } from 'react'
import { COMPANY, CONTACT_SECTION_ID } from '../constants'
import { buildContactMailto } from '../utils/contactMailto'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    window.location.href = buildContactMailto(form)
    setIsSubmitted(true)
    form.reset()
    setTimeout(() => setIsSubmitted(false), 8000)
  }

  return (
    <section
      id={CONTACT_SECTION_ID}
      className="py-32 bg-tx-blue text-white relative overflow-hidden scroll-reveal"
    >
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-playfair mb-4">Get started</h2>
          <p className="text-slate-300">Tell us about your business. {COMPANY.responseTime}</p>
        </div>

        <form
          className="space-y-6 bg-white/5 backdrop-blur p-8 md:p-12 rounded-2xl border border-white/10"
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                Your name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full bg-white text-slate-900 p-4 rounded-lg border-0 focus:ring-2 focus:ring-tx-copper outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                Work email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full bg-white text-slate-900 p-4 rounded-lg border-0 focus:ring-2 focus:ring-tx-copper outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-company" className="block text-sm font-medium mb-2">
              Company name
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              className="w-full bg-white text-slate-900 p-4 rounded-lg border-0 focus:ring-2 focus:ring-tx-copper outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
              How can we help?
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              className="w-full bg-white text-slate-900 p-4 rounded-lg border-0 focus:ring-2 focus:ring-tx-copper outline-none resize-y min-h-[120px]"
              required
            />
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Submitting opens your email app with a pre-filled message to {COMPANY.email}. Send the email to
            complete your inquiry. We do not sell your information. See our{' '}
            <a href="#privacy" className="underline hover:text-tx-copper">
              privacy notice
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full py-4 bg-tx-red text-white font-bold text-lg rounded-lg shadow-lg hover:bg-tx-copper transition-colors"
          >
            Send message
          </button>

          {isSubmitted && (
            <div
              role="status"
              className="text-center p-4 bg-green-900/40 text-green-100 rounded-lg font-medium border border-green-700/50"
            >
              Your email app should open with your message ready to send. If it did not open, email us at{' '}
              <a href={`mailto:${COMPANY.email}`} className="underline">
                {COMPANY.email}
              </a>
              .
            </div>
          )}
        </form>

        <p className="text-center text-sm text-slate-300 mt-8">
          Prefer to write directly?{' '}
          <a href={`mailto:${COMPANY.email}`} className="underline hover:text-tx-copper">
            {COMPANY.email}
          </a>
        </p>
      </div>
    </section>
  )
}
