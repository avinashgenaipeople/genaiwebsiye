import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing or using the services provided by RTJ Education Services Pvt Ltd ("GenAI People"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services. We reserve the right to update these terms at any time, and continued use of our platform constitutes acceptance of any changes.`,
  },
  {
    title: 'Services',
    content: `GenAI People provides personalised mentorship programmes, educational content, and career guidance in the field of Generative AI and Agentic AI. Our services include one-on-one mentorship sessions, curated learning paths, project guidance, and career strategy support. The scope and delivery of services may vary based on the programme you enrol in.`,
  },
  {
    title: 'Payment',
    content: `Programme fees are as outlined at the time of enrolment. Payment must be completed before access to mentorship services is granted, unless an instalment plan has been agreed upon in writing. All fees are non-refundable unless otherwise stated in a separate refund policy. We reserve the right to modify pricing for future enrolments.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content provided as part of our mentorship programmes, including but not limited to course materials, templates, code samples, recordings, and documentation, is the intellectual property of RTJ Education Services Pvt Ltd. You may use these materials for personal learning and professional development but may not reproduce, distribute, or sell them without prior written consent.`,
  },
  {
    title: 'Limitation of Liability',
    content: `GenAI People provides mentorship and educational services to the best of our ability. However, we do not guarantee specific career outcomes, job placements, salary increases, or business results. Our liability is limited to the fees paid for the specific programme in question. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.`,
  },
  {
    title: 'Governing Law',
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or the use of our services shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.`,
  },
  {
    title: 'Contact',
    content: `If you have any questions about these Terms and Conditions, please contact us at contact@genaipeople.com. RTJ Education Services Pvt Ltd reserves the right to interpret and enforce these terms at its discretion.`,
  },
]

export default function TermsAndConditions() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-deep/10 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Terms and Conditions
            </h1>
            <p className="mt-6 text-text-muted">
              Last updated: February 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <p className="text-text-muted leading-relaxed mb-10">
                Please read these Terms and Conditions carefully before using the services offered by
                RTJ Education Services Pvt Ltd (&quot;GenAI People&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>

              <div className="space-y-10">
                {sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="font-display font-600 text-xl text-text mb-3">
                      {section.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed text-[15px]">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
