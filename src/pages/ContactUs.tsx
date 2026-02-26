import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function ContactUs() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-deep/10 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              We are here to answer your questions and support you on your learning journey.
              Feel free to reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Email Card */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-xl px-6">
          <AnimatedSection>
            <a
              href="mailto:contact@genaipeople.com"
              className="glass-card rounded-2xl p-10 flex flex-col items-center text-center group hover:border-accent/30 transition-all block"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent-deep/15 flex items-center justify-center mb-6 group-hover:bg-accent-deep/25 transition-colors">
                <Mail size={28} className="text-accent" />
              </div>
              <h2 className="font-display font-600 text-xl text-text mb-2">Email Us</h2>
              <p className="text-accent hover:text-accent-bright transition-colors font-mono text-base">
                contact@genaipeople.com
              </p>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
