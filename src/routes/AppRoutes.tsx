
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
import AdminLayout from '../components/layout/AdminLayout'
import AdminDashboard from '../pages/Admin/AdminDashboard'
import AdminProducts from '../pages/Admin/AdminProducts'
import AdminWholesaleApplications from '../pages/Admin/AdminWholesaleApplications'
import AdminCategories from '../pages/Admin/AdminCategories'
import AdminOrders from '../pages/Admin/AdminOrders'
import AdminWholesaleCustomers from '../pages/Admin/AdminWholesaleCustomers'
import AdminCustomers from '../pages/Admin/AdminCustomers'
import AdminInventory from '../pages/Admin/AdminInventory'
import AdminPayments from '../pages/Admin/AdminPayments'
import AdminReports from '../pages/Admin/AdminReports'
import AdminDeliveryReturns from '../pages/Admin/AdminDeliveryReturns'
import AdminSupport from '../pages/Admin/AdminSupport'
import AdminSettings from '../pages/Admin/AdminSettings'
import AdminLogin from '../pages/Admin/Login'
import CreateUser from '../pages/Admin/AdminCreateUser'
import Logs from '../pages/Login/LoginLogs'
import WholesaleApplicationSuccess from '../pages/WholeSale/ApplicationSuccess'
import WholesaleAccessResult from '../pages/WholeSale/ReviewFromAdmins'

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


      {/* ADMIN PORTAL - ADMIN LAYOUT ONLY */}

<Route path='/login' element={<AdminLogin />} />
 
    
<Route element={<AdminLayout />}>


  <Route path="/admin-dashboard" element={<AdminDashboard />} />
  <Route path="/admin-products" element={<AdminProducts />} />
  <Route path="/admin-categories" element={<AdminCategories />} />
  <Route path="/admin-orders" element={<AdminOrders />} />

  <Route
    path="/admin-wholesale-applications"
    element={<AdminInventory />}
  />

  
  <Route
    path="/admin-inventories"
    element={<AdminInventory />}
  />

  <Route
    path="/admin-wholesale-customers"
    element={<AdminWholesaleCustomers />}
  />

  <Route path="/admin-customers" element={<AdminCustomers />} />
  <Route path="/admin-inventory" element={<AdminInventory/>} />
  <Route path="/admin-payments" element={<AdminPayments />} />
  <Route path="/admin-reports" element={<AdminReports />} />
  <Route path="/admin-delivery-returns" element={<AdminDeliveryReturns />} />
  <Route path="/admin-support" element={<AdminSupport />} />
  <Route path="/admin-settings" element={<AdminSettings />} />
  <Route path="/system-logs" element={< Logs/>} />
  <Route path="/admin-users" element={<CreateUser />} />



</Route>







      {/* 404 */}
      <Route path="*" element={<NotFound />} />



<Route
  path="/whole-sale-application-success"
  element={<WholesaleApplicationSuccess />}
/>

<Route
  path="/whole-sale-access-result"
  element={<WholesaleAccessResult />}
/>

    </Routes>
  )
}

export default AppRoutes
