
import { motion } from 'framer-motion'
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
  BriefcaseBusiness,
  Package,
  CalendarDays,
  Pencil,
  FileText,
} from 'lucide-react'

const businessProfile = {
  fullName: 'John Doe',
  phone: '+233 24 123 4567',
  email: 'john@bluepeakretail.com',
  businessName: 'BluePeak Retail Group',
  businessType: 'Retail Shop',
  orderVolume: '51–100 pairs',
  location: 'Accra, Ghana',
  description:
    'We operate a retail footwear business serving customers across Accra. We are interested in purchasing quality footwear and accessories in bulk for resale.',
}

const profileDetails = [
  {
    label: 'Full name',
    value: businessProfile.fullName,
    icon: UserRound,
  },
  {
    label: 'Phone number',
    value: businessProfile.phone,
    icon: Phone,
  },
  {
    label: 'Business email',
    value: businessProfile.email,
    icon: Mail,
  },
  {
    label: 'Business name',
    value: businessProfile.businessName,
    icon: Building2,
  },
  {
    label: 'Business type',
    value: businessProfile.businessType,
    icon: BriefcaseBusiness,
  },
  {
    label: 'Expected order volume',
    value: businessProfile.orderVolume,
    icon: Package,
  },
  {
    label: 'Business location',
    value: businessProfile.location,
    icon: MapPin,
  },
]

export default function WholesaleProfilePage() {
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
        className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Page heading */}
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
              Wholesale membership
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
                Business Profile
              </h1>
              <p className="mt-2 text-sm text-[#737373]">
                Manage your personal and business information.
              </p>
            </motion.div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700">
              <ShieldCheck size={15} />
              Verified wholesale account
            </span>
          </motion.div>
        </motion.div>

        {/* Business identity */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 overflow-hidden rounded-2xl bg-[#111111]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="relative p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-[35px] border-[#fd7e02]/10" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#fd7e02]">
                <Building2 size={32} className="text-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
                  Registered business
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  {businessProfile.businessName}
                </h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#A3A3A3]">
                  <span>{businessProfile.businessType}</span>
                  <span className="h-1 w-1 rounded-full bg-[#737373]" />
                  <span>{businessProfile.location}</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <ShieldCheck size={17} className="text-[#fd7e02]" />
                <span className="text-xs font-semibold text-white">
                  Membership active
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Personal information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mb-6 overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-3 border-b border-[#EEEEEC] px-5 py-5 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl bg-[#FFF3E8] p-2.5">
              <UserRound size={19} className="text-[#fd7e02]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}>
              <h2 className="font-bold text-[#111111]">
                Personal Information
              </h2>
              <p className="mt-1 text-xs text-[#888888]">
                Contact details of the account holder.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="grid gap-6 p-5 sm:grid-cols-2 sm:p-6">
            {profileDetails.slice(0, 3).map((detail) => {
              const Icon = detail.icon

              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  key={detail.label} className="flex items-start gap-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-lg bg-[#F5F5F4] p-2.5">
                    <Icon size={17} className="text-[#737373]" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="min-w-0">
                    <p className="text-xs text-[#999999]">
                      {detail.label}
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold text-[#262626]">
                      {detail.value}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Business information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mb-6 overflow-hidden rounded-2xl border border-[#E7E5E4] bg-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-3 border-b border-[#EEEEEC] px-5 py-5 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl bg-[#FFF3E8] p-2.5">
              <Building2 size={19} className="text-[#fd7e02]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}>
              <h2 className="font-bold text-[#111111]">
                Business Information
              </h2>
              <p className="mt-1 text-xs text-[#888888]">
                Details submitted during wholesale membership application.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
            {profileDetails.slice(3).map((detail) => {
              const Icon = detail.icon

              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  
                  key={detail.label}
                  className="rounded-xl border border-[#EEEEEC] bg-[#FAFAF9] p-4"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="flex items-center gap-2">
                    <Icon size={15} className="text-[#fd7e02]" />
                    <p className="text-xs font-medium text-[#888888]">
                      {detail.label}
                    </p>
                  </motion.div>

                  <p className="mt-3 text-base font-bold text-[#262626]">
                    {detail.value}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Business description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="mx-5 mb-5 rounded-xl border border-[#EEEEEC] bg-[#FAFAF9] p-4 sm:mx-6 sm:mb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2">
              <FileText size={16} className="text-[#fd7e02]" />
              <p className="text-xs font-semibold text-[#737373]">
                About the business
              </p>
            </motion.div>

            <p className="mt-3 text-sm leading-7 text-[#525252]">
              {businessProfile.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Account information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col justify-between gap-4 rounded-2xl border border-[#E7E5E4] bg-white p-5 sm:flex-row sm:items-center sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex items-start gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl bg-[#F5F5F4] p-2.5">
              <CalendarDays size={19} className="text-[#737373]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}>
              <h3 className="text-sm font-bold text-[#262626]">
                Keep your business details up to date
              </h3>
              <p className="mt-1 text-xs leading-5 text-[#888888]">
                Contact the wholesale team if your registered information changes.
              </p>
            </motion.div>
          </motion.div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111111] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#fd7e02]"
          >
            <Pencil size={15} />
            Edit profile
          </button>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}
