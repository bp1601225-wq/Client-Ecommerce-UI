
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Package,
  Tags,
  ShoppingBag,
  ClipboardList,
  Users,
  UserRound,
  Boxes,
  CreditCard,
  ChartNoAxesCombined,
  Truck,
  Headset,
  Settings,
  LogOut,
  Store,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react'
import { useState } from 'react'

const adminMenuItems = [
  {
    title: 'OVERVIEW',
    items: [
      { name: 'Dashboard', path: '/admin-dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'STORE MANAGEMENT',
    items: [
      { name: 'Products', path: '/admin-products', icon: Package },
      { name: 'Categories', path: '/admin-categories', icon: Tags },
      { name: 'Orders', path: '/admin-orders', icon: ShoppingBag },
      { name: 'Inventory', path: '/admin-inventory', icon: Boxes },
    ],
  },
  {
    title: 'WHOLESALE MANAGEMENT',
    items: [
      {
        name: 'Applications',
        path: '/admin-wholesale-applications',
        icon: ClipboardList,
      },
      {
        name: 'Wholesale Customers',
        path: '/admin-wholesale-customers',
        icon: Users,
      },
    ],
  },
  {
    title: 'CUSTOMERS & FINANCE',
    items: [
      { name: 'Retail Customers', path: '/admin-customers', icon: UserRound },
      { name: 'Payments', path: '/admin-payments', icon: CreditCard },
      {
        name: 'Reports & Analytics',
        path: '/admin-reports',
        icon: ChartNoAxesCombined,
      },
    ],
  },
  {
    title: 'OPERATIONS',
    items: [
      {
        name: 'Delivery & Returns',
        path: '/admin-delivery-returns',
        icon: Truck,
      },
      { name: 'Support Messages', path: '/admin-support', icon: Headset },
      { name: 'Settings', path: '/admin-settings', icon: Settings },
    ],
  },

   {
    title: 'SYSTEM LOGS',
    items: [
  
      { name: 'Logs', path: '/admin-settings', icon: ShieldAlert },
    ],
  },
]

interface AdminSidebarProps {
  onLogout?: () => void
}

function AdminSidebar({ onLogout }: AdminSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`sticky top-0 flex h-screen shrink-0 flex-col border-r border-slate-200 bg-white transition-all duration-300 ${
        collapsed ? 'w-[82px]' : 'w-[270px]'
      }`}
    >
      {/* Brand */}
      <div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] text-white">
            <Store size={21} />
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-slate-900">
                Mach<span className="text-[#FD7E02]">Luxe</span>
              </h1>
              <p className="text-[10px] font-semibold uppercase tracking-[2px] text-slate-400">
                Admin Portal
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[88px] z-10 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-[#FD7E02] hover:text-[#FD7E02]"
      >
        {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
      </button>

      {/* Navigation */}
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-7">
        {adminMenuItems.map((group) => (
          <div key={group.title}>
            {!collapsed && (
              <p className="mb-3 px-3 text-[10px] font-bold tracking-[1.5px] text-slate-400">
                {group.title}
              </p>
            )}

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    title={collapsed ? item.name : undefined}
                    className={({ isActive }) =>
                      `group flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-50 text-[#1D4ED8]'
                          : 'text-slate-500 hover:bg-slate-50 hover:text-[#1D4ED8]'
                      } ${collapsed ? 'justify-center' : ''}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          size={19}
                          strokeWidth={isActive ? 2.4 : 1.9}
                          className={
                            isActive
                              ? 'text-[#1D4ED8]'
                              : 'text-slate-400 group-hover:text-[#1D4ED8]'
                          }
                        />

                        {!collapsed && <span>{item.name}</span>}

                        {!collapsed && isActive && (
                          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#FD7E02]" />
                        )}
                      </>
                    )}
                  </NavLink>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-slate-100 p-4">
        <div
          className={`mb-4 flex items-center gap-3 rounded-xl bg-slate-50 p-3 ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-[#1D4ED8]">
            A
          </div>

          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-slate-800">
                Administrator
              </p>
              <p className="text-[10px] text-slate-400">
                Store Management
              </p>
            </div>
          )}
        </div>

        <button
          onClick={onLogout}
          title={collapsed ? 'Logout' : undefined}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-rose-500 transition hover:bg-rose-50 ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut size={19} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}

export default AdminSidebar
