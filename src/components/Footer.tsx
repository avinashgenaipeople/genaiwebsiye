import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/members-work', label: 'Members Work' },
  { to: '/about-us', label: 'About Us' },
]

const supportLinks = [
  { to: '/contact-us', label: 'Contact Us' },
  { to: '/#faq', label: 'FAQ' },
]

const legalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms and Conditions' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent-bright to-accent-deep flex items-center justify-center font-display font-800 text-xs text-white">
                G
              </div>
              <span className="font-display font-700 text-base tracking-tight text-text">
                GenAI<span className="text-accent">People</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-text-dim leading-relaxed max-w-xs">
              Helping senior developers transition into Generative AI and master Agentic AI systems.
            </p>
          </div>

          <div>
            <h4 className="font-display font-600 text-sm text-text mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-text-muted hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-600 text-sm text-text mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5">
              {supportLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-text-muted hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-600 text-sm text-text mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-text-muted hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-text-dim text-center">
            Copyright &copy; {new Date().getFullYear()} RTJ Education Services Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
