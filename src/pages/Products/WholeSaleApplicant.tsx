
import { motion } from 'framer-motion'
import {
  Store,
  User,
  Mail,
  Phone,
  MapPin,
  Package,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-[#111111] outline-none transition focus:border-[#fd7e02] focus:ring-2 focus:ring-[#fd7e02]/10 placeholder:text-gray-400'

export default function WholesaleApplication() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] px-5 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-gray-100 bg-white"
      >
        <div className="grid md:grid-cols-[0.85fr_1.15fr]">

          {/* Left Information Section */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#111111] p-8 text-white md:p-12">
            <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-[#fd7e02]/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#fd7e02]/10 blur-3xl" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16 flex items-center gap-3"
              >
                <div className="rounded-lg bg-[#fd7e02] p-2 text-black">
                  <Store size={24} />
                </div>
                <span className="text-xl font-bold tracking-wide">
                  WHOLESALE
                </span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#fd7e02]"
              >
                Become a Business Partner
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-6 text-4xl font-bold leading-tight md:text-5xl"
              >
                Grow your business with us.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="leading-7 text-gray-300"
              >
                Join our wholesale partner network and enjoy exclusive
                business pricing, bulk purchasing opportunities and
                dedicated support.
              </motion.p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-12 space-y-6"
              >
                {[
                  'Exclusive wholesale pricing',
                  'Competitive bulk order rates',
                  'Access to wholesale collections',
                  'Dedicated business support',
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#fd7e02]"
                    />
                    <span className="text-sm text-gray-200">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="relative z-10 mt-16 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#fd7e02]" size={22} />
                <div>
                  <p className="text-sm font-semibold">
                    Application Review
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Access is granted after approval.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-7 md:p-12"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF1E4]">
                <Building2 size={28} className="text-[#fd7e02]" />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#fd7e02]">
                Wholesale Membership
              </p>

              <h2 className="text-3xl font-bold text-[#111111]">
                Apply for an Account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Tell us about your business. Our team will review your
                application and notify you of the approval decision.
              </p>
            </motion.div>

            <form className="space-y-6">

              {/* Personal Information */}
              <motion.div variants={itemVariants}>
                <h3 className="mb-4 text-sm font-bold text-[#111111]">
                  Personal Information
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <User size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="e.g. 024 000 0000"
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Business Email Address
                  </label>
                  <div className="relative">
                    <Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="business@example.com"
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>
              </motion.div>

              <div className="border-t border-gray-100" />

              {/* Business Information */}
              <motion.div variants={itemVariants}>
                <h3 className="mb-4 text-sm font-bold text-[#111111]">
                  Business Information
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Business Name
                    </label>
                    <div className="relative">
                      <Store size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter your business name"
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Business Type
                      </label>
                      <select className={inputClass} defaultValue="">
                        <option value="" disabled>Select business type</option>
                        <option>Retail Shop</option>
                        <option>Online Store</option>
                        <option>Distributor</option>
                        <option>Reseller</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Expected Order Volume
                      </label>
                      <select className={inputClass} defaultValue="">
                        <option value="" disabled>Select quantity</option>
                        <option>10–20 pairs</option>
                        <option>21–50 pairs</option>
                        <option>51–100 pairs</option>
                        <option>Above 100 pairs</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Business Location
                    </label>
                    <div className="relative">
                      <MapPin size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="City, Region"
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Tell us about your business
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your business and what you intend to purchase..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div variants={itemVariants} className="pt-2">
                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: '#fd7e02',
                    color: '#111111',
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#111111] py-4 font-bold text-white transition-colors"
                >
                  Submit Application
                  <ArrowRight size={19} />
                </motion.button>

                <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                  By submitting this application, you agree to have
                  your business information reviewed for wholesale
                  membership.
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
