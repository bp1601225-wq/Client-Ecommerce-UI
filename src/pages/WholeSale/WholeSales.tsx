
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Store,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useWholeSaleStore } from '../../components/ZustandShare/WholeSaleZuts'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
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


export default function WholesaleAccess(onSuccess:{}) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) return

    setLoading(true)

    try {
      console.log('Verify wholesale email:', email)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }



  const navigate = useNavigate()

const {AccessWholeSaleAccount} = useWholeSaleStore()



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-5 py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden border border-gray-100"
      >
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-[#111111] text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="absolute -top-24 -right-24 w-64 h-64 bg-[#fd7e02]/10 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#fd7e02]/10 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex items-center gap-3 mb-16"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="bg-[#fd7e02] p-2 rounded-lg text-black">
                <Store size={23} />
              </motion.div>

              <span className="font-bold text-xl tracking-wide">
                WHOLESALE
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-[#fd7e02] text-sm font-bold uppercase tracking-widest mb-4"
            >
              Exclusive Business Access
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-4xl font-bold leading-tight mb-5"
            >
              Your business deserves better prices.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-gray-300 leading-7"
            >
              Access exclusive wholesale pricing, bulk purchasing
              opportunities and special offers reserved for our
              approved business partners.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 mt-16 space-y-5"
          >
            {[
              'Exclusive wholesale prices',
              'Flexible bulk ordering',
              'Special business offers',
            ].map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="text-[#fd7e02]" size={19} />
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-8 md:p-14 flex flex-col justify-center"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.06, rotate: 3 }}
            className="w-14 h-14 rounded-xl bg-[#FFF1E4] flex items-center justify-center mb-7"
          >
            <ShieldCheck className="text-[#fd7e02]" size={28} />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[#fd7e02] font-bold text-xs uppercase tracking-widest mb-3"
          >
            Approved Customers Only
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-[#111111] mb-3"
          >
            Wholesale Access
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm leading-6 mb-8"
          >
            Enter the email address you used when applying for
            wholesale membership. We will verify your access.
          </motion.p>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Registered Business Email
              </label>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                //   required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="business@example.com"
                  className="w-full border border-gray-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-[#fd7e02] focus:ring-2 focus:ring-[#fd7e02]/10 transition"
                />
              </motion.div>
            </motion.div>

          <motion.button
  onClick={async (e) => {
    e.preventDefault();

    if (!email.trim() || loading) return;

    try {
      setLoading(true);

      const result = await AccessWholeSaleAccount(email.trim());

      if (result) {
        navigate("/whole-sale-access-result", {
          state: result,
        });
      }
    } catch (error) {
      // store handles error

      
    } finally {
      setLoading(false);
    }
  }}
  whileHover={{
    scale: 1.02,
    backgroundColor: "#fd7e02",
    color: "#111111",
  }}
  whileTap={{ scale: 0.97 }}
  disabled={loading || !email.trim()}
  type="button"
  className="w-full bg-[#111111] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors disabled:opacity-60"
>
  {loading ? "Verifying..." : "Continue to Wholesale"}

  {!loading && <ArrowRight size={19} />}
</motion.button>


          </motion.form>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -3 }}
            className="mt-8 p-4 bg-[#FFF7EF] rounded-xl border border-orange-100"
          >
            <p className="text-sm text-gray-600 leading-6">
              <strong className="text-[#111111]">
                Not yet a wholesale partner?
              </strong>
              <br />
              Apply for wholesale approval to access our exclusive
              business pricing.
            </p>
<motion.div whileHover={{ x: 5 }}>
  <Link
    to="/whole-sale-application"
    className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-[#fd7e02] hover:text-amber-300 transition-colors"
  >
    Apply for an account <ArrowRight size={16} />
  </Link>
</motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-xs text-gray-400 mt-10"
          >
            Secure Wholesale Access · Business Partners Only
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
