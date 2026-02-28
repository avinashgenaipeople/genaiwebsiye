import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Brain, TrendingUp, CheckCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const drivers = [
  {
    icon: Target,
    title: 'The Future We Build',
    desc: 'The future of AI is not just models. It\'s intelligent systems that act. We\'re building that future together.',
  },
  {
    icon: Brain,
    title: 'Why Generative AI and Why Agentic AI?',
    desc: 'Systems that plan multi-step actions, use external tools, retrieve context using RAG, and execute workflows autonomously.',
  },
  {
    icon: TrendingUp,
    title: 'Enabling a Cutting-Edge Mindset',
    desc: 'We train you to think beyond prompts. Design agentic workflows, build tool-calling systems, implement RAG pipelines, structure multi-agent systems.',
  },
]

const programPoints = [
  'A full-time 6+ months of structured learning',
  '1:1 personalized guidance',
  'Design and deploy agentic AI systems',
  'Integrate LLMs with APIs, databases, and real tools',
  'Build a portfolio of intelligent, production-ready AI products',
  'Learn to market yourself and position as an AI-first leader',
]

const team = [
  {
    name: 'Sowmya Manohar',
    role: 'Account Manager',
    quote: 'Keeping all mentees accountable to their goals',
    desc: 'Leveraging 17+ years of experience as a techie and engineering leader, Sowmya empowers our mentees to stay focused, overcome obstacles, and relentlessly pursue their career ambitions.',
    linkedin: 'https://www.linkedin.com/in/sowmya-manohar/',
  },
  {
    name: 'Ekta Choudhary',
    role: 'Growth Consultant',
    quote: 'Helping mentees identify challenges, set goals, and create tailored roadmaps',
    desc: 'With deep empathy and exceptional listening skills, Ekta serves as an ideal guide for anyone seeking clarity on their professional path.',
    linkedin: '',
  },
  {
    name: 'Anjana K',
    role: 'Associate Growth Consultant',
    quote: 'Helping mentees define challenges and goals to craft tailored roadmaps',
    desc: 'With deep analytical skills and a genuine interest in people, Anjana is ideally suited to guide professionals in crafting a clear, actionable career roadmap.',
    linkedin: 'https://www.linkedin.com/in/anjana-k-a6b949211/',
  },
]

export default function AboutUs() {
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
              About Us
            </div>

            <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Welcome to{' '}
              <span className="gradient-text">Gen AI People</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              We're a network of senior developers building production-ready
              Generative AI and Agentic AI systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-center mb-8">
              Our <span className="gradient-text">Beginning</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <p className="text-text-muted leading-relaxed text-base md:text-lg">
                We are Java (or similar language) developers, at peak or beyond in our
                professional lifecycle, who recognize the ongoing transition from traditional
                software to Generative AI and Agentic AI. We're upskilling to build
                production-ready AI systems: tool-calling agents, RAG pipelines, and multi-step
                workflows, to remain relevant and lead the next wave of software engineering.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Guided by Expertise */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-center mb-8">
              Guided by <span className="gradient-text">Expertise</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <p className="text-text-muted leading-relaxed text-base md:text-lg">
                Unlike large programs where you end up like everyone else, our approach is
                fundamentally different. We believe a shift towards Generative AI and Agentic AI
                is a career-critical move that must be carefully guided and tailored uniquely for
                each person. Under the mentorship of Jerry Kurian, we help professionals not just
                understand AI models, but architect agentic systems that integrate with tools,
                processes, and business workflows, transforming knowledge into execution.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display font-700 text-3xl md:text-4xl">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {drivers.map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 group hover:border-accent/30 transition-all h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent-deep/15 flex items-center justify-center mb-5 group-hover:bg-accent-deep/25 transition-colors">
                    <d.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-display font-600 text-lg text-text mb-3">{d.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed flex-1">{d.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mentorship Program */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display font-700 text-3xl md:text-4xl">
              Our Mentorship <span className="gradient-text">Program</span>
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              A comprehensive, hands-on mentorship designed to transform experienced developers
              into AI-first engineers and leaders.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <ul className="space-y-4">
                {programPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-text-muted leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 text-center">
                <Link
                  to="/apply-now"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-deep to-accent text-white font-600 hover:shadow-[0_0_32px_rgba(233,71,63,0.5)] transition-shadow"
                >
                  Apply Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display font-700 text-3xl md:text-4xl">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              The people behind Gen AI People, bringing decades of combined experience
              in technology, education, and leadership.
            </p>
          </AnimatedSection>

          {/* Jerry Kurian - Founder spotlight */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-2xl p-8 md:p-12 mb-12 hover:border-accent/30 transition-all">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="shrink-0">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-accent/20 shadow-[0_0_40px_rgba(233,71,63,0.15)]">
                    <img src="/images/jerry-kurian.png" alt="Jerry Kurian" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent-deep/10 text-xs font-mono text-accent mb-4">
                    Founder & Chief Mentor
                  </div>
                  <h3 className="font-display font-700 text-2xl md:text-3xl text-text mb-3">
                    Jerry Kurian
                  </h3>
                  <p className="text-accent italic text-base mb-4">
                    "Empowering mentees to excel in both technical expertise and professional development"
                  </p>
                  <p className="text-text-muted leading-relaxed mb-4">
                    With 25 years of deep technical expertise and a strong customer focus,
                    Jerry leverages his extensive experience to guide mentees in unlocking
                    their full potential and achieving transformative career success. His
                    hands-on mentorship approach goes beyond teaching — it's a partnership
                    that shapes how you think about problems, systems, and your career.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/jerryk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-bright transition-colors font-500"
                  >
                    Connect on LinkedIn <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Rest of the team */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 group hover:border-accent/30 transition-all h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-accent-deep/30 flex items-center justify-center font-display font-700 text-lg text-accent shrink-0 group-hover:from-accent/40 group-hover:to-accent-deep/40 transition-colors">
                      {member.name[0]}
                    </div>
                    <div>
                      <h3 className="font-display font-600 text-base text-text">{member.name}</h3>
                      <p className="text-xs text-accent font-mono">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-accent/80 italic mb-3">&ldquo;{member.quote}&rdquo;</p>
                  <p className="text-sm text-text-muted leading-relaxed flex-1">{member.desc}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-bright transition-colors font-500 mt-4 pt-3 border-t border-border/50"
                    >
                      Connect on LinkedIn <ArrowRight size={13} />
                    </a>
                  )}
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
              Ready to join Gen AI People?
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
