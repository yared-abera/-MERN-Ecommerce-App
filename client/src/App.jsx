import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminOrders from "./pages/admin-view/orders"
import AdminProducts from "./pages/admin-view/products"
import AdminFeatures from "./pages/admin-view/features"
import ShoppingLayout from "./components/shopping-view/layout"
import NotFound from "./pages/not-found"
import ShoppingAccount from "./pages/shopping-view/account"
import ShoppingListing from "./pages/shopping-view/listing"
import ShoppingHome from "./pages/shopping-view/home"
import ShoppingOrders from "./pages/shopping-view/orders"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import CheckAuth from "./components/common/check-auth"
import UnAuthPage from "./pages/unauth-page"
import Header from "./components/common/header"
import Footer from "./components/common/footer"
import Home from "./pages/home-view"
import { useDispatch, useSelector } from "react-redux"
 
import { checkAuth } from "./store/auth-slice"
import { useEffect } from "react";
import { Skeleton } from "./components/ui/skeleton";
 

function App() {
    
    const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(
       ()=>{
       
        dispatch(checkAuth());
      }
      , [dispatch]
    );

    if (isLoading) return <Skeleton className="w-screen h-screen bg-gray-700 flex items-center justify-center" />;

  console.log(isLoading, user);
   
  return (
     <div className="flex flex-col  bg-white">
        {/* common components */}
             { (user)&&(user.role==="admin")?null:<Header/> } 
            
        <Routes>
          <Route path={"/"} element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user} isGuest={!isAuthenticated}>
            <Home />
            </CheckAuth>
         } /> 
          <Route path={"/home"} element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user} isGuest={!isAuthenticated}>
            <Home />
            </CheckAuth>
            } />
          <Route path="/auth" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
            </CheckAuth>
            
            }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} /> 
         </Route>
         
          <Route path="/admin" element=
        {  
            <CheckAuth  isAuthenticated={isAuthenticated} user={user}>
           <AdminLayout />
           </CheckAuth>
        } >
           <Route path="dashboard" element={<AdminDashboard/>} />
           <Route path="orders" element={<AdminOrders />} />
           <Route path="products" element={<AdminProducts />} />
           <Route path="features" element={<AdminFeatures />} />
           <Route path="*" element={<NotFound />} />
        </Route>
         
        <Route path="/shop" element={
         <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <ShoppingLayout/>
         </CheckAuth>} >
           <Route path="home" element={<ShoppingHome/>} />
           <Route path="account" element={<ShoppingAccount/>} />
           <Route path="orders" element={<ShoppingOrders/>} />
           <Route path="listing" element={<ShoppingListing/>} />
           <Route path="checkout" element={<ShoppingCheckout/>} />
           <Route path="*" element={<NotFound />} />
       </Route>

       <Route path="/unauth-page" element={< UnAuthPage/>} />
           
        </Routes>
        { user&&user.role==="admin"?null: <Footer/>} 
     </div>
  )
}
 
export default App
