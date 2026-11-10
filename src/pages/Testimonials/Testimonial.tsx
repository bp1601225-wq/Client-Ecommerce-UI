
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Customer Name",
    role: "Verified Customer",
    message:
      "I had a wonderful shopping experience. The entire process was smooth, and the quality exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Customer Name",
    role: "Verified Customer",
    message:
      "Great products and a very convenient shopping experience. I would definitely recommend this store.",
    rating: 5,
  },
  {
    name: "Customer Name",
    role: "Verified Customer",
    message:
      "Excellent service, quality products and a simple ordering process. Looking forward to shopping here again.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="bg-[#fafafa] px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#fd7e02]">
            Customer experiences
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-black md:text-4xl">
            What our customers say
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
            Your satisfaction means everything to us.
            Here's what customers have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-[#fd7e02]/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#fd7e02] text-[#fd7e02]"
                    />
                  ))}
                </div>

                <Quote size={30} className="text-[#fd7e02]/30" />
              </div>

              <p className="mt-7 min-h-[110px] text-sm leading-7 text-slate-600">
                "{item.message}"
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-bold text-[#fd7e02]">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-black">
                {item.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
