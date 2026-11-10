import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  LayoutDashboard,
  ClipboardList,
  UserRound,
  Headset,
  Eye,
  Heart,
  Truck,
  ShoppingCart,
  Package,
} from 'lucide-react'


const products = [
  {
    id: 1,
    name: 'Classic Leather Heels',
    category: 'Women Shoes',
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600',
    retailPrice: 450,
    wholesalePrice: 320,
    stock: 45,
    minOrder: 6,
  },
  {
    id: 2,
    name: 'Premium Men Sneakers',
    category: 'Men Shoes',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
    retailPrice: 550,
    wholesalePrice: 390,
    stock: 32,
    minOrder: 6,
  },
  {
    id: 3,
    name: 'Elegant Ladies Flats',
    category: 'Women Shoes',
    image:
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600',
    retailPrice: 300,
    wholesalePrice: 210,
    stock: 60,
    minOrder: 6,
  },
  {
    id: 4,
    name: 'Casual Everyday Sneakers',
    category: 'Unisex Shoes',
    image:
      'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600',
    retailPrice: 400,
    wholesalePrice: 280,
    stock: 28,
    minOrder: 6,
  },
]

const stats = [
  {
    title: 'Total Orders',
    value: '24',
    description: 'All your orders',
    icon: ShoppingBag,
  },
  {
    title: 'Pending Orders',
    value: '03',
    description: 'Awaiting processing',
    icon: Package,
  },
  {
    title: 'Completed Orders',
    value: '18',
    description: 'Successfully delivered',
    icon: CheckCircle2,
  },
  {
    title: 'Cart Items',
    value: '06',
    description: 'Products in your cart',
    icon: ShoppingCart,
  },
]

const recentOrders = [
  {
    id: 'WHO-2026-001',
    date: '10 Nov 2026',
    items: 12,
    amount: 3840,
    status: 'Delivered',
  },
  {
    id: 'WHO-2026-002',
    date: '07 Nov 2026',
    items: 8,
    amount: 2560,
    status: 'Processing',
  },
  {
    id: 'WHO-2026-003',
    date: '04 Nov 2026',
    items: 15,
    amount: 5250,
    status: 'Pending',
  },
]

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    maximumFractionDigits: 2,
  }).format(amount)

