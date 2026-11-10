
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bell,
  Building2,
  LockKeyhole,
  Save,
  ShieldCheck,
  UserRound,
  CheckCircle2,
} from 'lucide-react'

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export default function AdminSettings() {
  const [saved, setSaved] = useState(false)

  const [notifications, setNotifications] = useState({
    orders: true,
    applications: true,
    inventory: false,
    support: true,
  })

  const save = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2500)
  }

  const toggle = (key: keyof typeof notifications) => {
    setNotifications(current => ({
      ...current,
      [key]: !current[key],
    }))
  }

  const notificationItems = [
    ['orders', 'New orders', 'Get notified when a customer places an order.'],
    ['applications', 'Wholesale applications', 'Get notified when a business applies for an account.'],
    ['inventory', 'Low inventory alerts', 'Get notified when stock reaches its reorder threshold.'],
    ['support', 'Customer support', 'Get notified when a new enquiry is received.'],
  ] as const

  const inputClass =
    'mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-black outline-none transition focus:border-[#FD7E02] focus:ring-2 focus:ring-[#FD7E02]/10'

  return (
    <main className="space-y-5 p-4 sm:p-5 lg:p-6">
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
          Settings
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage store details, preferences, and administrator security.
        </p>
      </motion.header>

      <AnimatePresence>
        {saved && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
            role="status"
          >
            <CheckCircle2 size={17} />
            Your settings have been saved for this session.
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={save} className="space-y-5">
        {/* Store information */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <div className="border-b border-slate-100 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-[#FD7E02]/10 p-2 text-[#FD7E02]">
                <Building2 size={19} />
              </span>
              <div>
                <h2 className="text-sm font-bold text-black">Store information</h2>
                <p className="text-xs text-slate-500">
                  Details displayed across your store and customer communications.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
            <label className="text-sm font-medium text-slate-700">
              Store name
              <input defaultValue="MachLuxe" className={inputClass} />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Store email
              <input
                type="email"
                defaultValue="hello@machluxe.com"
                className={inputClass}
              />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Business phone
              <input type="tel" placeholder="Enter business phone" className={inputClass} />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Business address
              <input placeholder="Enter business address" className={inputClass} />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Currency
              <select defaultValue="GHS" className={inputClass}>
                <option value="GHS">GHS — Ghana Cedi (GH₵)</option>
                <option value="USD">USD — US Dollar ($)</option>
                <option value="GBP">GBP — British Pound (£)</option>
                <option value="EUR">EUR — Euro (€)</option>
              </select>
            </label>
          </div>
        </motion.section>

        {/* Notification preferences */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, delay: 0.08 }}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <div className="border-b border-slate-100 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-[#FD7E02]/10 p-2 text-[#FD7E02]">
                <Bell size={19} />
              </span>
              <div>
                <h2 className="text-sm font-bold text-black">
                  Notification preferences
                </h2>
                <p className="text-xs text-slate-500">
                  Choose which store events should trigger notifications.
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-100 px-4 sm:px-5">
            {notificationItems.map(([key, title, description]) => (
              <div
                key={key}
                className="flex items-center justify-between gap-4 py-4"
              >
                <div>
                  <p className="text-sm font-semibold text-black">{title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => toggle(key)}
                  aria-label={`Toggle ${title}`}
                  aria-pressed={notifications[key]}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                    notifications[key] ? 'bg-[#FD7E02]' : 'bg-slate-300'
                  }`}
                >
                  <motion.span
                    animate={{ x: notifications[key] ? 20 : 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute left-0 top-1 h-4 w-4 rounded-full bg-white shadow-sm"
                  />
                </button>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Account and security */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, delay: 0.16 }}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <div className="border-b border-slate-100 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-black/5 p-2 text-black">
                <ShieldCheck size={19} />
              </span>
              <div>
                <h2 className="text-sm font-bold text-black">Account & security</h2>
                <p className="text-xs text-slate-500">
                  Administrator access and login protection.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
            <div className="rounded-lg border border-slate-200 p-4 transition hover:border-[#FD7E02]/50">
              <div className="flex items-center gap-2 text-black">
                <UserRound size={17} className="text-[#FD7E02]" />
                <p className="text-sm font-semibold">Administrator profile</p>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Manage your administrator account details.
              </p>
              <button
                type="button"
                className="mt-3 text-xs font-semibold text-[#FD7E02] transition hover:text-black"
              >
                Manage profile
              </button>
            </div>

            <div className="rounded-lg border border-slate-200 p-4 transition hover:border-[#FD7E02]/50">
              <div className="flex items-center gap-2 text-black">
                <LockKeyhole size={17} className="text-[#FD7E02]" />
                <p className="text-sm font-semibold">Password & authentication</p>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Review your password and account security settings.
              </p>
              <button
                type="button"
                className="mt-3 text-xs font-semibold text-[#FD7E02] transition hover:text-black"
              >
                Review security
              </button>
            </div>
          </div>
        </motion.section>

        {/* Save */}
        <div className="flex justify-end">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#FD7E02] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-black"
          >
            <Save size={16} />
            Save settings
          </motion.button>
        </div>
      </form>
    </main>
  )
}
