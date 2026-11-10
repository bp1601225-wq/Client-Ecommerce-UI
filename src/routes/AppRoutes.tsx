
import { Routes, Route } from 'react-router-dom'

import AppLayout from '../components/layout/AppLayout'
import AboutPage from '../pages/About'
import CategoriesPage from '../pages/Categories'
import ContactPage from '../pages/Contact'
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound'

import ProductPage from '../pages/Products/Product'
import ProductsListPage from '../pages/Products/ProductsList'

import WholesaleAccess from '../pages/Products/WholeSales'
import WholesaleDashboard from '../pages/Products/ApprovedWholeSale'
import WholesaleApplication from '../pages/Products/WholeSaleApplicant'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* Main Website */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsListPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Wholesale */}
        <Route path="/whole-sale" element={<WholesaleAccess />} />
        <Route
          path="/whole-sale-application"
          element={<WholesaleApplication />}
        />
        <Route
          path="/whole-sale-dashboard"
          element={<WholesaleDashboard />}
        />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
