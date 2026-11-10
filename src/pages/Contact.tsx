import { Mail, MapPin, Phone } from 'lucide-react'

const contactDetails = [
  { icon: MapPin, title: 'Visit us', detail: '24 Harbour Avenue, Accra, Ghana' },
  { icon: Phone, title: 'Call us', detail: '+233 20 123 4567' },
  { icon: Mail, title: 'Email us', detail: 'hello@mystore.com' },
]

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-600">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#14213d] md:text-5xl">
          We’d love to hear from you.
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5 rounded-3xl bg-[#14213d] p-8 text-white">
          {contactDetails.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-orange-300">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-sm text-slate-200">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Full name
              <input type="text" placeholder="Your name" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#fd7e02] focus:bg-white" />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Email address
              <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#fd7e02] focus:bg-white" />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium text-slate-700">
            Subject
            <input type="text" placeholder="How can we help?" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#fd7e02] focus:bg-white" />
          </label>

          <label className="mt-5 block text-sm font-medium text-slate-700">
            Message
            <textarea rows={5} placeholder="Tell us more..." className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#fd7e02] focus:bg-white" />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#fd7e02] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e66f00]"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
