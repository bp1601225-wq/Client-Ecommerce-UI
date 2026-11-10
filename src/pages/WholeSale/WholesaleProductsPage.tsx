
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Search,
  ShoppingCart,
  Star,
  SlidersHorizontal,
  Package,
  Heart,
  Check,
} from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Executive Leather Sneakers',
    category: 'Footwear',
    price: 420,
    retail: 520,
    stock: 48,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700',
  },
  {
    id: 2,
    name: 'Classic Business Tote',
    category: 'Accessories',
    price: 290,
    retail: 360,
    stock: 35,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700',
  },
  {
    id: 3,
    name: 'Premium Travel Backpack',
    category: 'Travel',
    price: 560,
    retail: 700,
    stock: 20,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700',
  },
  {
    id: 4,
    name: 'Urban Office Watch',
    category: 'Lifestyle',
    price: 610,
    retail: 760,
    stock: 18,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700',
  },
]

const categories = [
  'All Products',
  'Footwear',
  'Accessories',
  'Travel',
  'Lifestyle',
]

const currency = (value: number) =>
  new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    maximumFractionDigits: 2,
  }).format(value)

export default function WholesaleProductsPage() {
  
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All Products')
  const [cartCount, setCartCount] = useState(0)
  const [addedProducts, setAddedProducts] = useState<number[]>([])

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      activeCategory === 'All Products' ||
      product.category === activeCategory

    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (id: number) => {
    if (addedProducts.includes(id)) return

    setCartCount((prev) => prev + 1)
    setAddedProducts((prev) => [...prev, id])
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#fafafa] text-[#171717]">

      {/* PAGE CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"
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
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#fd7e02]">
                MachLuxe Business
              </p>
            </motion.div>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              Wholesale <span className="text-[#fd7e02]">Collection.</span>
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Discover our carefully selected products at exclusive wholesale
              prices. Stock your business with confidence.
            </p>
          </motion.div>

          <Link
            to="/whole-sale-cart"
            className="inline-flex w-fit items-center gap-3 rounded-xl bg-[#111111] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#fd7e02] hover:text-black"
          >
            <ShoppingCart size={18} />
            View Cart
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#fd7e02] px-1.5 text-xs font-black text-black">
              {cartCount}
            </span>
          </Link>
        </motion.div>

        {/* PROMOTIONAL BANNER */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative mb-9 overflow-hidden rounded-2xl bg-[#111111] px-6 py-8 sm:px-10 sm:py-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="relative z-10 max-w-xl">
            <span className="inline-flex rounded-full border border-[#fd7e02]/30 bg-[#fd7e02]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#fd7e02]">
              Exclusive wholesale pricing
            </span>

            <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
              Your business deserves
              <span className="text-[#fd7e02]"> better prices.</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Buy in bulk, enjoy competitive pricing and grow your business
              with MachLuxe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-none absolute -right-12 -top-28 h-80 w-80 rounded-full border-[45px] border-white/[0.04]" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-none absolute -bottom-36 right-48 h-72 w-72 rounded-full bg-[#fd7e02]/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-none absolute bottom-7 right-10 hidden text-right sm:block">
            <p className="text-5xl font-black text-white/10">ML</p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.3em] text-[#fd7e02]/60">
              Wholesale Collection
            </p>
          </motion.div>
        </motion.section>

        {/* SEARCH AND FILTERS */}
        <section className="mb-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* SEARCH */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 transition focus-within:border-[#fd7e02] lg:max-w-md">
              <Search size={18} className="shrink-0 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search wholesale products..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </motion.div>

            {/* CATEGORY FILTER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2 overflow-x-auto pb-1">
              <SlidersHorizontal
                size={17}
                className="mr-1 shrink-0 text-gray-400"
              />

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-xs font-bold transition ${
                    activeCategory === category
                      ? 'bg-[#111111] text-[#fd7e02]'
                      : 'border border-gray-200 bg-white text-gray-500 hover:border-[#fd7e02] hover:text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* PRODUCT COUNT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="mb-5 flex items-center justify-between border-b border-gray-200 pb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}>
            <h2 className="text-sm font-black">
              Available Products
            </h2>
            <p className="mt-1 text-xs text-gray-400">
              Showing {filteredProducts.length} products
            </p>
          </motion.div>

          <p className="text-xs font-semibold text-gray-400">
            Wholesale Catalogue
          </p>
        </motion.div>

        {/* PRODUCT GRID */}
        {filteredProducts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => {
              const isAdded = addedProducts.includes(product.id)

              const discount = Math.round(
                ((product.retail - product.price) / product.retail) * 100,
              )

              return (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-black/[0.04]"
                >
                  {/* IMAGE */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="relative h-64 overflow-hidden bg-[#f2f2f2]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 rounded-md bg-[#111111] px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-[#fd7e02]">
                      Wholesale
                    </span>

                    <span className="absolute right-3 top-3 rounded-md bg-[#fd7e02] px-2.5 py-1.5 text-[10px] font-black text-black">
                      SAVE {discount}%
                    </span>

                    <button
                      type="button"
                      aria-label={`Save ${product.name}`}
                      className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:bg-[#fd7e02] hover:text-black"
                    >
                      <Heart size={17} />
                    </button>
                  </motion.div>

                  {/* PRODUCT DETAILS */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="p-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#fd7e02]">
                        {product.category}
                      </span>

                      <span className="flex items-center gap-1 text-xs font-bold text-gray-600">
                        <Star
                          size={12}
                          className="fill-[#fd7e02] text-[#fd7e02]"
                        />
                        {product.rating}
                      </span>
                    </motion.div>

                    <h3 className="min-h-10 text-sm font-bold leading-5 text-[#171717] transition group-hover:text-[#fd7e02]">
                      {product.name}
                    </h3>

                    {/* PRICE */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="mt-4 border-t border-gray-100 pt-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        Wholesale Price
                      </p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}
                        className="mt-1 flex items-end justify-between gap-2">
                        <p className="text-xl font-black text-[#171717]">
                          {currency(product.price)}
                        </p>

                        <p className="pb-1 text-xs text-gray-400 line-through">
                          {currency(product.retail)}
                        </p>
                      </motion.div>
                    </motion.div>

                    {/* STOCK */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="mt-4 flex items-center justify-between text-xs">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}
                        className="flex items-center gap-2 text-gray-500">
                        <Package size={14} />
                        Available stock
                      </motion.div>

                      <span className="font-bold text-[#171717]">
                        {product.stock} units
                      </span>
                    </motion.div>

                    {/* ADD TO CART */}
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product.id)}
                      disabled={isAdded}
                      className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition ${
                        isAdded
                          ? 'bg-orange-50 text-[#fd7e02]'
                          : 'bg-[#111111] text-white hover:bg-[#fd7e02] hover:text-black'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={16} />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={15} />
                          Add to Wholesale Cart
                        </>
                      )}
                    </button>
                  </motion.div>
                </motion.article>
              )
            })}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
            <Package size={35} className="mx-auto text-gray-300" />

            <h3 className="mt-4 text-base font-bold">
              No products found
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch('')
                setActiveCategory('All Products')
              }}
              className="mt-5 text-sm font-bold text-[#fd7e02] hover:text-black"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* BOTTOM CTA */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}>
            <h2 className="text-lg font-black">
              Ready to place your order?
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Review your selected products and proceed to checkout.
            </p>
          </motion.div>

          <Link
            to="/whole-sale-cart"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#fd7e02] px-6 py-3.5 text-sm font-black text-black transition hover:bg-[#111111] hover:text-white"
          >
            Continue to Cart
            <ArrowRight size={17} />
          </Link>
        </motion.section>
      </motion.div>
    </motion.div>
  )
}
