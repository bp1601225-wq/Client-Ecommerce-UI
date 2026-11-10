import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowUp,
  CreditCard,
  ShoppingBag,
  Users,
  UserRoundCheck,
  Clock3,
} from 'lucide-react'

const orders = [
  { id: 'ML-2048', customer: 'Olivia Bennett', type: 'Retail', date: 'Nov 10, 2026', status: 'Processing', total: '$428.00' },
  { id: 'ML-2047', customer: 'Northstar Boutique', type: 'Wholesale', date: 'Nov 10, 2026', status: 'Paid', total: '$2,840.00' },
  { id: 'ML-2046', customer: 'James Carter', type: 'Retail', date: 'Nov 09, 2026', status: 'Shipped', total: '$186.50' },
  { id: 'ML-2045', customer: 'The Edit Collective', type: 'Wholesale', date: 'Nov 09, 2026', status: 'Processing', total: '$1,960.00' },
]

const metrics = [
  { label: 'Total revenue', value: '$48,294', change: '+12.8%', icon: CreditCard, up: true },
  { label: 'Total orders', value: '1,284', change: '+8.2%', icon: ShoppingBag, up: true },
  { label: 'Retail customers', value: '3,642', change: '+6.4%', icon: Users, up: true },
  { label: 'Wholesale customers', value: '186', change: '+3.1%', icon: UserRoundCheck, up: true },
]

const bars = [40, 58, 46, 72, 54, 80, 63, 91, 67, 76, 57, 86]

export default function AdminDashboard() {
  return (
    <main className="space-y-5 p-4 sm:p-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-500">Tuesday, November 10, 2026</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">Here’s what’s happening with MachLuxe today.</p>
        </div>
        <select aria-label="Reporting period" className="w-fit rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-600">
          <option>Last 30 days</option><option>Last 7 days</option><option>This year</option>
        </select>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map(({ label, value, change, icon: Icon, up }, index) => (
          <motion.article key={label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{label}</span>
              <span className="rounded-lg bg-blue-50 p-2 text-blue-700"><Icon size={18} /></span>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <strong className="text-2xl font-semibold text-slate-900">{value}</strong>
              <span className={`flex items-center gap-1 text-xs font-medium ${up ? 'text-emerald-700' : 'text-rose-700'}`}><ArrowUpRight size={14} />{change}</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">vs. previous period</p>
          </motion.article>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.7fr_1fr]">
        <article className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
          <div className="flex items-start justify-between">
            <div><h2 className="font-semibold text-slate-900">Sales performance</h2><p className="mt-1 text-sm text-slate-500">Revenue over the last 12 months</p></div>
            <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"><ArrowUp size={13} /> 12.8%</span>
          </div>
          <div className="mt-6 flex h-48 items-end gap-2 border-b border-l border-slate-100 px-2 sm:gap-4">
            {bars.map((height, index) => <div key={index} className="group relative flex h-full flex-1 items-end"><div title={`$${(height * 120).toLocaleString()}`} style={{ height: `${height}%` }} className="w-full rounded-t bg-blue-600/80 transition-colors group-hover:bg-orange-500" /></div>)}
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-slate-400"><span>Dec</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Nov</span></div>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
          <h2 className="font-semibold text-slate-900">Needs attention</h2><p className="mt-1 text-sm text-slate-500">Items requiring your review</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3"><div className="flex items-center gap-3"><span className="rounded-lg bg-white p-2 text-orange-600"><Clock3 size={17} /></span><div><p className="text-sm font-medium text-slate-800">Wholesale applications</p><p className="text-xs text-slate-500">Awaiting approval</p></div></div><strong className="text-lg text-orange-700">8</strong></div>
            <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3"><div className="flex items-center gap-3"><span className="rounded-lg bg-white p-2 text-blue-700"><ShoppingBag size={17} /></span><div><p className="text-sm font-medium text-slate-800">Orders to fulfill</p><p className="text-xs text-slate-500">Ready for processing</p></div></div><strong className="text-lg text-blue-700">24</strong></div>
            <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3"><div className="flex items-center gap-3"><span className="rounded-lg bg-white p-2 text-slate-600"><ArrowDownRight size={17} /></span><div><p className="text-sm font-medium text-slate-800">Low-stock products</p><p className="text-xs text-slate-500">At or below threshold</p></div></div><strong className="text-lg text-slate-800">12</strong></div>
          </div>
        </article>
      </section>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4 sm:px-5"><div><h2 className="font-semibold text-slate-900">Recent orders</h2><p className="mt-0.5 text-sm text-slate-500">Latest activity across your store</p></div><a href="/admin-orders" className="text-sm font-medium text-blue-700 hover:text-orange-600">View all</a></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[650px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr>{['Order', 'Customer', 'Type', 'Date', 'Status', 'Total'].map(item => <th key={item} className="px-5 py-3 font-medium">{item}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{orders.map(order => <tr key={order.id} className="hover:bg-slate-50"><td className="px-5 py-3.5 font-medium text-blue-700">{order.id}</td><td className="px-5 py-3.5 text-slate-800">{order.customer}</td><td className="px-5 py-3.5 text-slate-600">{order.type}</td><td className="px-5 py-3.5 text-slate-500">{order.date}</td><td className="px-5 py-3.5"><span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">{order.status}</span></td><td className="px-5 py-3.5 font-medium text-slate-800">{order.total}</td></tr>)}</tbody></table></div>
      </section>
    </main>
  )
}
