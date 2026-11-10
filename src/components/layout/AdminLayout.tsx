
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../pages/Admin/Sidebar'
import AdminHeader from '../../pages/Admin/Header'

function AdminLayout() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white">

      {/* Admin Header - Full Width */}
      <AdminHeader />

      {/* Sidebar and Main Content */}
      <div className="flex min-h-0 flex-1 overflow-hidden">

        {/* Admin Sidebar */}
        <AdminSidebar />

        {/* Main Content Area */}
        <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">

          {/* Admin Page Content */}
          <main className="min-h-[70vh] flex-1 bg-[#F8FAFC]">
            <Outlet />
          </main>

          {/* Admin Footer */}
          {/* <footer className="border-t border-[#E2E8F0] bg-white py-6">
            <div className="mx-auto max-w-7xl px-4">
              <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="text-sm text-slate-500">
                  © {new Date().getFullYear()} MachLuxe Admin. All rights reserved.
                </p>

                <div className="flex items-center gap-5 text-sm text-slate-500">
                  <span>Administration Portal</span>
                  <span className="text-[#FD7E02]">Secure Access</span>
                </div>
              </div>
            </div>
          </footer> */}

        </div>
      </div>
    </div>
  )
}

export default AdminLayout
