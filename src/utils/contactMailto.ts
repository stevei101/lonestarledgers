import { COMPANY } from '../constants'

export function buildContactMailto(form: HTMLFormElement): string {
  const data = new FormData(form)
  const name = String(data.get('name') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const company = String(data.get('company') ?? '').trim()
  const message = String(data.get('message') ?? '').trim()

  const subject = encodeURIComponent(
    `Inquiry from ${company || name || 'lonestarledgers.com'}`
  )
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      '',
      message,
      '',
      '— Sent via lonestarledgers.com contact form',
    ].join('\n')
  )

  return `mailto:${COMPANY.email}?subject=${subject}&body=${body}`
}
