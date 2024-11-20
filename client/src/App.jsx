import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/ui/auth/layout"
import AuthLogin from "./pages/auth/auth/login"
import AuthRegister from "./pages/auth/auth/register"
import AdminLayout from "./components/ui/admin-view/layout"
import AdminDashboard from "./pages/auth/admin-view/dashboard"
import AdminOrders from "./pages/auth/admin-view/orders"
import AdminProducts from "./pages/auth/admin-view/products"
import AdminFeatures from "./pages/auth/admin-view/features"

function App() {
   

  return (
     <div className="flex flex-col overflow-hidden bg-white">
        {/* common components */}
         <h1>header</h1>
        
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
   
          <Route path="login" element={<AuthLogin />} />
          
          <Route path="register" element={<AuthRegister />} /> 
         </Route>
         
         <Route path="/admin" element={ <AdminLayout />} >
           <Route path="dashboard" element={<AdminDashboard/>} />
           <Route path="orders" element={<AdminOrders />} />
           <Route path="products" element={<AdminProducts />} />
           <Route path="features" element={<AdminFeatures />} />
          </Route>


        </Routes>

     </div>
  )
}
 
export default App
