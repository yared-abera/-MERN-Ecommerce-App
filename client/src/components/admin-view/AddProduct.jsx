 
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import {laptopFormControls} from '@/config'
import CommonForm from '../common/form' 
import { useState } from 'react'
import ProductImageUpload from './imageUpload'

const initialLaptopFormData = {
  model: '',
  quantity: '',
  processor: '',
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
  category: ''
};

function onSubmit(event) {
  event.preventDefault();
 
}

const AddProduct = ({open,setOpen}) => {

  const [formData, setFormData] =useState(initialLaptopFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  return (
       
      <Sheet open={open} onOpenChange={ () => {
        setOpen(false);
      }} 
    >
        
        <SheetContent className='overflow-auto'>
          <SheetHeader>
           <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          
        <ProductImageUpload 
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        />

          <div className="p-4">
            <CommonForm
             formControls={laptopFormControls}
             formData={formData}
             setFormData={setFormData}
             onSubmit={onSubmit}
             buttonText="Add Laptop"  
             
            />
          </div>
        </SheetContent>
      </Sheet>  
  )
}

export default AddProduct
