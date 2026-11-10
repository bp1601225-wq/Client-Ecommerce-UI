
import { motion } from 'framer-motion'
import {
  Headphones,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Ticket,
  Mail,
  Phone,
  LifeBuoy,
} from 'lucide-react'

const tickets = [
  {
    id: 'TKT-001',
    title: 'Order modification request',
    category: 'Order enquiry',
    date: '10 Nov 2026',
    status: 'Resolved',
  },
  {
    id: 'TKT-002',
    title: 'Bulk pricing questions',
    category: 'Sales enquiry',
    date: '08 Nov 2026',
    status: 'In review',
  },
  {
    id: 'TKT-003',
    title: 'Account verification',
    category: 'Account support',
    date: '06 Nov 2026',
    status: 'Open',
  },
]

const statusStyles = {
  Resolved: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'In review': 'bg-amber-50 text-amber-700 border-amber-100',
  Open: 'bg-orange-50 text-[#C65B00] border-orange-100',
}

const supportOptions = [
  {
    icon: Headphones,
    title: 'Sales assistance',
    description:
      'Speak with our wholesale account team about product availability, bulk pricing and large orders.',
    action: 'Contact sales',
    detail: 'For pricing, stock and order enquiries',
    style: 'bg-[#FFF3E8] text-[#fd7e02]',
  },
  {
    icon: MessageCircle,
    title: 'Live support',
    description:
      'Get help with an ongoing order, checkout difficulties or general questions about your account.',
    action: 'Start a conversation',
    detail: 'For quick questions and troubleshooting',
    style: 'bg-[#F5F5F4] text-[#262626]',
  },
  {
    icon: ShieldCheck,
    title: 'Account assistance',
    description:
      'Get help with business verification, account information, access and wholesale permissions.',
    action: 'Request assistance',
    detail: 'For account and verification matters',
    style: 'bg-[#FFF3E8] text-[#fd7e02]',
  },
]

