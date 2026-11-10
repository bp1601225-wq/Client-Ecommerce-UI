
import { Routes, Route } from 'react-router-dom'

// Layouts
import AppLayout from '../components/layout/AppLayout'

// Retail pages
import AboutPage from '../pages/About'
import CategoriesPage from '../pages/Categories'
import ContactPage from '../pages/Contact'
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound'
import ProductPage from '../pages/Products/Product'
import ProductsListPage from '../pages/Products/ProductsList'

// Wholesale pages
import WholesaleAccess from '../pages/WholeSale/WholeSales'
import WholesaleDashboard from '../pages/WholeSale/ApprovedWholeSale'
import WholesaleApplication from '../pages/WholeSale/WholeSaleApplicant'
import WholesaleProductsPage from '../pages/WholeSale/WholesaleProductsPage'
import WholesaleCartPage from '../pages/WholeSale/WholesaleCartPage'
import WholesaleOrdersPage from '../pages/WholeSale/WholesaleOrdersPage'
import WholesaleProfilePage from '../pages/WholeSale/WholesaleProfilePage'
import WholesaleSupportPage from '../pages/WholeSale/WholesaleSupportPage'
import WholesaleLayout from '../components/layout/WholeSaleLayout'

export function AppRoutes() {
  return (
    <Routes>

      {/* RETAIL WEBSITE */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsListPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* WHOLESALE ACCESS - STANDALONE PAGES */}
      <Route
        path="/whole-sale"
        element={<WholesaleAccess />}
      />

      <Route
        path="/whole-sale-application"
        element={<WholesaleApplication />}
      />

      {/* WHOLESALE PORTAL - WHOLESALE LAYOUT ONLY */}
      <Route element={<WholesaleLayout />}>
        <Route
          path="/whole-sale-dashboard"
          element={<WholesaleDashboard />}
        />

        <Route
          path="/whole-sale-products"
          element={<WholesaleProductsPage />}
        />

        <Route
          path="/whole-sale-cart"
          element={<WholesaleCartPage />}
        />

        <Route
          path="/whole-sale-orders"
          element={<WholesaleOrdersPage />}
        />

        <Route
          path="/whole-sale-profile"
          element={<WholesaleProfilePage />}
        />

        <Route
          path="/whole-sale-support"
          element={<WholesaleSupportPage />}
        />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}

export default AppRoutes
