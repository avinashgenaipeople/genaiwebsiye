import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information that you provide directly to us when you enrol in our mentorship programmes, create an account, or contact us. This may include your name, email address, phone number, professional background, and payment information. We may also collect usage data such as how you interact with our platform, including pages visited and features used.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to provide, maintain, and improve our mentorship services. This includes personalising your learning experience, processing payments, communicating with you about your programme, sending relevant updates and educational content, and analysing usage patterns to enhance our platform. We will never sell your personal information to third parties.`,
  },
  {
    title: 'Data Security',
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your data, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Third-Party Services',
    content: `Our platform may integrate with third-party services such as payment processors, video conferencing tools, and analytics providers. These services have their own privacy policies, and we encourage you to review them. We only share the minimum information necessary for these services to function as part of your mentorship experience.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to access, correct, or delete your personal information at any time. You may also request a copy of the data we hold about you, opt out of marketing communications, or withdraw consent for data processing. To exercise any of these rights, please contact us using the details provided below.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at contact@genaipeople.com. RTJ Education Services Pvt Ltd is the data controller responsible for your personal information.`,
  },
]

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                RTJ Education Services Pvt Ltd (&quot;GenAI People&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
                is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
                and safeguard your information when you use our mentorship platform and services.
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
