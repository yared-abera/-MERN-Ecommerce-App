import React from 'react';
import { Button } from '../../components/ui/button';
import AddProduct from '@/components/admin/AddProduct';
import { useState } from 'react';
import AdminLaptopCard from '@/components/admin/product-tile';  
import { useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { FetchAllLaptops } from '@/store/laptop-slice/index';


function AdminProducts() {
  const dispatch= useDispatch();
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  
  const {LaptopsList}= useSelector((state) => state.adminLaptops);
   
  useEffect(() => {
    dispatch(FetchAllLaptops());
  }, [dispatch]);

    return ( 

         <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg">
          

             <AddProduct open={openCreateProductsDialog} setOpen={setOpenCreateProductsDialog} /> 

              <h1 className="text-2xl font-bold mb-4">Admin Products Page</h1>  
              <div className="flex justify-end gap-2 ">
                
              <Button className="bg-yellow-600 p-2 mx-6 hover:bg-yellow-500 text-black text-md" 
                    onClick={() => setOpenCreateProductsDialog(true)}
                 >Add Laptop</Button>
              </div>
              <div className='flex flex-col gap-4'>
                <h1 className="text-2xl font-bold mb-4">All laptops</h1>
              <div className='grid grid-cols-4 gap-4 bg-gray-100 p-5'>
               {
                LaptopsList&&LaptopsList.length>0?
                LaptopsList.map((laptop)=>{
                  return <AdminLaptopCard key={laptop._id} laptop={laptop} />
                
                })
                :null

               }
              </div>
              </div>
        </div>
    );
}

export default AdminProducts