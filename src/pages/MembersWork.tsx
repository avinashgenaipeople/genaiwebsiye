import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const projects = [
  {
    title: 'GenAI-Powered AI Interviewer Platform',
    author: 'Sunil Vijendra',
    image: '/images/project-interviewer.jpeg',
    desc: 'An agentic AI system that conducts interviews, evaluates responses, generates reports, and interacts with structured scoring frameworks, reducing recruiter workload through intelligent automation.',
    tags: ['GPT-4', 'RAG', 'Agents'],
  },
  {
    title: 'GenAI Powered Employee Onboarding (HR-Mate)',
    author: 'Punyakeerthi BL',
    image: '/images/project-onboarding.jpg',
    desc: 'An AI-powered onboarding agent that gathers inputs, communicates between HR and tech teams, retrieves relevant documentation using RAG, and generates structured job descriptions.',
    tags: ['LangChain', 'RAG', 'Agents'],
  },
  {
    title: 'SocialMind: Real-Time Social Media AI Insights',
    author: 'Manjunath R',
    image: '/images/project-socialmind.jpeg',
    desc: 'An autonomous monitoring agent that tracks trends, analyzes sentiment, triggers alerts, and generates insight summaries, all in real-time with multi-step orchestration.',
    tags: ['OpenAI', 'Agents', 'Real-time'],
  },
  {
    title: 'AI LinkedIn Profile Optimizer',
    author: 'Priya Sharma',
    image: '/images/project-4.webp',
    desc: 'An intelligent agent that reads resumes, extracts structured information, compares it against market standards, and generates improvement recommendations automatically.',
    tags: ['LangChain', 'Tool-calling', 'Agents'],
  },
  {
    title: 'Historical Data Generator',
    author: 'Rajesh Kumar',
    image: '/images/project-5.webp',
    desc: 'A retrieval-powered agentic system that fetches contextual historical data, synthesizes narratives, and allows interactive exploration through multi-step reasoning.',
    tags: ['RAG', 'Agents', 'Research'],
  },
  {
    title: 'Agoda Chatbot: OpenAI API Chrome Extension',
    author: 'Amit Patel',
    image: '/images/project-6.png',
    desc: 'A tool-using AI assistant that analyzes hotel reviews, pricing, amenities, and location data, then generates structured comparisons for informed decisions.',
    tags: ['OpenAI', 'Tool-calling', 'Agents'],
  },
]

export default function MembersWork() {
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
              Mentee Portfolio
            </div>

            <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              What our mentees are{' '}
              <span className="gradient-text">building</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              Real-world agentic AI systems architected and deployed by our mentees.
              Not demos. Production-ready products that integrate with tools, APIs, and business workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display font-700 text-3xl md:text-4xl">
              Agentic AI <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Each project demonstrates production-grade agentic capabilities: tool-calling, RAG pipelines,
              multi-step reasoning, and autonomous workflow execution.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display font-600 text-base text-text mb-1 group-hover:text-accent-bright transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-text-dim mb-3">by {p.author}</p>
                    <p className="text-sm text-text-muted leading-relaxed flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map(tag => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-deep/20 via-transparent to-accent-deep/20" />
        <div className="relative text-center mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <h2 className="font-display font-700 text-2xl md:text-3xl">
              Want to build projects like these?
            </h2>
            <p className="mt-4 text-text-muted">
              Join our mentorship program and start building production-ready agentic AI systems.
            </p>
            <Link
              to="/apply-now"
              className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-deep to-accent text-white font-600 hover:shadow-[0_0_32px_rgba(233,71,63,0.5)] transition-shadow"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-deep/15 rounded-full blur-[100px]" />
        <div className="relative text-center mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <p className="text-text-muted text-lg mb-4">
              Our mentees don't just learn. They ship production-ready agentic AI systems.
            </p>
            <h2 className="font-display font-700 text-3xl md:text-4xl mb-8">
              Ready to start building?
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
