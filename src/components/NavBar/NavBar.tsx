import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@mui/material'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NavItems } from './NavItems'
import Logo from "../../assets/logo.png"

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full bg-white"
    >
      {/* Announcement Bar */}
      <div className="bg-black px-4 py-2 text-center text-xs tracking-wide text-white sm:flex sm:justify-center sm:gap-2">
        <span className="font-semibold text-[#fd7e02]">
          SPECIAL OFFER
        </span>
        <span className="hidden text-white/40 sm:inline">|</span>
        <span className="text-white/90">
          Enjoy free delivery on orders above GH₵500
        </span>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5">
            <img src={Logo} alt="MachLuxe" width={29} />

            <div>
              <span className="block text-xl font-bold tracking-tight text-black">
                MachLuxe<span className="text-[#fd7e02]">.</span>
              </span>
              <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Shop with confidence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 md:flex">
            {NavItems.map((item) => {
              const active = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'text-[#fd7e02]'
                      : 'text-slate-600 hover:text-[#fd7e02]'
                  }`}
                >
                  {item.name}

                  {active && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#fd7e02]"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              component={Link}
              to="/products"
              variant="contained"
              endIcon={<ArrowUpRight size={16} />}
              sx={{
                textTransform: 'none',
                backgroundColor: '#000',
                color: '#fd7e02',
                borderRadius: '8px',
                px: 2.5,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#fd7e02',
                  color: '#000',
                  boxShadow: 'none',
                },
              }}
            >
              Explore Store
            </Button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 text-black transition hover:bg-orange-50 hover:text-[#fd7e02] md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-slate-200 bg-white md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {NavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    location.pathname === item.path
                      ? 'bg-orange-50 text-[#fd7e02]'
                      : 'text-slate-600 hover:bg-orange-50 hover:text-[#fd7e02]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <Button
                component={Link}
                to="/products"
                onClick={() => setMenuOpen(false)}
                fullWidth
                variant="contained"
                endIcon={<ArrowUpRight size={16} />}
                sx={{
                  mt: 2,
                  py: 1.2,
                  backgroundColor: '#000',
                  color: '#fd7e02',
                  textTransform: 'none',
                  borderRadius: '9px',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#fd7e02',
                    color: '#000',
                    boxShadow: 'none',
                  },
                }}
              >
                Explore Store
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default NavBar