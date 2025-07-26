import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import CommonForm from "../../components/common/form"
import { loginFormControls } from "../../config/index"
import { useDispatch } from "react-redux"
import { loginUser } from "../../store/auth-slice/index"
import { useToast } from "@/hooks/use-toast"
 

const initialState = {
    email: "",
    password: "",
} 

function AuthLogin() {
    const dispatch = useDispatch();
    const { toast } = useToast();
    const navigate = useNavigate();
    
  const [formData, setFormData] = useState(initialState);
    
   function onSubmit(event) {
        event.preventDefault();
        // Log the form data to the console for debugging
    console.log("Form submitted with data:", formData);
     dispatch(loginUser(formData)).then((response) => {
        console.log("loginUser response", response);
        
        if (response.payload.success) {
            toast({
                title: response.payload.message
            });
            navigate("/shop");
        } else {
            toast({
                title: "Login failed",
                description: response.payload.message,
                variant: "destructive"
            });
        }
     });}
     
  

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