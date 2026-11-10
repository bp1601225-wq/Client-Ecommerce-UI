
import { useState } from 'react'
import {
  Bell,
  ChevronDown,
  Menu,
  Settings,
  LogOut,
  UserRound,
} from 'lucide-react'

interface AdminHeaderProps {
  onMenuClick?: () => void
  onLogout?: () => void
}

function AdminHeader({ onMenuClick, onLogout }: AdminHeaderProps) {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 flex h-[64px] w-full shrink-0 items-center justify-between border-b border-slate-200 bg-white px-3 sm:px-4 lg:px-5">

      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div>
          <h2 className="text-sm font-bold text-black sm:text-base">
            Administration
          </h2>
          <p className="hidden text-[11px] text-slate-500 sm:block">
            Manage your MachLuxe store
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">

        {/* Notification */}
        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-amber-50 hover:text-[#FD7E02]">
          <Bell size={19} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-[#FD7E02]" />
        </button>

        <div className="hidden h-7 w-px bg-slate-200 sm:block" />

        {/* Admin Profile */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 rounded-lg p-1 transition hover:bg-slate-50 sm:gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-bold text-[#FD7E02]">
              A
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-xs font-bold text-black">
                Administrator
              </p>
              <p className="text-[10px] text-slate-500">
                Super Admin
              </p>
            </div>

            <ChevronDown
              size={15}
              className={`hidden text-slate-400 transition sm:block ${
                profileOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Profile Dropdown */}
          {profileOpen && (
            <div className="absolute right-0 top-12 z-50 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">

              <div className="border-b border-slate-100 bg-slate-50 px-3 py-3">
                <p className="text-xs font-bold text-black">
                  Administrator
                </p>
                <p className="text-[11px] text-slate-500">
                  MachLuxe Management
                </p>
              </div>

              <div className="p-1.5">
                <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs text-slate-600 transition hover:bg-amber-50 hover:text-[#FD7E02]">
                  <UserRound size={16} />
                  My Profile
                </button>

                <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs text-slate-600 transition hover:bg-amber-50 hover:text-[#FD7E02]">
                  <Settings size={16} />
                  Account Settings
                </button>

                <div className="my-1 border-t border-slate-100" />

                <button
                  onClick={onLogout}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs font-semibold text-red-500 transition hover:bg-red-50"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
