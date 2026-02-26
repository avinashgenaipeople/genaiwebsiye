import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Cpu, Rocket, Crown, ChevronDown, ExternalLink } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const testimonials = [
  {
    name: 'Punyakeerthi BL',
    role: 'Senior Software Engineer',
    text: "GenAI People's mentorship programme helped me become more visible in my current organization. I was invited to join the AI team in my company and got a good salary hike.",
  },
  {
    name: 'Sunil Vijendra',
    role: 'Director - Engineering',
    text: 'Highly recommended for anyone looking to gain hands-on expertise in GenAI! What stood out to me was the highly customized learning journey tailored to my background and goals.',
  },
  {
    name: 'Swapnil Vernekar',
    role: 'Devops & Deployment Specialist',
    text: "Guidance provided by GenAI People's mentorship programme is like a partnership rather than just teaching.",
  },
]

const offerings = [
  {
    icon: Users,
    title: 'Personalized 1:1 Mentorship',
    desc: 'Work directly with mentors who tailor your path through Generative AI and Agentic AI, based on your background, domain, and career goals.',
  },
  {
    icon: Cpu,
    title: 'From Fundamentals to Agentic Systems',
    desc: 'Go beyond prompts. Learn to design agentic workflows, build tool-calling systems, implement RAG pipelines, and structure multi-agent architectures.',
  },
  {
    icon: Rocket,
    title: 'Production-Ready AI Projects',
    desc: 'Build agentic AI systems that integrate with real APIs, databases, and business workflows. Not just demos, but deployable products.',
  },
  {
    icon: Crown,
    title: 'AI Leadership Positioning',
    desc: 'Position yourself as an AI-first leader. LinkedIn optimization, portfolio of shipped agentic products, and career strategy for senior AI roles.',
  },
]

const projects = [
  {
    title: 'GenAI-Powered AI Interviewer Platform',
    author: 'Sunil Vijendra',
    desc: 'An agentic AI system that conducts interviews, evaluates responses, generates reports, and interacts with structured scoring frameworks.',
    tags: ['GPT-4', 'RAG', 'Agents'],
  },
  {
    title: 'GenAI Powered Employee Onboarding (HR-Mate)',
    author: 'Punyakeerthi BL',
    desc: 'An AI-powered onboarding agent that gathers inputs, communicates between HR and tech teams, retrieves relevant documentation using RAG.',
    tags: ['LangChain', 'RAG', 'Agents'],
  },
  {
    title: 'SocialMind: Real-Time Social Media AI Insights',
    author: 'Manjunath R',
    desc: 'An autonomous monitoring agent that tracks trends, analyzes sentiment, triggers alerts, and generates insight summaries in real-time.',
    tags: ['OpenAI', 'Agents', 'Real-time'],
  },
]

const publications = [
  { platform: 'Medium', title: 'Quick Overview of LLMs', author: 'Sunil Vijendra', date: 'March 2024' },
  { platform: 'LinkedIn', title: 'What is a Neural Network?', author: 'Punyakeerthi BL', date: 'February 2024' },
  { platform: 'Dev.to', title: 'Generative AI: Role in the AI Field', author: 'Manjunath R', date: 'January 2024' },
]

