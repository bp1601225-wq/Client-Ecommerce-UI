
import { motion } from 'framer-motion'
import {
  Store,
  User,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
}

const inputClass =
  'w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs text-[#111111] outline-none transition focus:border-[#fd7e02] focus:ring-2 focus:ring-[#fd7e02]/10 placeholder:text-gray-400'

export default function WholesaleApplication() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#FAFAFA] px-3 py-5 sm:px-5 sm:py-7"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-100 bg-white"
      >
        <div className="grid md:grid-cols-[0.85fr_1.15fr]">

          {/* Left Information Panel */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#111111] p-6 text-white md:p-8">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#fd7e02]/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#fd7e02]/10 blur-3xl" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-10 flex items-center gap-2.5"
              >
                <div className="rounded-lg bg-[#fd7e02] p-2 text-black">
                  <Store size={19} />
                </div>
                <span className="text-base font-bold tracking-wide">
                  WHOLESALE
                </span>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.p
                  variants={itemVariants}
                  className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fd7e02]"
                >
                  Become a Business Partner
                </motion.p>

                <motion.h1
                  variants={itemVariants}
                  className="mb-4 text-3xl font-bold leading-tight md:text-4xl"
                >
                  Grow your business with us.
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="max-w-sm text-xs leading-6 text-gray-300"
                >
                  Join our wholesale partner network and enjoy exclusive
                  business pricing, bulk purchasing opportunities and
                  dedicated support.
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  className="mt-9 space-y-4"
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
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#fd7e02]"
                      />
                      <span className="text-xs text-gray-200">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div className="relative z-10 mt-10 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="text-[#fd7e02]" size={19} />
                <div>
                  <p className="text-xs font-semibold">
                    Application Review
                  </p>
                  <p className="mt-0.5 text-[10px] text-gray-400">
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
            className="p-5 sm:p-7 md:p-8"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF1E4]">
                <Building2 size={21} className="text-[#fd7e02]" />
              </div>

              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#fd7e02]">
                Wholesale Membership
              </p>

              <h2 className="text-xl font-bold text-[#111111]">
                Apply for an Account
              </h2>

              <p className="mt-1.5 text-xs leading-5 text-gray-500">
                Tell us about your business. Our team will review your
                application and notify you of the decision.
              </p>
            </motion.div>

            <form className="space-y-5">

              {/* Personal Information */}
              <motion.div variants={itemVariants}>
                <h3 className="mb-3 text-xs font-bold text-[#111111]">
                  Personal Information
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className={`${inputClass} pl-9`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="e.g. 024 000 0000"
                        className={`${inputClass} pl-9`}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <label className="mb-1.5 block text-xs font-medium text-gray-700">
                    Business Email Address
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="business@example.com"
                      className={`${inputClass} pl-9`}
                    />
                  </div>
                </div>
              </motion.div>

              <div className="border-t border-gray-100" />

              {/* Business Information */}
              <motion.div variants={itemVariants}>
                <h3 className="mb-3 text-xs font-bold text-[#111111]">
                  Business Information
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700">
                      Business Name
                    </label>
                    <div className="relative">
                      <Store size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Enter your business name"
                        className={`${inputClass} pl-9`}
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-700">
                        Business Type
                      </label>
                      <select className={inputClass} defaultValue="">
                        <option value="" disabled>
                          Select business type
                        </option>
                        <option>Retail Shop</option>
                        <option>Online Store</option>
                        <option>Distributor</option>
                        <option>Reseller</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-700">
                        Expected Order Volume
                      </label>
                      <select className={inputClass} defaultValue="">
                        <option value="" disabled>
                          Select quantity
                        </option>
                        <option>10–20 pairs</option>
                        <option>21–50 pairs</option>
                        <option>51–100 pairs</option>
                        <option>Above 100 pairs</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700">
                      Business Location
                    </label>
                    <div className="relative">
                      <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="City, Region"
                        className={`${inputClass} pl-9`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700">
                      Tell us about your business
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your business and what you intend to purchase..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div variants={itemVariants} className="pt-1">
                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.01,
                    backgroundColor: '#fd7e02',
                    color: '#111111',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#111111] py-3 text-xs font-bold text-white transition-colors"
                >
                  Submit Application
                  <ArrowRight size={16} />
                </motion.button>

                <p className="mt-3 text-center text-[10px] leading-4 text-gray-400">
                  By submitting this application, you agree to have
                  your business information reviewed for wholesale
                  membership.
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
