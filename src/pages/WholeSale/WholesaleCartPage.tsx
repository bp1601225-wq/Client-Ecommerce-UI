
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Minus,
  Plus,
  ShieldCheck,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  Package,
  Truck,
  LockKeyhole,
} from 'lucide-react'

const initialCartItems = [
  {
    id: 1,
    name: 'Executive Leather Sneakers',
    category: 'Footwear',
    qty: 2,
    price: 420,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
  },
  {
    id: 2,
    name: 'Premium Travel Backpack',
    category: 'Travel',
    qty: 1,
    price: 560,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
  },
  {
    id: 3,
    name: 'Urban Office Watch',
    category: 'Lifestyle',
    qty: 3,
    price: 610,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
  },
]

const currency = (value: number) =>
  new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    maximumFractionDigits: 2,
  }).format(value)

export default function WholesaleCartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0,
  )

  const shipping = subtotal > 0 ? 120 : 0
  const tax = 0
  const total = subtotal + shipping + tax

  const updateQuantity = (id: number, amount: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + amount) }
          : item,
      ),
    )
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#fafafa] text-[#171717]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#fd7e02]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#fd7e02]">
                MachLuxe Wholesale
              </p>
            </motion.div>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              Your Shopping <span className="text-[#fd7e02]">Cart.</span>
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Review your selected products before proceeding to checkout.
            </p>
          </motion.div>

          <Link
            to="/whole-sale-products"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-gray-500 transition hover:text-[#fd7e02]"
          >
            <ArrowLeft size={17} />
            Continue Shopping
          </Link>
        </motion.div>

        {cartItems.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="grid items-start gap-7 lg:grid-cols-[1fr_370px]">

            {/* CART ITEMS */}
            <section>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="mb-4 flex items-center justify-between border-b border-gray-200 pb-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}>
                  <h2 className="text-base font-black">
                    Cart Items
                  </h2>
                  <p className="mt-1 text-xs text-gray-400">
                    {cartItems.length} different products selected
                  </p>
                </motion.div>

                <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-[#fd7e02]">
                  {cartItems.reduce((sum, item) => sum + item.qty, 0)} units
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="space-y-4">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.article
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-5"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}
                        className="flex flex-col gap-4 sm:flex-row">

                        {/* PRODUCT IMAGE */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.35 }}
                          className="h-28 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-28">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </motion.div>

                        {/* PRODUCT INFORMATION */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.35 }}
                          className="min-w-0 flex-1">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.35 }}
                            className="flex items-start justify-between gap-3">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.35 }}>
                              <p className="text-[10px] font-bold uppercase tracking-wider text-[#fd7e02]">
                                {item.category}
                              </p>

                              <h3 className="mt-1 text-base font-bold text-[#171717]">
                                {item.name}
                              </h3>

                              <p className="mt-1 text-xs text-gray-400">
                                Wholesale unit price
                              </p>
                            </motion.div>

                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              aria-label={`Remove ${item.name}`}
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                            >
                              <Trash2 size={17} />
                            </button>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.35 }}
                            className="mt-5 flex flex-wrap items-end justify-between gap-4">

                            {/* QUANTITY CONTROL */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.35 }}>
                              <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                                Quantity
                              </p>

                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.35 }}
                                className="flex items-center rounded-lg border border-gray-200 p-1">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  disabled={item.qty <= 1}
                                  aria-label="Decrease quantity"
                                  className="flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition hover:bg-orange-50 hover:text-[#fd7e02] disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                  <Minus size={14} />
                                </button>

                                <span className="min-w-10 text-center text-sm font-black">
                                  {item.qty}
                                </span>

                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, 1)}
                                  aria-label="Increase quantity"
                                  className="flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition hover:bg-orange-50 hover:text-[#fd7e02]"
                                >
                                  <Plus size={14} />
                                </button>
                              </motion.div>
                            </motion.div>

                            {/* ITEM TOTAL */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.35 }}
                              className="text-right">
                              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                                Item Total
                              </p>

                              <p className="mt-1 text-lg font-black">
                                {currency(item.qty * item.price)}
                              </p>

                              <p className="text-xs text-gray-400">
                                {currency(item.price)} per unit
                              </p>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* SECURITY NOTE */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="mt-5 flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4">
                <ShieldCheck size={21} className="shrink-0 text-[#fd7e02]" />
                <p className="text-xs leading-5 text-gray-500">
                  Your wholesale orders are handled through our secure
                  business ordering process.
                </p>
              </motion.div>
            </section>

            {/* ORDER SUMMARY */}
            <aside className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white">

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="bg-[#111111] px-6 py-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
                    MachLuxe Wholesale
                  </p>

                  <h2 className="mt-1 text-xl font-black text-white">
                    Order Summary
                  </h2>

                  <p className="mt-1 text-xs text-gray-400">
                    Your wholesale purchase breakdown
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="p-6">

                  {/* SUMMARY BREAKDOWN */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-4 text-sm">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-center justify-between">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="font-bold">
                        {currency(subtotal)}
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-500">
                        <Truck size={15} />
                        Estimated Shipping
                      </span>
                      <span className="font-bold">
                        {currency(shipping)}
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-center justify-between">
                      <span className="text-gray-500">Tax</span>
                      <span className="font-bold">
                        {currency(tax)}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* TOTAL */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="mt-6 border-t border-dashed border-gray-200 pt-5">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-center justify-between">
                      <span className="text-sm font-bold">
                        Total Amount
                      </span>

                      <span className="text-2xl font-black text-[#171717]">
                        {currency(total)}
                      </span>
                    </motion.div>

                    <p className="mt-2 text-[10px] text-gray-400">
                      Final delivery charges and applicable taxes are subject
                      to confirmation.
                    </p>
                  </motion.div>

                  {/* CHECKOUT */}
                  <button
                    type="button"
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#fd7e02] px-5 py-4 text-sm font-black text-black transition hover:bg-[#111111] hover:text-white"
                  >
                    Proceed to Checkout
                    <ArrowRight size={17} />
                  </button>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="mt-4 flex items-center justify-center gap-2 text-[10px] font-semibold text-gray-400">
                    <LockKeyhole size={13} />
                    Secure wholesale checkout
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* ORDER SUPPORT */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="mt-4 rounded-2xl border border-gray-100 bg-white p-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#fd7e02]">
                    <Package size={19} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}>
                    <h3 className="text-sm font-bold">
                      Need order assistance?
                    </h3>
                    <Link
                      to="/whole-sale-support"
                      className="mt-1 inline-block text-xs font-bold text-[#fd7e02] hover:text-black"
                    >
                      Contact wholesale support
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </aside>
          </motion.div>
        ) : (
          /* EMPTY CART */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-gray-100 bg-white px-5 py-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-[#fd7e02]">
              <ShoppingBag size={32} />
            </motion.div>

            <h2 className="mt-6 text-xl font-black">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
              You haven't added any wholesale products yet. Explore our
              collection and find products for your business.
            </p>

            <Link
              to="/whole-sale-products"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#fd7e02] px-6 py-3.5 text-sm font-black text-black transition hover:bg-[#111111] hover:text-white"
            >
              Explore Wholesale Products
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
