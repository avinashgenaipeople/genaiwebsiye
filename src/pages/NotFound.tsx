import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="pt-16 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-deep/15 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-accent/10 rounded-full blur-[60px]" />

      <div className="relative text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="font-display font-800 text-[8rem] sm:text-[10rem] md:text-[12rem] leading-none gradient-text glow-text">
            404
          </h1>
          <p className="mt-4 font-display font-600 text-xl md:text-2xl text-text-muted">
            Page not found
          </p>
          <p className="mt-3 text-text-dim max-w-md mx-auto leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-deep to-accent text-white font-600 hover:shadow-[0_0_32px_rgba(233,71,63,0.5)] transition-shadow"
          >
            <ArrowLeft size={18} />
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
