
import { Outlet } from 'react-router-dom'
import WholesaleNavBar from '../NavBar/WholesaleNavBar'

function WholesaleLayout() {
  return (
    <div className="min-h-screen bg-white">

      {/* Wholesale Navigation */}
      <WholesaleNavBar />

      {/* Wholesale Page Content */}
      <main className="min-h-[70vh] bg-white">
        <Outlet />
      </main>

      {/* Wholesale Footer */}
      <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} MachLuxe Wholesale. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-sm text-slate-500">
              <a href="/delivery-returns" className="transition hover:text-[#FD7E02]">
                Delivery & Returns
              </a>

              <a href="/whole-sale-support" className="transition hover:text-[#FD7E02]">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default WholesaleLayout
