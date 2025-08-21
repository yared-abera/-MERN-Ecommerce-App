import React from 'react'
import { Dialog, DialogContent } from '../ui/dialog';
import { useSelector } from 'react-redux';
import { laptopFormControls } from '@/config';
import CommonForm from '../common/form';
import { useState } from 'react';


 const initialFormData ={
  model: '',
  quantity: '',
  processor: '',
  price:'',
  screen: '',
  storage: '',
  ram: '',
  graphics: '',
  batteryLife: '',
  useCase: '',
  features: '',
  condition: '',
  externalWebcam: '',
  brand: '',
  category: '',
  color: '',
  image: '',
 }

const EditLaptop = ({
    openDialog,
    setOpenDialog,
    currentEditLaptopId
}) => {

const {LaptopsList} = useSelector((state) => state.adminLaptops);
const currentLaptop = LaptopsList.find(laptop => laptop._id === currentEditLaptopId);

const [formData,setFormData]= useState(initialFormData);
console.log("current laptop",currentLaptop);

  return (
     
    <Dialog open={openDialog} onOpenChange={()=>{setOpenDialog(false)}} className='w-full  flex items-center justify-center'>   
    <DialogContent className=' h-full w-full  border-2  overflow-auto bg-white rounded-lg shadow-lg 
      '> 
     <h1 className='text-2xl font-bold text-blue-500'>Edit Laptop</h1>  
     <div className=' border-2 w-full border-gray-300 rounded-lg p-4  '>
      {
       currentLaptop ? 
        <CommonForm 
        className=''
        formControls={laptopFormControls} 
        buttonText="Update Laptop" 
        formData={currentLaptop}
         />
      :null}
    </div> 
    </DialogContent>
    </Dialog>


  )
}

export default EditLaptop
