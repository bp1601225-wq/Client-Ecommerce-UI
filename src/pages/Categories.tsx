import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const categories = [
  {
    name: 'Handbags',
    description: 'Beautiful and stylish handbags for every occasion.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1000',
    number: '01',
  },
  {
    name: 'Ladies’ Shoes',
    description: 'Elegant, fashionable and comfortable shoes for every occasion.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1000',
    number: '02',
  },
]

function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#fd7e02]">
            Explore our collection
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black md:text-6xl">
            Style begins with
            <span className="block font-serif font-normal italic text-[#fd7e02]">
              the right choice.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-500 md:text-base">
            Discover handbags and ladies’ shoes selected to complement
            your style, wherever the day takes you.
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-7 md:grid-cols-2 md:gap-9">
          {categories.map((category, index) => (
            <motion.article
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="relative block overflow-hidden rounded-2xl bg-slate-100"
              >
                <div className="relative h-[360px] overflow-hidden sm:h-[460px]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full border border-white/40 bg-black/30 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-white backdrop-blur-md">
                    COLLECTION {category.number}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-8">
                    <div className="max-w-sm">
                      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {category.name}
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-white/80">
                        {category.description}
                      </p>
                    </div>

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:bg-[#fd7e02] group-hover:text-black">
                      <ArrowUpRight size={21} />
                    </span>
                  </div>
                </div>
              </Link>

              <div className="mt-4 flex items-center justify-between px-1">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Discover the collection
                </span>

                <Link
                  to={`/products?category=${encodeURIComponent(category.name)}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-[#fd7e02]"
                >
                  Shop now <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Bottom Collection Message */}
      <section className="border-t border-slate-200 bg-[#fafafa]">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#fd7e02]">
            A little something for you
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-4xl">
            Your style, your statement.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
            From beautiful handbags to elegant ladies’ shoes, find pieces
            that bring confidence and personality to every look.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-black px-7 py-3.5 text-sm font-semibold text-amber-500 transition-all duration-300 hover:bg-[#fd7e02] hover:text-black"
          >
            Explore all products
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  )
}

export default CategoriesPage