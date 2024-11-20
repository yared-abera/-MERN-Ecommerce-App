import { Route, Routes } from "react-router-dom"

 

function App() {
   

  return (
     <div className="flex flex-col overflow-hidden bg-white">
        {/* common components */}

        
        <Routes>
         <Route path="/auth" element={<AuthLayout />}>
          
         </Route>


        </Routes>

     </div>
  )
}

export default App
