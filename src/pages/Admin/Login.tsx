
import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button'
import {
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Package,
  ShoppingCart,
  BarChart3,
  Users,
  TrendingUp,
} from 'lucide-react'

import logo from "../../../src/assets/logo.png"
import { useAuthStore } from '../../components/ZustandShare/AuthZuts'
import { useNavigate, useNavigation } from 'react-router-dom'
const features = [
  { icon: Package, label: 'Product Management' },
  { icon: ShoppingCart, label: 'Order Management' },
  { icon: Users, label: 'Customer Management' },
  { icon: BarChart3, label: 'Business Analytics' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
}



export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)

  const {Login} = useAuthStore()
  const navigate = useNavigate()

  //  Function to login
 async function Authenticate(){
    try {
setLoading(true)


 const success = await Login(email, password)
 if (success) {
      navigate("/admin-dashboard");
    }
    } catch (error){
      //  store handles error
    } finally {
setLoading(false)
    }
  }


  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

      {/* LEFT PANEL */}
      <section className="relative bg-[#090909] min-h-[440px] lg:min-h-screen px-6 py-6 sm:px-9 lg:px-11 flex flex-col justify-between overflow-hidden">

        {/* Animated background */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-36 -left-32 w-96 h-96 rounded-full bg-[#fd7e02]/10 blur-[100px] pointer-events-none"
        />

        <motion.div
          animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-32 right-0 w-80 h-80 rounded-full bg-[#fd7e02]/5 blur-[100px] pointer-events-none"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[28%] right-[9%] w-28 h-28 rounded-full border border-[#fd7e02]/10 pointer-events-none hidden xl:block"
        />

        <div className="relative z-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2.5"
          >

           
          </motion.div>

          {/* Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-lg mt-16 lg:mt-20"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-[#fd7e02]/20 bg-[#fd7e02]/5 text-[#fd7e02] text-[9px] font-bold tracking-[1.5px]">
                <span className="w-1.5 h-1.5 bg-[#fd7e02] rounded-full" />
                BUSINESS MANAGEMENT PLATFORM
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-white text-3xl sm:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight mt-5"
            >
              Excellence in style.
              <span className="block text-[#fd7e02] mt-1">
                Precision in business.
              </span>
            </motion.h2>

<motion.p
  variants={itemVariants}
  className="text-zinc-400 text-sm leading-6 mt-4 max-w-md"
>
  Your dedicated MachLuxe administration space. Manage
  your products, track sales, oversee orders and keep
  your business organised, all in one place.
</motion.p>
            {/* Features */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-x-4 gap-y-4 mt-8 max-w-md"
            >
              {features.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-[#fd7e02]/10 border border-[#fd7e02]/15 flex items-center justify-center">
                    <item.icon size={15} className="text-[#fd7e02]" />
                  </div>

                  <span className="text-zinc-300 text-[11px] sm:text-xs font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Business highlight */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex items-center gap-3 border-l-2 border-[#fd7e02] pl-3"
            >
              <TrendingUp size={21} className="text-[#fd7e02]" />

              <div>
                <p className="text-white text-xs font-semibold">
                  Built for business growth
                </p>
                <p className="text-zinc-500 text-[11px] mt-0.5">
                  Smarter operations. Better decisions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-10 border-t border-white/10 pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#fd7e02]" />
            <span className="text-zinc-500 text-[11px]">
              Secure Administration
            </span>
          </div>

          <span className="text-zinc-600 text-[10px]">
            MachLuxe
          </span>
        </div>
      </section>

      {/* RIGHT PANEL */}
      <section className="bg-white min-h-screen flex items-center justify-center px-6 py-8 sm:px-10">

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="w-full max-w-sm"
        >

          {/* Heading */}
          <div className="mb-7">

            {/* <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-5">
              
              
              <LockKeyhole size={19} className="text-[#fd7e02]" />
            </div> */}
            <div className='flex items-center justify-center'>


<img src={logo} width={120} className='animate-bounce'/>
            </div>

     

            <h2 className="text-[#171717] text-2xl sm:text-3xl font-bold tracking-tight">
              Welcome back
            </h2>

            {/* <p className="text-gray-500 text-xs sm:text-sm mt-2">
              Sign in to manage your MachLuxe store.
            </p> */}
          </div>

          {/* Login Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@machluxe.com"
                  className="w-full h-11 bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-3 text-gray-800 text-xs outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-[#fd7e02] focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-gray-700 text-xs font-semibold">
                  Password
                </label>

                <button
                  type="button"
                  className="text-[#fd7e02] text-[11px] font-semibold hover:text-orange-700"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-11 bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-10 text-gray-800 text-xs outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-[#fd7e02] focus:ring-2 focus:ring-orange-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2 text-gray-600 text-xs cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={rememberMe}

                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-3.5 h-3.5 accent-[#fd7e02]"
              />
              Remember me
            </label>

            {/* Submit */}
            <Button
      onClick={Authenticate}
      disabled={!email || !password}
// type="submit"
              variant="contained"
              fullWidth
              endIcon={<ArrowRight size={16} />}
              sx={{
                height: 43,
                mt: '8px !important',
                backgroundColor: '#fd7e02',
                color: '#111111',
                textTransform: 'none',
                fontSize: '12px',
                fontWeight: 700,
                borderRadius: '7px',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#e96f00',
                  boxShadow: 'none',
                },
              }}
            >
              {loading ? "Authenticating ...": "Sign In to Dashboard" }
        
            </Button>

          </form>

          {/* Security notice */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-start gap-2.5">
            <ShieldCheck size={17} className="text-[#fd7e02] shrink-0" />

            <p className="text-gray-500 text-[11px] leading-5">
              Your account is protected. Access is restricted to
              authorized MachLuxe administrators.
            </p>
          </div>

          {/* Footer */}
          <p className="text-gray-400 text-[10px] mt-8">
            © {new Date().getFullYear()} MachLuxe. All rights reserved.
          </p>

        </motion.div>
      </section>
    </div>
  )
}
