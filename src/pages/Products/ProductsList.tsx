
import { motion } from 'framer-motion'
import { ArrowRight, Heart, ShoppingBag, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export interface Product {
  id: number
  name: string
  category: string
  price: number
  oldPrice?: number
  image: string
  rating: number
  reviews: number
  description: string
  inStock: boolean
  featured: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 850,
    oldPrice: 1100,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
    rating: 4.8,
    reviews: 124,
    description: 'Experience premium sound quality with comfortable wireless headphones.',
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Classic Luxury Wristwatch',
    category: 'Accessories',
    price: 450,
    oldPrice: 600,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
    rating: 4.6,
    reviews: 86,
    description: 'A timeless wristwatch designed for elegance and everyday use.',
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: 'Urban Casual Sneakers',
    category: 'Fashion',
    price: 650,
    oldPrice: 800,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
    rating: 4.7,
    reviews: 95,
    description: 'Comfortable and stylish sneakers for everyday activities.',
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: 'Modern Table Lamp',
    category: 'Home & Living',
    price: 320,
    oldPrice: 400,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600',
    rating: 4.5,
    reviews: 52,
    description: 'A modern decorative lamp that adds warmth to your living space.',
    inStock: true,
    featured: false,
  },
  {
    id: 5,
    name: 'Minimal Leather Tote',
    category: 'Accessories',
    price: 540,
    oldPrice: 690,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600',
    rating: 4.9,
    reviews: 76,
    description: 'A polished everyday tote for work, travel, and effortless styling.',
    inStock: true,
    featured: true,
  },
  {
    id: 6,
    name: 'Smart Home Speaker',
    category: 'Electronics',
    price: 390,
    oldPrice: 520,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600',
    rating: 4.8,
    reviews: 130,
    description: 'Quality sound, rich bass, and voice assistant support in one modern speaker.',
    inStock: true,
    featured: false,
  },
]

function ProductsListPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
        <div className="overflow-hidden rounded-3xl bg-[#f5f4f0] px-6 py-10 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                Complete collection
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#14213d] md:text-5xl">
                Shop the essentials.
              </h1>
            </div>

            <Button
              component={Link}
              to="/categories"
              variant="contained"
              endIcon={<ArrowRight size={16} />}
              sx={{
                backgroundColor: '#14213d',
                color: '#fff',
                textTransform: 'none',
                borderRadius: '8px',
                px: 2.8,
                py: 1.2,
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': { backgroundColor: '#fd7e02', boxShadow: 'none' },
              }}
            >
              Browse categories
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-20">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
          {['All', 'Electronics', 'Fashion', 'Accessories', 'Home & Living'].map((filter) => (
            <span
              key={filter}
              className={`rounded-full border px-3 py-2 ${
                filter === 'All'
                  ? 'border-[#fd7e02] bg-orange-50 text-[#fd7e02]'
                  : 'border-slate-200 bg-white text-slate-600'
              }`}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative">
                <img src={product.image} alt={product.name} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#14213d]">
                  {product.featured ? 'Featured' : 'New'}
                </span>
                <button
                  type="button"
                  aria-label={`Save ${product.name}`}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-sm transition hover:text-orange-600"
                >
                  <Heart size={16} />
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {product.category}
                  </span>
                  {product.inStock ? (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
                      In stock
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Sold out
                    </span>
                  )}
                </div>

                <Link to={`/products/${product.id}`} className="mt-3 block text-xl font-semibold text-[#14213d] hover:text-orange-600">
                  {product.name}
                </Link>

                <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <Star size={14} className="fill-orange-400 text-orange-400" />
                  <span>{product.rating}</span>
                  <span>({product.reviews} reviews)</span>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xl font-bold text-[#14213d]">GH₵{product.price.toLocaleString()}</span>
                    {product.oldPrice && (
                      <span className="ml-2 text-sm text-slate-400 line-through">
                        GH₵{product.oldPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <Button
                    component={Link}
                    to={`/products/${product.id}`}
                    variant="contained"
                    startIcon={<ShoppingBag size={15} />}
                    sx={{
                      backgroundColor: '#14213d',
                      color: '#fff',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      boxShadow: 'none',
                      '&:hover': { backgroundColor: '#fd7e02', boxShadow: 'none' },
                    }}
                  >
                    View
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsListPage

