import React, { useEffect } from 'react'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { useSelector } from 'react-redux';
import { laptopFormControls } from '@/config';
import CommonForm from '../common/form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EditLaptop, FetchAllLaptops } from '@/store/laptop-slice/index';

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
  type: '',
  imageUrl:''
  
 }

const EditLaptopComponent = ({
    openDialog,
    setOpenDialog,
    currentEditLaptopId
}) => {

const {LaptopsList} = useSelector((state) => state.adminLaptops);
const currentLaptop = LaptopsList.find(laptop => laptop._id === currentEditLaptopId);
const [formData,setFormData]= useState(initialFormData);
 
const dispatch=useDispatch();

const onSubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted with data to edit laptop:", formData);
  console.log("laptop id",currentLaptop._id);
  dispatch(EditLaptop({id:currentLaptop._id,formData}))
  .then(
    (response)=>{
    console.log("response from EditLaptop action:", response);
      if(response.payload.success) {
        console.log("Laptop updated successfully");
        // Optionally, you can dispatch an action to refresh the laptop list
        dispatch(FetchAllLaptops());
        setOpenDialog(false); // Close the dialog after successful update
      } else {
        console.error("Failed to update laptop:", response.payload.message);
      }
    });


}

useEffect(()=>{
   if(currentLaptop)  setFormData(currentLaptop ) 
    console.log("form data",formData);
},[currentLaptop])

console.log("current laptop",currentLaptop);

  return (
     
    <Dialog open={openDialog} onOpenChange={()=>{setOpenDialog(false)}} className='w-full  flex items-center justify-center'>   
    <DialogContent className=' h-full w-full 
      overflow-auto bg-white rounded-lg shadow-lg 
      '> 
       <DialogTitle className='text-2xl font-bold text-blue-500'>Edit Laptop</DialogTitle>  
     <div className=' w-full  rounded-lg p-4  '>
      {
       currentLaptop ? 
        <CommonForm        
        formControls={laptopFormControls} 
        buttonText="Update Laptop" 
        formData={formData}
        onSubmit={onSubmit}
        setFormData={setFormData}
         />
      :null }
    </div> 
    </DialogContent>
    </Dialog>


  )
}

export default EditLaptopComponent
