import { motion } from 'framer-motion'
import {
  HeartHandshake,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  {
    icon: ShoppingBag,
    title: 'Carefully chosen products',
    text: 'We look for products that are useful, well made and worth the price.',
  },
  {
    icon: ShieldCheck,
    title: 'A shopping experience you can trust',
    text: 'We want you to feel comfortable shopping with us, from browsing to delivery.',
  },
  {
    icon: Sparkles,
    title: 'Something for everyday life',
    text: 'Whether it is for your home, work or personal style, we make it easier to find what you need.',
  },
  {
    icon: HeartHandshake,
    title: 'People come first',
    text: 'We listen to our customers and do our best to make every experience a good one.',
  },
]

function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#fafafa]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
              A little about us
            </p>

            <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.15] tracking-tight text-black md:text-6xl">
              Good finds.
              <span className="block text-[#fd7e02]">
                Better shopping.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-slate-600">
              Welcome to MachLuxe. We created this store to make finding
              the things you need a little easier. From everyday essentials
              to products that add something special to your lifestyle,
              we bring a carefully selected range together in one place.
            </p>

            <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
              We believe shopping should be straightforward, enjoyable
              and worth your time. That is the experience we want every
              customer to have.
            </p>

            <Link
              to="/products"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-black px-6 py-3.5 text-sm font-semibold text-[#fd7e02] transition duration-300 hover:bg-[#fd7e02] hover:text-black"
            >
              Browse our collection
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200"
              alt="A beautifully arranged modern shopping space"
              className="h-[350px] w-full rounded-2xl object-cover md:h-[470px]"
            />

            <div className="absolute -bottom-5 left-5 rounded-xl border border-slate-100 bg-white px-6 py-5 md:left-10">
              <p className="text-xs text-slate-500">
                What matters to us
              </p>
              <p className="mt-1 text-lg font-bold text-black">
                Quality, value and care.
              </p>
              <div className="mt-2 h-1 w-12 rounded-full bg-[#fd7e02]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
              Why we are here
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl">
              Shopping should be simple. Finding something you love should be even better.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-8 text-slate-600">
            <p>
              We know how important it is to find products that meet
              your needs without making shopping complicated. That is
              why we bring different categories together, giving you
              a convenient place to explore and shop.
            </p>

            <p>
              Our aim is to offer products that combine good quality
              with fair value. We also want to make it easy to get the
              help you need whenever you shop with us.
            </p>

            <p>
              MachLuxe is built around the people who shop with us.
              Your experience matters, and we want you to leave with
              confidence in what you have purchased.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#fafafa] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
              What you can expect
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-4xl">
              The little things that make a difference.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              We want every part of your shopping experience to feel
              thoughtful, from the products you discover to the service
              you receive.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-xl border border-slate-200 bg-white p-7 transition duration-300 hover:border-[#fd7e02]/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fff3e6] text-[#fd7e02]">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-black px-7 py-16 text-center md:px-16">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
            Ready to explore?
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
            Your next favourite find could be here.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/65">
            Take a look around, explore our products and find something
            that is just right for you.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#fd7e02] px-7 py-3.5 text-sm font-bold text-black transition duration-300 hover:bg-white"
          >
            Explore products
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AboutPage