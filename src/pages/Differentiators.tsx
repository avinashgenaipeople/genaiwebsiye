import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, CheckCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const mentorshipPoints = [
  'Mentorship to shortcut your learning curve',
  'Real-world projects aligned with your domain or workplace',
  'Practical skills you can showcase immediately for leadership in a new area',
]

interface ComparisonRow {
  aspect: string
  genai: string
  other: string
}

interface ComparisonSection {
  title: string
  subtitle: string
  rows: ComparisonRow[]
}

const comparisons: ComparisonSection[] = [
  {
    title: 'GenAI People vs Scaler',
    subtitle: "Compare our program with Scaler's AI learning offerings",
    rows: [
      { aspect: 'Learning Format', genai: '1:1 Mentorship-based', other: 'Cohort-based live classes' },
      { aspect: 'Personalization', genai: 'Fully personalized to your background', other: 'Fixed syllabus for all learners' },
      { aspect: 'Project Focus', genai: 'Agentic AI production projects', other: 'Standard assignments & capstones' },
      { aspect: 'Career Support', genai: 'Full career positioning & AI leadership', other: 'Job placement assistance' },
      { aspect: 'Duration', genai: '6+ months with ongoing mentorship', other: 'Fixed 6-9 month program' },
      { aspect: 'Cost', genai: 'Competitive & value-driven', other: 'Premium pricing' },
    ],
  },
  {
    title: 'GenAI People vs IIT Delhi',
    subtitle: "See how we stack up against IIT Delhi's AI programs",
    rows: [
      { aspect: 'Learning Format', genai: '1:1 Mentorship-based', other: 'Classroom lectures & labs' },
      { aspect: 'Personalization', genai: 'Fully personalized to your goals', other: 'Standardized curriculum' },
      { aspect: 'Project Focus', genai: 'Agentic AI & production deployments', other: 'Research-oriented projects' },
      { aspect: 'Career Support', genai: 'Full career positioning & portfolio', other: 'Institute brand & alumni network' },
      { aspect: 'Duration', genai: '6+ months flexible pacing', other: '6-12 months fixed schedule' },
      { aspect: 'Cost', genai: 'Competitive & accessible', other: 'High tuition fees' },
    ],
  },
  {
    title: 'GenAI People vs IIT/Foreign University Courses',
    subtitle: 'Compare with traditional IIT and international university AI courses',
    rows: [
      { aspect: 'Learning Format', genai: '1:1 Mentorship-based', other: 'Lecture-driven academic format' },
      { aspect: 'Personalization', genai: 'Fully personalized learning path', other: 'One-size-fits-all curriculum' },
      { aspect: 'Project Focus', genai: 'Agentic AI real-world systems', other: 'Academic research & theory' },
      { aspect: 'Career Support', genai: 'Full career positioning & AI leadership', other: 'Degree credential & placement cell' },
      { aspect: 'Duration', genai: '6+ months with flexible pacing', other: '1-2 years commitment' },
      { aspect: 'Cost', genai: 'Competitive & value-driven', other: 'Very high (especially foreign universities)' },
    ],
  },
]

export default function Differentiators() {
  const [openSection, setOpenSection] = useState<number | null>(null)

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
              Why choose GenAI People
            </div>

            <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              What Makes GenAI People{' '}
              <span className="gradient-text">Different?</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              A side-by-side comparison to help you choose the right AI learning path
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is a Mentorship Program */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-center mb-6">
              What is a Mentorship Program{' '}
              <span className="gradient-text">(and why it matters)?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <p className="text-text-muted leading-relaxed mb-6">
                Most AI programs are structured like online classrooms: fixed lessons, fixed
                projects, read-heavy content. There's no guide early in your career. But if
                you're a senior professional, what you need is not another syllabus. You need:
              </p>

              <div className="space-y-4 mb-8">
                {mentorshipPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-text leading-relaxed font-500">{point}</span>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-text-muted leading-relaxed">
                  That's exactly what a mentorship program offers:{' '}
                  <span className="text-text font-500">
                    direct guidance, accountability, and a clear career path
                  </span>
                  , not just knowledge transfer.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison sections */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display font-700 text-3xl md:text-4xl">
              See How We <span className="gradient-text">Compare</span>
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Click each section to expand the detailed comparison
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {comparisons.map((section, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="glass-card rounded-2xl overflow-hidden transition-all hover:border-accent/30">
                  <button
                    onClick={() =>
                      setOpenSection(openSection === idx ? null : idx)
                    }
                    className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between gap-4"
                  >
                    <div>
                      <h3 className="font-display font-600 text-lg md:text-xl text-text">
                        {section.title}
                      </h3>
                      <p className="text-sm text-text-dim mt-1">
                        {section.subtitle}
                      </p>
                    </div>
                    <ChevronDown
                      size={22}
                      className={`shrink-0 text-text-dim transition-transform duration-300 ${
                        openSection === idx ? 'rotate-180 text-accent' : ''
                      }`}
                    />
                  </button>

                  {openSection === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="px-6 md:px-8 pb-6"
                    >
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-3 pr-4 text-text-dim font-mono text-xs uppercase tracking-wider w-1/4">
                                Aspect
                              </th>
                              <th className="text-left py-3 pr-4 font-mono text-xs uppercase tracking-wider w-[37.5%]">
                                <span className="gradient-text">GenAI People</span>
                              </th>
                              <th className="text-left py-3 font-mono text-xs uppercase tracking-wider text-text-dim w-[37.5%]">
                                {section.title.split('vs ')[1]}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="border-b border-border/50 last:border-0"
                              >
                                <td className="py-3.5 pr-4 text-text-dim font-500">
                                  {row.aspect}
                                </td>
                                <td className="py-3.5 pr-4">
                                  <div className="flex items-center gap-2">
                                    <CheckCircle
                                      size={15}
                                      className="text-accent shrink-0"
                                    />
                                    <span className="text-text">
                                      {row.genai}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-3.5 text-text-muted">
                                  {row.other}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-deep/15 rounded-full blur-[100px]" />
        <div className="relative text-center mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <p className="text-text-muted text-lg mb-4">
              The difference is clear. Mentorship beats lectures every time.
            </p>
            <h2 className="font-display font-700 text-3xl md:text-4xl mb-8">
              Ready to experience the <span className="gradient-text">GenAI People</span> difference?
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
