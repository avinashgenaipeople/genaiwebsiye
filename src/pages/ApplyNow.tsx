import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function ApplyNow() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-deep/10 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Book your <span className="gradient-text">FREE</span> strategy call
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              Take the first step towards mastering Generative AI and Agentic AI.
              Schedule a one-on-one call to discuss your goals and build a personalized learning plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Placeholder */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <div className="glass-card rounded-2xl min-h-[500px] flex flex-col items-center justify-center text-center p-10">
              <div className="w-16 h-16 rounded-2xl bg-accent-deep/15 flex items-center justify-center mb-6">
                <Calendar size={28} className="text-accent" />
              </div>
              <h2 className="font-display font-600 text-2xl text-text mb-3">
                Schedule your call
              </h2>
              <p className="text-text-muted max-w-md leading-relaxed">
                The booking widget will appear here. Pick a time that works best for you
                and we will connect to discuss your AI career transition.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection className="text-center">
            <p className="text-text-muted text-lg mb-4">Or email us directly at</p>
            <a
              href="mailto:contact@genaipeople.com"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-bright transition-colors font-mono text-lg"
            >
              contact@genaipeople.com
              <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
