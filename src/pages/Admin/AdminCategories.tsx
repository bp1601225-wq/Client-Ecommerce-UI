import { useState } from 'react'
import { FolderPlus, MoreHorizontal, Search } from 'lucide-react'

const initialCategories = [
  { name: 'Handbags', description: 'Everyday carry, evening bags, and statement pieces.', count: 28, status: 'Active', image: 'photo-1584917865442-de89df76afd3' },
  { name: 'Jewelry', description: 'Modern finishing touches in gold, silver, and more.', count: 36, status: 'Active', image: 'photo-1611652022419-a9419f74343d' },
  { name: 'Shoes', description: 'Refined footwear for work and weekend wardrobes.', count: 19, status: 'Active', image: 'photo-1543163521-1bf539c55dd2' },
  { name: 'Accessories', description: 'Scarves, belts, and thoughtful everyday essentials.', count: 14, status: 'Draft', image: 'photo-1601924994987-69e26d50dc26' },
]

export default function AdminCategories() {
  const [categories, setCategories] = useState(initialCategories)
  const [query, setQuery] = useState('')
  const shown = categories.filter(c => `${c.name} ${c.description}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <main className="space-y-5 p-4 sm:p-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h1 className="text-2xl font-semibold tracking-tight text-slate-900">Categories</h1><p className="mt-1 text-sm text-slate-500">Organize products so customers can find what they need.</p></div><button onClick={() => setCategories([{ name: 'New category', description: 'Add a category description to help customers browse.', count: 0, status: 'Draft', image: 'photo-1523275335684-37898b6baf30' }, ...categories])} className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-800"><FolderPlus size={17} /> Add category</button></header>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-slate-500">{categories.length} categories</p><label className="relative"><Search className="absolute left-3 top-2.5 text-slate-400" size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search categories" className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-600 sm:w-64" /></label></div>
      {shown.length ? <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{shown.map((category, i) => <article key={`${category.name}-${i}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-blue-200"><img src={`https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=700&q=80`} alt="" className="h-40 w-full object-cover" /><div className="p-4"><div className="flex items-start justify-between"><div><h2 className="font-semibold text-slate-900">{category.name}</h2><p className="mt-1 text-sm leading-5 text-slate-500">{category.description}</p></div><button aria-label={`More options for ${category.name}`} className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100"><MoreHorizontal size={19} /></button></div><div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3"><span className="text-sm text-slate-600">{category.count} products</span><span className={`rounded-full px-2.5 py-1 text-xs font-medium ${category.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>{category.status}</span></div><button onClick={() => setCategories(categories.map(c => c.name === category.name ? { ...c, status: c.status === 'Active' ? 'Draft' : 'Active' } : c))} className="mt-3 text-sm font-medium text-blue-700 hover:text-orange-600">{category.status === 'Active' ? 'Move to draft' : 'Publish category'}</button></div></article>)}</section> : <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center"><p className="font-medium text-slate-800">No categories found</p><p className="mt-1 text-sm text-slate-500">Adjust your search or create a category.</p></div>}
    </main>
  )
}
