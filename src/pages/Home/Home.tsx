
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import Testimonials from "../Testimonials/Testimonial";

const categories = [
  {
    name: "Electronics",
    count: "Explore collection",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800",
  },
  {
    name: "Fashion",
    count: "Explore collection",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
  },
  {
    name: "Home & Living",
    count: "Explore collection",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
  },
  {
    name: "Accessories",
    count: "Explore collection",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
];

const products = [
  {
    id: 1,
    name: "Studio Wireless Headphones",
    category: "Electronics",
    price: 850,
    oldPrice: 1100,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
    label: "BESTSELLER",
  },
  {
    id: 2,
    name: "Classic Minimal Watch",
    category: "Accessories",
    price: 450,
    oldPrice: 600,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
    label: "POPULAR",
  },
  {
    id: 3,
    name: "Everyday Sneakers",
    category: "Fashion",
    price: 650,
    oldPrice: 800,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
    label: "TRENDING",
  },
  {
    id: 4,
    name: "Modern Table Lamp",
    category: "Home & Living",
    price: 320,
    oldPrice: 400,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700",
    label: "NEW ARRIVAL",
  },
];

const benefits = [
  { icon: Truck, title: "Convenient Delivery", description: "Delivery options that work for you" },
  { icon: ShieldCheck, title: "Secure Shopping", description: "Shop with confidence" },
  { icon: ShoppingBag, title: "Quality Selection", description: "Products worth choosing" },
  { icon: Headphones, title: "Customer Support", description: "We're here when you need us" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const buttonStyle = {
  backgroundColor: "#000",
  color: "#fd7e02",
  textTransform: "none" as const,
  fontWeight: 700,
  borderRadius: "8px",
  px: 3.5,
  py: 1.5,
  boxShadow: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#fd7e02",
    color: "#000",
    boxShadow: "none",
  },
};

function Home() {
  return (
    <div className="overflow-hidden bg-white text-[#171717]">

      {/* HERO */}
      <section className="mx-auto max-w-[1440px] px-5 pt-8 md:px-10 md:pt-12">
        <div className="relative grid min-h-[520px] overflow-hidden rounded-2xl bg-[#fafafa] md:grid-cols-2 md:items-center">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 px-7 py-14 md:px-14 md:py-20"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
              A better shopping experience
            </span>

            <h1 className="mt-7 max-w-xl text-5xl font-extrabold leading-[1.12] tracking-tight text-black md:text-6xl lg:text-7xl">
              Find what you love.
              <span className="block font-light text-[#fd7e02]">
                Love what you find.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-500 md:text-base">
              Discover thoughtfully selected products for everyday living.
              Quality, style and convenience come together in one place.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button
                component={Link}
                to="/products"
                variant="contained"
                endIcon={<ArrowUpRight size={17} />}
                sx={buttonStyle}
              >
                Explore Collection
              </Button>

              <Link
                to="/categories"
                className="text-sm font-bold text-black transition hover:text-[#fd7e02]"
              >
                Browse categories
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-7">
              <div>
                <p className="text-lg font-bold text-black">Quality</p>
                <p className="mt-1 text-xs text-slate-500">Everyday essentials</p>
              </div>

              <div className="h-9 w-px bg-slate-200" />

              <div>
                <p className="text-lg font-bold text-black">Value</p>
                <p className="mt-1 text-xs text-slate-500">Shopping made better</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-[350px] md:h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200"
              alt="A curated shopping collection"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-[#fafafa]/10 md:to-transparent" />

            <div className="absolute bottom-7 right-7 rounded-xl border border-white/30 bg-white/95 px-5 py-4 backdrop-blur">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#fd7e02]">
                Discover more
              </p>
              <p className="mt-1 text-sm font-bold text-black">
                Your next favourite find.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-[1440px] px-5 py-12 md:px-10">
        <div className="grid grid-cols-2 gap-7 border-b border-slate-200 pb-12 md:grid-cols-4 md:gap-5">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-3"
            >
              <item.icon size={22} className="mt-1 shrink-0 text-[#fd7e02]" />
              <div>
                <h3 className="text-sm font-bold text-black">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 md:py-16">
        <div className="mb-9 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
              Explore the store
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
              Shop by category
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Find something perfect for every part of your life.
            </p>
          </div>

          <Link
            to="/categories"
            className="hidden items-center gap-2 text-sm font-bold text-black transition hover:text-[#fd7e02] sm:flex"
          >
            All categories <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to="/categories" className="group block">
                <div className="relative overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-105 md:h-72"
                  />

                  <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/30" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-base font-bold text-white">
                      {category.name}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-[#fd7e02] group-hover:text-black">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-xs font-medium text-slate-500">
                  {category.count}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-[#fafafa] py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
                Curated for you
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
                Featured products
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                A closer look at some customer favourites.
              </p>
            </div>

            <Link
              to="/products"
              className="hidden items-center gap-2 text-sm font-bold text-black transition hover:text-[#fd7e02] sm:flex"
            >
              View all products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover transition duration-700 group-hover:scale-105 md:h-72"
                  />

                  <span className="absolute left-3 top-3 rounded-md bg-black px-2.5 py-1.5 text-[9px] font-bold tracking-wider text-[#fd7e02]">
                    {product.label}
                  </span>

                  <button
                    type="button"
                    aria-label={`Add ${product.name} to favourites`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#fd7e02]"
                  >
                    <Heart size={16} />
                  </button>

                  <Link
                    to="/products"
                    className="absolute bottom-3 left-3 right-3 translate-y-3 rounded-lg bg-black/95 py-3 text-center text-xs font-bold text-[#fd7e02] opacity-0 transition duration-300 hover:bg-[#fd7e02] hover:text-black group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    View product
                  </Link>
                </div>

                <div className="pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#fd7e02]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-sm font-bold text-black">
                    {product.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-1">
                    <Star size={12} className="fill-[#fd7e02] text-[#fd7e02]" />
                    <span className="text-xs text-slate-500">
                      {product.rating}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-extrabold text-black">
                      GH₵{product.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      GH₵{product.oldPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-9 text-center sm:hidden">
            <Button
              component={Link}
              to="/products"
              variant="contained"
              sx={buttonStyle}
            >
              View all products
            </Button>
          </div>
        </div>
      </section>


{/* TESTIMONIALS */}

<Testimonials />

      {/* PROMOTIONAL SECTION */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid overflow-hidden rounded-2xl bg-black md:grid-cols-2">
          <div className="flex flex-col justify-center px-7 py-12 md:px-14 md:py-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
              Make every purchase count
            </p>

            <h2 className="mt-5 max-w-lg text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Good choices begin with great finds.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Discover a collection of products selected to make
              everyday shopping simpler and more enjoyable.
            </p>

            <div className="mt-8">
              <Button
                component={Link}
                to="/products"
                variant="contained"
                endIcon={<ArrowUpRight size={17} />}
                sx={buttonStyle}
              >
                Discover more
              </Button>
            </div>
          </div>

          <div className="min-h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1000"
              alt="Shopping collection"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
