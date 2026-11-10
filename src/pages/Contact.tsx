
import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowUpRight,
  Clock,
  MessageCircle,
} from 'lucide-react'

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit us',
    detail: 'Mallam Gbawe – TopBase, Accra, Ghana.',
  },
  {
    icon: Phone,
    title: 'Call us',
    detail: '0599873039 • 0504196692',
  },
  {
    icon: Mail,
    title: 'Email us',
    detail: 'hello@mystore.com',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
}

const inputStyle =
  'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#fd7e02] focus:ring-4 focus:ring-orange-500/10'

function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-5 py-16 md:px-10 md:py-24">

      {/* Background decorations */}
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-slate-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
            <MessageCircle size={14} />
            Get in touch
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-black md:text-6xl">
            We'd love to
            <span className="block text-[#fd7e02]">
              hear from you.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
            Have a question, need assistance or looking for something special?
            Get in touch with us. We're always happy to help.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-7 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] bg-[#101010] p-8 text-white md:p-10"
          >
            {/* Decorations */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/[0.04]" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
                Contact details
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                Let's make
                <span className="block text-[#fd7e02]">
                  something happen.
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                We're here to make your shopping experience easier.
                Reach out to us through any of the channels below.
              </p>

              <div className="mt-10 space-y-4">
                {contactDetails.map(({ icon: Icon, title, detail }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#fd7e02]/40 hover:bg-white/[0.08]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fd7e02] text-black transition group-hover:scale-105">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold">{title}</p>
                      <p className="mt-1 break-words text-sm leading-6 text-slate-400">
                        {detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fd7e02]/10 text-[#fd7e02]">
                    <Clock size={19} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">We're just a message away.</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Your satisfaction matters to us.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#fd7e02]">
                  Let's connect
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-slate-200/80 bg-white p-7 md:p-10"
          >
            <div className="mb-9">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
                Send an enquiry
              </span>

              <h2 className="mt-3 text-2xl font-extrabold text-black md:text-3xl">
                Send us a message
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Complete the form below and our team will get back to you.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">

                <label className="block text-sm font-semibold text-slate-700">
                  Full name
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className={inputStyle}
                  />
                </label>

                <label className="block text-sm font-semibold text-slate-700">
                  Email address
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className={inputStyle}
                  />
                </label>

              </div>

              <label className="block text-sm font-semibold text-slate-700">
                Subject
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="What is this about?"
                  className={inputStyle}
                />
              </label>

              <label className="block text-sm font-semibold text-slate-700">
                Your message
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us how we can help you..."
                  className={`${inputStyle} resize-none`}
                />
              </label>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  endIcon={<Send size={17} />}
                  sx={{
                    py: 1.8,
                    borderRadius: '12px',
                    backgroundColor: '#000',
                    color: '#fd7e02',
                    fontSize: '14px',
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#fd7e02',
                      color: '#000',
                      boxShadow: 'none',
                    },
                  }}
                >
                  Send message
                </Button>
              </div>

              <p className="text-center text-xs text-slate-400">
                We appreciate you reaching out to us.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactPage
