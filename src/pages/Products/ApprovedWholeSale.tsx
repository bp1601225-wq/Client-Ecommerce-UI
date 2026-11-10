
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ShoppingBag,
  Package,
  Search,
  ShoppingCart,
  ArrowRight,
  Store,
  Truck,
  ShieldCheck,
  Heart,
  Eye,
} from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Classic White Sneakers',
    category: 'Men Shoes',
    price: 'GH₵180',
    wholesale: 'GH₵140',
    moq: '5 pairs',
    stock: '45 available',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
  },
  {
    id: 2,
    name: 'Premium Leather Shoes',
    category: 'Formal Shoes',
    price: 'GH₵250',
    wholesale: 'GH₵195',
    moq: '5 pairs',
    stock: '32 available',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600',
  },
  {
    id: 3,
    name: 'Everyday Running Shoes',
    category: 'Sports Shoes',
    price: 'GH₵220',
    wholesale: 'GH₵165',
    moq: '5 pairs',
    stock: '28 available',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600',
  },
  {
    id: 4,
    name: 'Casual Fashion Sneakers',
    category: 'Women Shoes',
    price: 'GH₵190',
    wholesale: 'GH₵145',
    moq: '5 pairs',
    stock: '50 available',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600',
  },
]

export default function WholesaleDashboard() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* Header */}
      <header className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="bg-[#fd7e02] p-2 rounded-lg text-black">
              <Store size={22} />
            </div>
            <span className="font-bold text-xl tracking-wide">
              WHOLESALE
            </span>
          </div>

      

          <div className="flex items-center gap-5">
            <ShoppingCart size={22} />
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#fd7e02] text-black flex items-center justify-center font-bold">
                JD
              </div>
              <div>
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-gray-400">Wholesale Partner</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 py-10">

        {/* Welcome Banner */}
        <section className="bg-[#111111] text-white rounded-2xl p-8 md:p-12 mb-10 relative overflow-hidden">

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-2 text-xs font-bold mb-6">
              <CheckCircle2 size={15} />
              VERIFIED WHOLESALE ACCOUNT
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Welcome back, John.
              <span className="text-[#fd7e02] block">
                Let's grow your business.
              </span>
            </h1>

            <p className="text-gray-300 leading-7 mb-7">
              Explore our latest collections and enjoy exclusive
              wholesale prices reserved for our business partners.
            </p>

            <a
              href="#products"
              className="inline-flex items-center gap-3 bg-[#fd7e02] text-black font-bold px-6 py-3 rounded-xl hover:bg-white transition"
            >
              Explore Products
              <ArrowRight size={18} />
            </a>
          </div>

          <Package
            size={230}
            className="absolute -right-8 -bottom-12 text-white/[0.04] hidden md:block"
          />
        </section>

        {/* Overview */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">

          {[
            { label: 'Account Status', value: 'Approved', icon: ShieldCheck },
            { label: 'Total Orders', value: '24 Orders', icon: ShoppingBag },
            { label: 'Pending Orders', value: '03 Orders', icon: Package },
            { label: 'Completed Orders', value: '21 Orders', icon: Truck },
          ].map((item) => {
            const Icon = item.icon

            return (
              <div key={item.label} className="bg-white border border-gray-100 rounded-xl p-6">
                <div className="w-11 h-11 rounded-lg bg-[#FFF1E4] flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#fd7e02]" />
                </div>
                <p className="text-gray-400 text-sm mb-2">{item.label}</p>
                <h3 className="font-bold text-xl text-[#111111]">
                  {item.value}
                </h3>
              </div>
            )
          })}
        </section>

        {/* Wholesale Pricing */}
        <section className="bg-[#FFF5EB] border border-orange-100 rounded-xl p-7 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-[#fd7e02] text-xs font-bold uppercase tracking-widest mb-2">
                Exclusive Member Benefits
              </p>
              <h2 className="font-bold text-2xl text-[#111111] mb-2">
                Your Wholesale Pricing
              </h2>
              <p className="text-sm text-gray-600">
                The more you purchase, the more you save.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { quantity: '5–9', discount: '10% OFF' },
                { quantity: '10–24', discount: '18% OFF' },
                { quantity: '25+', discount: '25% OFF' },
              ].map((tier) => (
                <div key={tier.quantity} className="bg-white rounded-xl p-4 text-center border border-orange-100">
                  <p className="text-xs text-gray-500 mb-2">{tier.quantity} Pairs</p>
                  <p className="text-[#fd7e02] font-bold text-sm">{tier.discount}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-7">
            <div>
              <p className="text-[#fd7e02] text-xs font-bold uppercase tracking-widest mb-2">
                Wholesale Catalogue
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111111]">
                Explore Our Products
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Quality products at exclusive business prices.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                placeholder="Search products..."
                className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#fd7e02]"
              />
            </div>
          </div>

          {/* Categories */}
          <div id="categories" className="flex flex-wrap gap-3 mb-7">
            {['All Products', 'Men Shoes', 'Women Shoes', 'Sports Shoes', 'Formal Shoes'].map((category, index) => (
              <button
                key={category}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                  index === 0
                    ? 'bg-[#111111] text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#fd7e02]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden group"
              >
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-3 left-3 bg-[#fd7e02] text-black text-xs font-bold px-3 py-2 rounded-full">
                    Wholesale
                  </span>

                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full text-gray-600">
                    <Heart size={17} />
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">
                    {product.category}
                  </p>

                  <h3 className="font-bold text-[#111111] mb-4">
                    {product.name}
                  </h3>

                  <div className="bg-[#FFF7EF] rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-500">
                      Your wholesale price
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-2xl font-bold text-[#fd7e02]">
                        {product.wholesale}
                      </p>
                      <p className="text-xs text-gray-400 line-through">
                        {product.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs text-gray-500 mb-5">
                    <span>MOQ: {product.moq}</span>
                    <span>{product.stock}</span>
                  </div>

                  <button className="w-full bg-[#111111] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#fd7e02] hover:text-black transition flex items-center justify-center gap-2">
                    <Eye size={16} />
                    View Product
                  </button>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* Business Support */}
        <section className="mt-14 bg-white border border-gray-100 rounded-xl p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#fd7e02] text-xs font-bold uppercase tracking-widest mb-2">
              We're Here to Help
            </p>
            <h2 className="text-xl font-bold text-[#111111] mb-2">
              Need assistance with a bulk order?
            </h2>
            <p className="text-sm text-gray-500">
              Our wholesale team is ready to help with your business needs.
            </p>
          </div>

          <a
            href="/contact"
            className="bg-[#111111] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#fd7e02] hover:text-black transition flex items-center gap-3"
          >
            Contact Wholesale Team
            <ArrowRight size={18} />
          </a>
        </section>

      </main>

      <footer className="bg-[#111111] text-gray-400 text-center py-7 text-sm mt-12">
        Wholesale Business Portal · Exclusive Access for Approved Partners
      </footer>
    </div>
  )
}
