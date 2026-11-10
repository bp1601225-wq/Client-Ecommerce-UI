
import { motion } from 'framer-motion'
import {
  ArrowRight,
  PackageCheck,
  Truck,
  Clock3,
  ShoppingBag,
  CalendarDays,
  Package,
  ChevronRight,
} from 'lucide-react'

const orders = [
  {
    id: 'WHO-2026-001',
    total: 3840,
    items: 12,
    status: 'Delivered',
    date: '10 Nov 2026',
  },
  {
    id: 'WHO-2026-002',
    total: 2560,
    items: 8,
    status: 'In transit',
    date: '07 Nov 2026',
  },
  {
    id: 'WHO-2026-003',
    total: 5250,
    items: 15,
    status: 'Processing',
    date: '04 Nov 2026',
  },
]

const currency = (value: number) =>
  new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    maximumFractionDigits: 2,
  }).format(value)

const statusStyles = {
  Delivered: {
    icon: PackageCheck,
    className: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    dot: 'bg-emerald-500',
  },
  'In transit': {
    icon: Truck,
    className: 'bg-orange-50 text-[#C65B00] border-orange-100',
    dot: 'bg-[#fd7e02]',
  },
  Processing: {
    icon: Clock3,
    className: 'bg-amber-50 text-amber-700 border-amber-100',
    dot: 'bg-amber-500',
  },
}

export default function WholesaleOrdersPage() {
  const activeOrders = orders.filter(
    (order) => order.status !== 'Delivered',
  ).length

  const completedOrders = orders.filter(
    (order) => order.status === 'Delivered',
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
            className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="mb-3 flex items-center gap-2">
                <span className="h-1 w-7 rounded-full bg-[#fd7e02]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#fd7e02]">
                  Wholesale account
                </p>
              </motion.div>

              <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
                My Orders
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#737373]">
                Keep track of your wholesale purchases, delivery progress
                and order history.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2 rounded-xl border border-[#E7E5E4] bg-white px-4 py-3">
              <ShoppingBag size={17} className="text-[#fd7e02]" />
              <span className="text-sm font-semibold text-[#262626]">
                {orders.length} total orders
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Order summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mb-8 grid gap-4 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-[#E7E5E4] bg-white p-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#737373]">
                Total orders
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="rounded-xl bg-[#FFF3E8] p-2.5">
                <ShoppingBag size={18} className="text-[#fd7e02]" />
              </motion.div>
            </motion.div>
            <p className="mt-4 text-3xl font-bold tracking-tight text-[#111111]">
              {orders.length.toString().padStart(2, '0')}
            </p>
            <p className="mt-1 text-xs text-[#A3A3A3]">
              All your wholesale purchases
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-[#E7E5E4] bg-white p-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#737373]">
                Active orders
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="rounded-xl bg-amber-50 p-2.5">
                <Truck size={18} className="text-amber-600" />
              </motion.div>
            </motion.div>
            <p className="mt-4 text-3xl font-bold tracking-tight text-[#111111]">
              {activeOrders.toString().padStart(2, '0')}
            </p>
            <p className="mt-1 text-xs text-[#A3A3A3]">
              Orders being processed or delivered
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-[#E7E5E4] bg-white p-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#737373]">
                Completed orders
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="rounded-xl bg-emerald-50 p-2.5">
                <PackageCheck size={18} className="text-emerald-600" />
              </motion.div>
            </motion.div>
            <p className="mt-4 text-3xl font-bold tracking-tight text-[#111111]">
              {completedOrders.toString().padStart(2, '0')}
            </p>
            <p className="mt-1 text-xs text-[#A3A3A3]">
              Successfully delivered orders
            </p>
          </motion.div>
        </motion.div>

        {/* Orders section */}
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
              <h2 className="text-lg font-bold text-[#111111]">
                Order history
              </h2>
              <p className="mt-1 text-xs text-[#888888]">
                Review and manage your wholesale orders.
              </p>
            </motion.div>

            <span className="w-fit rounded-lg bg-[#F5F5F4] px-3 py-2 text-xs font-semibold text-[#525252]">
              {orders.length} records
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="divide-y divide-[#EEEEEC]">
            {orders.map((order, index) => {
              const status =
                statusStyles[order.status as keyof typeof statusStyles]

              const StatusIcon = status.icon

              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="p-5 transition-colors hover:bg-[#FAFAF9] sm:p-6"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    {/* Order identity */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-start gap-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#111111]">
                        <Package size={21} className="text-[#fd7e02]" />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A3A3A3]">
                          Order reference
                        </p>
                        <h3 className="mt-1 text-base font-bold text-[#111111]">
                          {order.id}
                        </h3>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.35 }}
                          className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#858585]">
                          <span className="flex items-center gap-1.5">
                            <CalendarDays size={13} />
                            {order.date}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-[#D4D4D4]" />
                          <span>{order.items} products</span>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Order status and amount */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-wrap items-center justify-between gap-4 lg:justify-end lg:gap-10">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}>
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#A3A3A3]">
                          Order status
                        </p>

                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${status.className}`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                          <StatusIcon size={14} />
                          {order.status}
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}>
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#A3A3A3]">
                          Order total
                        </p>
                        <p className="text-lg font-bold text-[#111111]">
                          {currency(order.total)}
                        </p>
                      </motion.div>

                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E5E5] px-4 py-2.5 text-xs font-bold text-[#262626] transition hover:border-[#fd7e02] hover:bg-[#FFF7F0] hover:text-[#C65B00]"
                      >
                        View details
                        <ChevronRight size={15} />
                      </button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col justify-between gap-3 border-t border-[#EEEEEC] bg-[#FAFAF9] px-5 py-4 sm:flex-row sm:items-center sm:px-6">
            <p className="text-xs text-[#888888]">
              Showing {orders.length} orders
            </p>

            <p className="text-xs font-medium text-[#737373]">
              Need help with an order?{' '}
              <a
                href="/whole-sale-support"
                className="font-bold text-[#C65B00] transition hover:text-[#fd7e02]"
              >
                Contact support
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* Continue shopping */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#111111] p-6 sm:flex-row sm:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}>
            <h3 className="text-lg font-bold text-white">
              Ready for your next purchase?
            </h3>
            <p className="mt-1 text-sm text-[#A3A3A3]">
              Explore our wholesale collection and discover new deals.
            </p>
          </motion.div>

          <a
            href="/whole-sale-products"
            className="inline-flex items-center gap-2 rounded-xl bg-[#fd7e02] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e56f00]"
          >
            Browse products
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
