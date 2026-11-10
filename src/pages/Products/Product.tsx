import { Button } from '@mui/material'
import { ArrowLeft, Check, ShieldCheck, ShoppingBag, Star, Truck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { products } from './ProductsList'

function ProductPage() {

  const { productId } = useParams()
  const product = products.find((item) => item.id === Number(productId))
  

  if (!product) {
    return (
      <div className="mx-auto max-w-5xl px-5 py-16 text-center md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Not found</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#14213d]">This product is unavailable.</h1>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#14213d] hover:text-orange-600">
          <ArrowLeft size={16} /> Return to shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3)

  return (
    <div className="bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#fd7e02]">
          <ArrowLeft size={16} /> Back to products
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl bg-slate-100">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-600">
              {product.category}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#14213d] md:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <Star size={15} className="fill-orange-400 text-orange-400" />
              <span className="font-semibold text-[#14213d]">{product.rating}</span>
              <span>({product.reviews} reviews)</span>
            </div>

            <div className="mt-5 flex items-end gap-3">
              <span className="text-3xl font-bold text-[#14213d]">GH₵{product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <span className="text-lg text-slate-400 line-through">GH₵{product.oldPrice.toLocaleString()}</span>
              )}
            </div>

            <p className="mt-6 text-base leading-7 text-slate-600">{product.description}</p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Check size={16} className="text-emerald-600" />
                <span>Free delivery on orders above GH₵500</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck size={16} className="text-emerald-600" />
                <span>Fast and reliable shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>Secure payments and quality assurance</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="contained"
                startIcon={<ShoppingBag size={16} />}
                sx={{
                  backgroundColor: '#fd7e02',
                  color: '#fff',
                  textTransform: 'none',
                  borderRadius: '10px',
                  px: 3,
                  py: 1.3,
                  fontWeight: 600,
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: '#e66f00', boxShadow: 'none' },
                }}
              >
                Add to cart
              </Button>

              <Button
                component={Link}
                to="/products"
                variant="outlined"
                sx={{
                  color: '#14213d',
                  borderColor: '#14213d',
                  textTransform: 'none',
                  borderRadius: '10px',
                  px: 3,
                  py: 1.3,
                  fontWeight: 600,
                }}
              >
                Continue shopping
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-20">
        <div className="mb-8 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-semibold text-[#14213d]">You may also like</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1">
              <img src={item.image} alt={item.name} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{item.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#14213d]">{item.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-base font-bold text-[#14213d]">GH₵{item.price.toLocaleString()}</span>
                  <span className="text-sm text-orange-600">View</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductPage
