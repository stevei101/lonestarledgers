export default function Legal() {
  return (
    <>
      <section id="privacy" className="py-16 bg-slate-50 scroll-reveal">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-playfair text-tx-blue mb-4">Privacy notice</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We collect name, email, company, and message content when you contact us — solely to respond to your
            inquiry and discuss services. We do not sell personal information. Data is stored securely and retained
            only as long as needed for client communication or legal requirements. Questions:{' '}
            <a href="mailto:hello@lonestarledgers.com" className="text-tx-red hover:underline">
              hello@lonestarledgers.com
            </a>
            .
          </p>
        </div>
      </section>

      <section id="terms" className="py-16 bg-white border-t border-slate-100 scroll-reveal">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-playfair text-tx-blue mb-4">Terms of use</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            This website is for informational purposes about Lone Star Ledgers services. Demo metrics and scans are
            sample data unless otherwise stated. Service engagements are governed by separate written agreements.
            By using this site you agree not to misuse content or attempt unauthorized access to our systems.
          </p>
        </div>
      </section>
    </>
  )
}
