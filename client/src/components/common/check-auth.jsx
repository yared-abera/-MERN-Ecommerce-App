
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({isAuthenticated,user,children, isGuest}) {
    const location = useLocation();
      console.log(location);
    if(isGuest ) return <Navigate to="/home" />;
      
      
      if(
      !isAuthenticated &&
      !(
        location.pathname.includes("/login") ||
        location.pathname.includes("/register")  
      ) 
    ) {
      return <Navigate to="/"/>;
    }
     
    if(
      isAuthenticated &&
      (
        location.pathname.includes("/login") ||
        location.pathname.includes("/register")  
      ) 
    ){
    
       if(user?.role==="admin")
        {
            return <Navigate to="/admin/dashboard"/>;
        }
        else{
           return <Navigate to="/shop/home"/>
        }}

        if(isAuthenticated && user?.role!=="admin" && location.pathname.includes("/admin"))
          {
            return <Navigate to="/unauth-page" />;
          }
        
        if(isAuthenticated && user?.role==="admin" && location.pathname.includes("/shop"))
        { return <Navigate to="/admin/dashboard" />;}
       
         
        return <>{children}</>
         
        } 
    
export default CheckAuth