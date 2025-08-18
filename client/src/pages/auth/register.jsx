import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import CommonForm from "../../components/common/form"
import { registerFormControls } from "../../config/index"
import { useDispatch } from "react-redux"
import { registerUser } from "../../store/auth-slice/index"
import { useToast } from "@/hooks/use-toast"



const initialState = {
    userName : "",
    email    : "",
    password : "",

  } 

function AuthRegister() {
   
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  
   function onSubmit(event) {
      event.preventDefault();
      
      
      dispatch(registerUser(formData)).then((data)=> 
      {
      console.log("registerUser",data);
        if(data.payload.success){

          toast({ 
            title: data.payload.message,       
           });
          navigate("/auth/login");
        }else{
          toast({
            title: data.payload.message,
            variant: "destructive",
          });
        }
      }
      
      
      );
      }
     
      console.log({formData});

    return (

        <div className="mx-auto w-full max-w-md space-y-6">
         <div className="  text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account </h1> 
          <p className="mt-2">Already have an acount</p>
         <Link className="font-medium ml-2 text-primary hover:underline" 
         to="/auth/login">Login</Link> 
        </div> 
        <CommonForm  
         formControls={registerFormControls}
         formData={formData}
         setFormData={setFormData}
         onSubmit={onSubmit}
         buttonText={"Register"}
        />
        </div>
    )
}

export default AuthRegister 