const faqs = [
  { q: 'What is Agentic AI and will I learn how to build it in this program?', a: 'Yes. Agentic AI refers to AI systems that can plan, use tools, retrieve context, and execute multi-step workflows autonomously. Our program teaches you to architect and deploy these systems in production.' },
  { q: 'What kind of Agentic AI projects will I build?', a: 'You\'ll build tool-calling agents, RAG pipelines, multi-agent systems, and production-ready AI applications that integrate with APIs, databases, and business workflows.' },
  { q: 'Do I need strong math or machine learning knowledge to succeed?', a: 'No. Our program focuses on applied Generative AI and Agentic AI engineering. We work with LLM APIs, agent frameworks, and production tools rather than theoretical ML research.' },
  { q: 'Is this a traditional training program with live classes?', a: 'No. This is a personalized 1:1 mentorship program. You work directly with a mentor who tailors your learning path, projects, and career strategy to your unique background.' },
  { q: 'How much time do I need to commit each week?', a: 'We recommend 8-12 hours per week for optimal progress, including mentor sessions, self-study, and project work. The program is designed for working professionals.' },
  { q: 'Can I transition to AI without prior machine learning experience?', a: 'Absolutely. Most of our mentees are experienced Java or backend developers. We help you leverage your existing software engineering skills to build AI systems.' },
  { q: 'How will this program help future-proof my career?', a: 'Agentic AI is the next wave of software engineering. By mastering it now, you position yourself for senior AI roles that will be in high demand as organizations adopt AI-powered workflows.' },
  { q: 'Can I apply what I learn directly in my current job?', a: 'Yes. Many mentees start applying GenAI in their current roles, leading to promotions, AI team invitations, and new project leadership opportunities.' },
  { q: 'Will I receive a certificate after completing the program?', a: 'Yes, you will receive a certificate upon completion. More importantly, you\'ll have a portfolio of deployed AI products that demonstrate real competence.' },
  { q: 'Can my company sponsor this mentorship program?', a: 'Yes. We work with companies to sponsor employee upskilling. Contact us to learn about corporate sponsorship options.' },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-deep/10 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 pt-32 sm:pt-40 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-light bg-surface/60 text-xs font-mono text-accent mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Now enrolling senior developers
            </div>

            <h1 className="font-display font-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
              Transition from Java to
              <br className="hidden sm:block" />
              {' '}Generative AI and Master{' '}
              <span className="gradient-text">Agentic AI</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              Learn how to build real-world Generative AI systems, including Agentic AI
              applications that can think, plan, use tools, and execute multi-step workflows.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/apply-now"
                className="group px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-deep to-accent text-white font-600 text-base hover:shadow-[0_0_32px_rgba(124,58,237,0.5)] transition-all flex items-center gap-2"
              >
                Apply Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about-us"
                className="px-8 py-3.5 rounded-xl border border-border-light text-text-muted hover:text-text hover:border-accent/40 transition-colors font-500 text-base"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="relative py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display font-700 text-3xl md:text-4xl">
              What our mentees <span className="gradient-text">have to say</span>
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Our mentees don't just learn Generative AI concepts. They learn how to architect and deploy agentic systems that integrate with APIs, databases, tools, and business workflows.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent-deep/30 flex items-center justify-center font-display font-700 text-sm text-accent">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-600 text-sm text-text">{t.name}</p>
                      <p className="text-xs text-text-dim">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed flex-1">{t.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link to="/testimonials" className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-bright transition-colors font-500">
              View more testimonials <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-deep/20 via-transparent to-accent-deep/20" />
        <div className="relative text-center">
          <h2 className="font-display font-700 text-2xl md:text-3xl">
            Want to master Gen AI like our mentees?
          </h2>
          <Link
            to="/apply-now"
            className="mt-6 inline-flex px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-deep to-accent text-white font-600 hover:shadow-[0_0_32px_rgba(124,58,237,0.5)] transition-shadow"
          >
            Apply now
          </Link>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display font-700 text-3xl md:text-4xl">What we offer</h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              A comprehensive mentorship program designed to help experienced professionals transition into Generative AI and master Agentic AI in production.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((o, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-8 group hover:border-accent/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-accent-deep/15 flex items-center justify-center mb-5 group-hover:bg-accent-deep/25 transition-colors">
                    <o.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-display font-600 text-lg text-text mb-2">{o.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{o.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              to="/apply-now"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-deep to-accent text-white font-600 hover:shadow-[0_0_32px_rgba(124,58,237,0.5)] transition-shadow"
            >
              Want to bring career transformation? <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Mentee projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display font-700 text-3xl md:text-4xl">
              What our mentees are <span className="gradient-text">building</span>
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Our mentees don't just learn Generative AI concepts. They architect and deploy agentic systems that integrate with APIs, databases, tools, and business workflows.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-accent-deep/20 via-surface to-card flex items-center justify-center">
                    <Cpu size={40} className="text-accent/30 group-hover:text-accent/50 transition-colors" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display font-600 text-base text-text mb-1">{p.title}</h3>
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

          <AnimatedSection className="text-center mt-10">
            <Link to="/members-work" className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-bright transition-colors font-500">
              View more products <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display font-700 text-3xl md:text-4xl">Mentee Publications</h2>
            <p className="mt-4 text-text-muted">Insights and learnings shared by our community</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 group hover:border-accent/30 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="tech-tag">{pub.platform}</span>
                    <ExternalLink size={14} className="text-text-dim group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display font-600 text-base text-text mb-2">{pub.title}</h3>
                  <p className="text-xs text-text-dim">by {pub.author}</p>
                  <p className="text-xs text-text-dim mt-1">{pub.date}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-deep/15 rounded-full blur-[100px]" />
        <div className="relative text-center mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <p className="text-text-muted text-lg mb-4">
              The future of AI is not just models. It's intelligent systems that act. We help you build them.
            </p>
            <h2 className="font-display font-700 text-3xl md:text-4xl mb-8">
              Ready to build agentic AI systems?
            </h2>
            <Link
              to="/apply-now"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-deep to-accent text-white font-600 hover:shadow-[0_0_32px_rgba(124,58,237,0.5)] transition-shadow"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-surface">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display font-700 text-3xl md:text-4xl">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full glass-card rounded-xl px-6 py-4 text-left group hover:border-accent/30 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-500 text-sm text-text">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-text-dim transition-transform ${openFaq === i ? 'rotate-180 text-accent' : ''}`}
                    />
                  </div>
                  {openFaq === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 text-sm text-text-muted leading-relaxed"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
