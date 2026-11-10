import { Routes, Route } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import AboutPage from '../pages/About'
import CategoriesPage from '../pages/Categories'
import ContactPage from '../pages/Contact'
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound'
import ProductPage from '../pages/Products/Product'
import ProductsListPage from '../pages/Products/ProductsList'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsListPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}