import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

interface Testimonial {
  name: string
  role: string
  badge: string
  category: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Punyakeerthi BL',
    role: 'Senior Software Engineer',
    badge: '8+ Years Experience',
    category: '8-12',
    text: 'The GenAI Leap program is not like other courses. It is a mentorship program. They guide us step by step. I was invited to join the AI team, got a good salary hike.',
  },
  {
    name: 'Sunil Vijendra',
    role: 'Director - Engineering',
    badge: 'Senior Engineering Leader',
    category: 'senior',
    text: 'Highly recommended for anyone looking to gain hands-on expertise in GenAI! The highly customized learning journey tailored to my background and goals.',
  },
  {
    name: 'Swapnil Vernekar',
    role: 'Devops & Deployment Specialist',
    badge: '10+ Years Experience',
    category: '8-12',
    text: "They provide an end goal, and you're encouraged to come up with a plan. The guidance feels like a partnership rather than just teaching.",
  },
  {
    name: 'Jamil Ahmed',
    role: 'Technical Lead',
    badge: '12+ Years Experience',
    category: '13+',
    text: "Along with technical knowledge in generative AI, I've gained valuable feedback on how to think about problems and systems from a senior's perspective.",
  },
  {
    name: 'Santosh Jadhawar',
    role: '',
    badge: 'Early-Career Professional',
    category: '0-3',
    text: "From the very beginning, I've felt genuinely supported and guided. The mentorship has helped me with technical skills and soft skills.",
  },
  {
    name: 'Rakesh S. L.',
    role: '',
    badge: 'Mid-Level Developer',
    category: '4-7',
    text: "With Jerry's mentoring, I am able to enhance my abilities and align with current market demands.",
  },
  {
    name: 'Priyanka Prabhu',
    role: '',
    badge: 'Mid-Level Professional',
    category: '4-7',
    text: 'She is very understanding and always accommodating, which makes the weekly check-ins feel easy and stress-free.',
  },
  {
    name: 'Sureshkumar Mani',
    role: 'Standard Chartered',
    badge: '7+ Years Experience',
    category: '4-7',
    text: 'The GenAI Mentorship Program transformed my career, helping me move to a Senior Associate role at Standard Chartered.',
  },
  {
    name: 'Venkatesh K',
    role: '',
    badge: 'Mid-Level Developer',
    category: '4-7',
    text: "I can track my progress each week. It's really a complete career growth perspective.",
  },
]

const filterTabs = [
  { label: 'All Professionals', value: 'all' },
  { label: '0-3 Years', value: '0-3' },
  { label: '4-7 Years', value: '4-7' },
  { label: '8-12 Years', value: '8-12' },
  { label: '13+ Years', value: '13+' },
  { label: 'Senior Leadership', value: 'senior' },
]

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-deep/10 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-light bg-surface/60 text-xs font-mono text-accent mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Real stories from real professionals
            </div>

            <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              What our mentees{' '}
              <span className="gradient-text">have to say</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              Our mentees don't just learn Generative AI. They build production-ready
              Agentic AI systems tailored to their experience level and career goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs + Testimonial grid */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter tabs */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-5 py-2 rounded-full text-sm font-500 transition-all ${
                    activeFilter === tab.value
                      ? 'bg-gradient-to-r from-accent-deep to-accent text-white shadow-[0_0_20px_rgba(233,71,63,0.3)]'
                      : 'border border-border-light text-text-muted hover:text-text hover:border-accent/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Testimonial cards */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((t, i) => (
              <motion.div
                key={t.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover:border-accent/30 transition-all">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent/30 to-accent-deep/30 flex items-center justify-center font-display font-700 text-sm text-accent shrink-0">
                      {t.name[0]}
                    </div>
                    <div className="min-w-0">
                      <p className="font-600 text-sm text-text truncate">{t.name}</p>
                      {t.role && (
                        <p className="text-xs text-text-dim truncate">{t.role}</p>
                      )}
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="mb-4">
                    <span className="tech-tag">{t.badge}</span>
                  </div>

                  {/* Quote */}
                  <div className="flex-1">
                    <p className="text-sm text-text-muted leading-relaxed">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  {/* Decorative bottom line */}
                  <div className="mt-5 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1.5">
                      {[...Array(5)].map((_, starIdx) => (
                        <svg
                          key={starIdx}
                          className="w-3.5 h-3.5 text-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <AnimatedSection className="text-center py-16">
              <p className="text-text-muted">
                No testimonials found for this filter. Try selecting a different
                experience level.
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-deep/15 rounded-full blur-[100px]" />
        <div className="relative text-center mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <p className="text-text-muted text-lg mb-4">
              Want to build Agentic AI systems like our mentees?
            </p>
            <h2 className="font-display font-700 text-3xl md:text-4xl mb-8">
              Start your <span className="gradient-text">AI transformation</span> today
            </h2>
            <Link
              to="/apply-now"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-deep to-accent text-white font-600 hover:shadow-[0_0_32px_rgba(233,71,63,0.5)] transition-shadow"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
