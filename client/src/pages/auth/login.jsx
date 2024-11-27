import { Link } from "react-router-dom"
import { useState } from "react"
import CommonForm from "../../components/common/form"
import { loginFormControls } from "../../config/index"


const initialState = {
    userName: "",
    password : "",
} 

function AuthLogin() {

  const [formData, setFormData] = useState(initialState);
  
   function onSubmit() {
     
  }

    return (

        <div className="mx-auto w-full max-w-md space-y-6">
         <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign in to your account </h1> 
         <p className="mt-2">Don't have an acount</p>
         <Link className="font-medium ml-2 text-primary hover:underline" 
         to="/auth/register"> Register</Link>
        </div> 
        <CommonForm  
         formControls={loginFormControls}
         formData={formData}
         setFormData={setFormData}
         onSubmit={onSubmit}
         buttonText={"Sign in"}
        />
        </div>
    )
}

export default AuthLogin