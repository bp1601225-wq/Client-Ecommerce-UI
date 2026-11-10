
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-white">

      {/* Customer Navigation */}
      <NavBar />

      {/* Main Page Content */}
      <main className="min-h-[70vh]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default AppLayout;
