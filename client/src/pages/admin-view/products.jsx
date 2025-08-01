
import React from 'react';
import { Button } from '../../components/ui/button';
import AddProduct from '@/components/admin-view/AddProduct';
import 
function AdminProducts() {

  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);


    return ( 

        
         <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg">

             <AddProduct open={openCreateProductsDialog} setOpen={setOpenCreateProductsDialog} /> 

              <h1 className="text-2xl font-bold mb-4">Admin Products Page</h1>  
              <div className="flex justify-end gap-2 ">
                 <Button className="bg-yellow-600 p-2 mx-6 hover:bg-yellow-500 text-black text-md">Add Laptop</Button>
              </div>
              <div className='flex flex-col gap-4'>
                <h1 className="text-2xl font-bold mb-4">All laptops</h1>
              <div className='grid grid-cols-4 gap-4'>
                 
              </div>
              </div>
        </div>
    );
}

export default AdminProducts