export default function WholesaleDashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      {/* <WholesaleNavBar /> */}

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* WELCOME SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
        >
          <div>
            <p className="mb-2 text-sm font-semibold text-[#fd7e02]">
              WHOLESALE ACCOUNT
            </p>

            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
              Welcome back, John!
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage your wholesale purchases, orders and business account.
            </p>
          </div>

          <Link
            to="/whole-sale-products"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#fd7e02] px-5 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white"
          >
            <ShoppingBag size={18} />
            Shop Wholesale
            <ArrowRight size={17} />
          </Link>
        </motion.section>

        {/* ACCOUNT STATUS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-col gap-4 rounded-2xl border border-green-200 bg-green-50 p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700">
              <ShieldCheck size={23} />
            </div>

            <div>
              <p className="font-bold text-green-800">
                Wholesale Account Approved
              </p>
              <p className="mt-1 text-xs text-green-700">
                Your business account is active and ready for wholesale purchases.
              </p>
            </div>
          </div>

          <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-700">
            Verified Account
          </span>
        </motion.div>

        {/* STATISTICS */}
        <section className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-black">Account Overview</h2>
            <span className="text-xs text-gray-400">
              Your account activity
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon

              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-gray-100 bg-white p-5 transition"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#fd7e02]">
                      <Icon size={21} />
                    </div>

                    <span className="text-xs font-semibold text-gray-400">
                      Overview
                    </span>
                  </div>

                  <h3 className="text-2xl font-black">{stat.value}</h3>

                  <p className="mt-1 text-sm font-semibold text-gray-700">
                    {stat.title}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {stat.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* WHOLESALE BENEFITS */}
        <section className="mb-10">
          <div className="relative overflow-hidden rounded-2xl bg-[#111111] p-6 text-white sm:p-8">
            <div className="relative z-10 max-w-2xl">
              <span className="mb-3 inline-flex rounded-full bg-[#fd7e02]/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#fd7e02]">
                Wholesale Advantage
              </span>

              <h2 className="text-2xl font-black sm:text-3xl">
                Better prices.
                <span className="text-[#fd7e02]"> Bigger opportunities.</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                Access exclusive wholesale prices, purchase in bulk and manage
                your business orders from one convenient platform.
              </p>

              <Link
                to="/whole-sale-products"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#fd7e02] px-5 py-3 text-sm font-bold text-black transition hover:bg-white"
              >
                Explore Wholesale Products
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full border-[35px] border-white/5" />
            <div className="pointer-events-none absolute -bottom-28 right-32 h-64 w-64 rounded-full bg-[#fd7e02]/10 blur-3xl" />
          </div>
        </section>

        {/* RECENT ORDERS */}
        <section className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black">Recent Orders</h2>
              <p className="mt-1 text-xs text-gray-400">
                Keep track of your latest wholesale purchases.
              </p>
            </div>

            <Link
              to="/whole-sale-orders"
              className="flex items-center gap-1 text-sm font-bold text-[#fd7e02] transition hover:text-black"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
                      Order ID
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
                      Date
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
                      Items
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
                      Total
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="transition hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm font-bold">
                        {order.id}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500">
                        {order.date}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500">
                        {order.items} products
                      </td>

                      <td className="px-6 py-4 text-sm font-bold">
                        {formatCurrency(order.amount)}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                            order.status === 'Delivered'
                              ? 'bg-green-50 text-green-700'
                              : order.status === 'Processing'
                                ? 'bg-blue-50 text-blue-700'
                                : 'bg-orange-50 text-orange-700'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHOLESALE PRODUCTS */}
        <section className="mb-10" id="products">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-lg font-black">
                Popular Wholesale Products
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Explore products available at exclusive wholesale prices.
              </p>
            </div>

            <Link
              to="/whole-sale-products"
              className="flex items-center gap-1 text-sm font-bold text-[#fd7e02] transition hover:text-black"
            >
              Browse All Products
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white"
              >
                <div className="group relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-[#fd7e02] px-3 py-1.5 text-[10px] font-black uppercase text-black">
                    Wholesale
                  </span>

                  <button
                    type="button"
                    aria-label={`View ${product.name}`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black opacity-0 shadow transition group-hover:opacity-100"
                  >
                    <Eye size={17} />
                  </button>
                </div>

                <div className="p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#fd7e02]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-sm font-bold">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-[10px] text-gray-400">
                        Wholesale Price
                      </p>
                      <p className="text-lg font-black">
                        {formatCurrency(product.wholesalePrice)}
                      </p>
                      <p className="mt-1 text-xs text-gray-400 line-through">
                        {formatCurrency(product.retailPrice)}
                      </p>
                    </div>

                    <span className="rounded-lg bg-orange-50 px-2 py-1 text-xs font-bold text-[#fd7e02]">
                      Save{' '}
                      {Math.round(
                        ((product.retailPrice - product.wholesalePrice) /
                          product.retailPrice) *
                          100,
                      )}
                      %
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
                    <span>Min. order</span>
                    <span className="font-bold text-black">
                      {product.minOrder} pairs
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <span>Available stock</span>
                    <span className="font-bold text-black">
                      {product.stock} pairs
                    </span>
                  </div>

                  <button
                    type="button"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#111111] py-3 text-xs font-bold text-white transition hover:bg-[#fd7e02] hover:text-black"
                  >
                    <ShoppingCart size={16} />
                    Add to Wholesale Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BUSINESS SUPPORT */}
        <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#fd7e02]">
              <Truck size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold">Reliable Delivery</h3>
              <p className="mt-1 text-xs text-gray-400">
                Track your wholesale orders.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#fd7e02]">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold">Secure Transactions</h3>
              <p className="mt-1 text-xs text-gray-400">
                Shop with confidence.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#fd7e02]">
              <Heart size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold">Business Support</h3>
              <p className="mt-1 text-xs text-gray-400">
                We're here to help your business.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-200 py-6">
          <div className="flex flex-col justify-between gap-3 text-xs text-gray-400 sm:flex-row">
            <p>
              © 2026 YourBrand Wholesale Portal. All rights reserved.
            </p>

            <div className="flex gap-4">
              <Link
                to="/whole-sale-support"
                className="transition hover:text-[#fd7e02]"
              >
                Help & Support
              </Link>

              <Link
                to="/delivery-returns"
                className="transition hover:text-[#fd7e02]"
              >
                Delivery & Returns
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}