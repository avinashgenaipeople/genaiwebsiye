import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/members-work', label: 'Members Work' },
  { to: '/about-us', label: 'About Us' },
  { to: '/what-makes-us-different', label: 'Our Differentiators' },
  { to: '/testimonials', label: 'Testimonials' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-bright to-accent-deep flex items-center justify-center font-display font-800 text-sm text-white">
            G
          </div>
          <span className="font-display font-700 text-lg tracking-tight text-text">
            GenAI<span className="text-accent">People</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.to
                  ? 'text-accent bg-accent-deep/10'
                  : 'text-text-muted hover:text-text hover:bg-white/5'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/apply-now"
            className="ml-3 px-5 py-2 rounded-lg bg-gradient-to-r from-accent-deep to-accent text-white text-sm font-600 hover:shadow-[0_0_24px_rgba(124,58,237,0.4)] transition-shadow"
          >
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-text-muted hover:text-text"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-border bg-bg/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === l.to
                      ? 'text-accent bg-accent-deep/10'
                      : 'text-text-muted hover:text-text hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/apply-now"
                onClick={() => setOpen(false)}
                className="block mt-3 px-5 py-2.5 rounded-lg bg-gradient-to-r from-accent-deep to-accent text-white text-sm font-600 text-center"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
