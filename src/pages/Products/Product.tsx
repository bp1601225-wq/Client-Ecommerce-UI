import { Button } from '@mui/material'
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { products } from './ProductsList'

function ProductPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === Number(productId))

  if (!product) {
    return (
      <div className="mx-auto max-w-5xl px-5 py-16 text-center md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#fd7e02]">
          Not found
        </p>

        <h1 className="mt-4 text-4xl font-bold text-black">
          This product is unavailable.
        </h1>

        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black transition hover:text-[#fd7e02]"
        >
          <ArrowLeft size={16} />
          Return to shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.id !== product.id
    )
    .slice(0, 3)

  return (
    <div className="bg-white text-black">

      {/* Product Details */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">

        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#fd7e02]"
        >
          <ArrowLeft size={16} />
          Back to products
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Product Image */}
          <div className="overflow-hidden rounded-2xl bg-[#fafafa]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full max-h-[650px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#fd7e02]">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-black md:text-5xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <Star
                size={15}
                className="fill-[#fd7e02] text-[#fd7e02]"
              />
              <span className="font-bold text-black">
                {product.rating}
              </span>
              <span>({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mt-5 flex items-end gap-3">
              <span className="text-3xl font-extrabold text-black">
                GH₵{product.price.toLocaleString()}
              </span>

              {product.oldPrice && (
                <span className="text-lg text-slate-400 line-through">
                  GH₵{product.oldPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-slate-500">
              {product.description}
            </p>

            {/* Benefits */}
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Check size={16} className="text-[#fd7e02]" />
                <span>Free delivery on orders above GH₵500</span>
              </div>

              <div className="flex items-center gap-3">
                <Truck size={16} className="text-[#fd7e02]" />
                <span>Fast and reliable shipping</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-[#fd7e02]" />
                <span>Secure payments and quality assurance</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="contained"
                startIcon={<ShoppingBag size={16} />}
                sx={{
                  backgroundColor: '#000',
                  color: '#fd7e02',
                  textTransform: 'none',
                  borderRadius: '9px',
                  px: 3,
                  py: 1.3,
                  fontWeight: 600,
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#fd7e02',
                    color: '#000',
                    boxShadow: 'none',
                  },
                }}
              >
                Add to cart
              </Button>

              <Button
                component={Link}
                to="/products"
                variant="outlined"
                sx={{
                  color: '#000',
                  borderColor: '#d1d5db',
                  textTransform: 'none',
                  borderRadius: '9px',
                  px: 3,
                  py: 1.3,
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#fd7e02',
                    backgroundColor: '#fff7ed',
                  },
                }}
              >
                Continue shopping
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-20">

          <div className="mb-8 border-t border-slate-200 pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
              More to explore
            </p>

            <h2 className="mt-2 text-2xl font-bold text-black">
              You may also like
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#fd7e02]/50"
              >
                <div className="overflow-hidden bg-[#fafafa]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-black">
                    {item.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-base font-extrabold text-black">
                      GH₵{item.price.toLocaleString()}
                    </span>

                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#fd7e02]">
                      View <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductPage