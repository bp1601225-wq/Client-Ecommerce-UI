
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingCart, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { name: 'Dashboard', path: '/whole-sale-dashboard' },
  { name: 'Shop Wholesale', path: '/whole-sale-products' },
  { name: 'My Cart', path: '/whole-sale-cart' },
  { name: 'My Orders', path: '/whole-sale-orders' },
  { name: 'Business Profile', path: '/whole-sale-profile' },
  { name: 'Support', path: '/whole-sale-support' },
]

export default function WholesaleNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-[76px] items-center justify-between gap-5">

          {/* BRAND */}
          <Link
            to="/whole-sale-dashboard"
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fd7e02] text-lg font-black text-black">
              M
            </div>

            <div>
              <h1 className="text-[17px] font-black tracking-tight text-white">
                MachLuxe
                <span className="ml-1.5 font-semibold text-[#fd7e02]">
                  Wholesale
                </span>
              </h1>

              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                Business Portal
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-1 lg:flex">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#fd7e02]/10 text-[#fd7e02]'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#fd7e02]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT SECTION */}
          <div className="flex shrink-0 items-center gap-3">

            {/* CART */}
            <Link
              to="/whole-sale-cart"
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition hover:border-[#fd7e02]/40 hover:bg-[#fd7e02]/10 hover:text-[#fd7e02]"
              aria-label="Wholesale cart"
            >
              <ShoppingCart size={19} />

              <span className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#fd7e02] px-1 text-[9px] font-black text-black">
                6
              </span>
            </Link>

            {/* PROFILE */}
            <button
              type="button"
              className="hidden items-center gap-2.5 rounded-xl border border-white/10 px-2.5 py-2 transition hover:border-[#fd7e02]/40 hover:bg-white/5 sm:flex"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fd7e02] text-xs font-black text-black">
                JD
              </div>

              <div className="text-left">
                <p className="text-xs font-bold text-white">
                  John Doe
                </p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                  Wholesale Account
                </p>
              </div>

              <ChevronDown size={14} className="ml-1 text-gray-500" />
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-[#fd7e02]/40 hover:text-[#fd7e02] lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileOpen && (
          <nav className="border-t border-white/10 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-[#fd7e02]/10 text-[#fd7e02]'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 border-t border-white/10 px-4 pt-4 sm:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fd7e02] text-xs font-black text-black">
                JD
              </div>

              <div>
                <p className="text-sm font-bold text-white">John Doe</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-500">
                  Wholesale Account
                </p>
              </div>
            </div>
          </nav>
        )}

      </div>
    </header>
  )
}