export default function WholesaleSupportPage() {
  const openTickets = tickets.filter(
    (ticket) => ticket.status !== 'Resolved',
  ).length

  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status === 'Resolved',
  ).length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#F8F8F7] text-[#171717]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="mb-3 flex items-center gap-2">
            <span className="h-1 w-7 rounded-full bg-[#fd7e02]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#fd7e02]">
              MachLuxe Wholesale
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}>
              <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
                Business Support
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#737373]">
                We're here to help you manage your wholesale account,
                resolve issues and keep your business moving.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2 rounded-xl border border-[#E7E5E4] bg-white px-4 py-3">
              <LifeBuoy size={17} className="text-[#fd7e02]" />
              <span className="text-sm font-semibold text-[#262626]">
                Customer assistance
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Support banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="relative mb-8 overflow-hidden rounded-2xl bg-[#111111] p-6 sm:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border-[35px] border-[#fd7e02]/10" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-none absolute -bottom-24 right-40 h-52 w-52 rounded-full bg-[#fd7e02]/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#fd7e02]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#fd7e02]" />
                We're ready to assist
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Your business deserves
                <span className="text-[#fd7e02]"> reliable support.</span>
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#A3A3A3]">
                Whether it's an order, product enquiry or account issue,
                connect with our team and get the assistance you need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="flex h-20 w-20 shrink-0 items-center justify-center self-start rounded-2xl border border-white/10 bg-white/5 md:self-center">
              <Headphones size={38} className="text-[#fd7e02]" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Support options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="mb-5">
            <h2 className="text-xl font-bold text-[#111111]">
              How can we help?
            </h2>
            <p className="mt-1 text-sm text-[#858585]">
              Choose the support channel that best matches your needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="grid gap-5 md:grid-cols-3">
            {supportOptions.map((option, index) => {
              const Icon = option.icon

              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="group flex flex-col rounded-2xl border border-[#E7E5E4] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#fd7e02]/50"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${option.style}`}>
                    <Icon size={23} />
                  </motion.div>

                  <h3 className="mt-5 text-lg font-bold text-[#111111]">
                    {option.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-6 text-[#777777]">
                    {option.description}
                  </p>

                  <p className="mt-4 text-[11px] font-medium text-[#A3A3A3]">
                    {option.detail}
                  </p>

                  <button
                    type="button"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#111111] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#fd7e02]"
                  >
                    {option.action}
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Ticket summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mb-5 grid gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex items-center justify-between rounded-2xl border border-[#E7E5E4] bg-white p-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}>
              <p className="text-sm font-medium text-[#777777]">
                Open requests
              </p>
              <p className="mt-2 text-3xl font-bold text-[#111111]">
                {openTickets.toString().padStart(2, '0')}
              </p>
              <p className="mt-1 text-xs text-[#A3A3A3]">
                Awaiting attention or review
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl bg-amber-50 p-3">
              <Clock3 size={22} className="text-amber-600" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex items-center justify-between rounded-2xl border border-[#E7E5E4] bg-white p-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}>
              <p className="text-sm font-medium text-[#777777]">
                Resolved requests
              </p>
              <p className="mt-2 text-3xl font-bold text-[#111111]">
                {resolvedTickets.toString().padStart(2, '0')}
              </p>
              <p className="mt-1 text-xs text-[#A3A3A3]">
                Successfully addressed
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl bg-emerald-50 p-3">
              <CheckCircle2 size={22} className="text-emerald-600" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Recent tickets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col justify-between gap-3 border-b border-[#EEEEEC] px-5 py-5 sm:flex-row sm:items-center sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-2">
                <Ticket size={19} className="text-[#fd7e02]" />
                <h2 className="text-lg font-bold text-[#111111]">
                  Recent support requests
                </h2>
              </motion.div>
              <p className="mt-1 text-xs text-[#888888]">
                Track the progress of your submitted enquiries.
              </p>
            </motion.div>

            <span className="w-fit rounded-lg bg-[#F5F5F4] px-3 py-2 text-xs font-semibold text-[#525252]">
              {tickets.length} requests
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="divide-y divide-[#EEEEEC]">
            {tickets.map((ticket, index) => (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: index * 0.07 }}
                className="flex flex-col justify-between gap-4 p-5 transition hover:bg-[#FAFAF9] sm:flex-row sm:items-center sm:px-6"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-start gap-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F5F4]">
                    <MessageCircle size={18} className="text-[#737373]" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}>
                    <h3 className="text-sm font-bold text-[#262626]">
                      {ticket.title}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-[#999999]">
                      <span>{ticket.id}</span>
                      <span className="h-1 w-1 rounded-full bg-[#D4D4D4]" />
                      <span>{ticket.category}</span>
                      <span className="h-1 w-1 rounded-full bg-[#D4D4D4]" />
                      <span>{ticket.date}</span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center justify-between gap-4 sm:justify-end">
                  <span
                    className={`rounded-full border px-3 py-1.5 text-[11px] font-bold ${
                      statusStyles[ticket.status as keyof typeof statusStyles]
                    }`}
                  >
                    {ticket.status}
                  </span>

                  <button
                    type="button"
                    aria-label={`View ${ticket.id}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E7E5E4] text-[#737373] transition hover:border-[#fd7e02] hover:text-[#fd7e02]"
                  >
                    <ChevronRight size={17} />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="border-t border-[#EEEEEC] bg-[#FAFAF9] px-5 py-4 sm:px-6">
            <p className="text-xs text-[#888888]">
              Need further assistance? Submit a new support request to our team.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mt-6 grid gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-3 rounded-2xl border border-[#E7E5E4] bg-white p-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl bg-[#FFF3E8] p-3">
              <Mail size={19} className="text-[#fd7e02]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}>
              <p className="text-xs text-[#999999]">Email assistance</p>
              <p className="mt-1 text-sm font-bold text-[#262626]">
                Contact our support team
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-3 rounded-2xl border border-[#E7E5E4] bg-white p-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl bg-[#F5F5F4] p-3">
              <Phone size={19} className="text-[#262626]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}>
              <p className="text-xs text-[#999999]">Phone assistance</p>
              <p className="mt-1 text-sm font-bold text-[#262626]">
                Speak with our team
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}
