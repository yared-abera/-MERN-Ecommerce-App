import React, { Fragment } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import { useRef } from 'react'
import  axios  from 'axios'
import { useEffect } from 'react'




const ProductImageUpload = ( 
   {
    imageFile, 
    setImageFile, 
    uploadedImageUrl,
    setUploadedImageUrl
   }) => {
 
 
 const handleImageFileChange = (event) => {
   console.log("Image file changed", event.target.files);
   const selectedFile= event.target.files[0];
   if(selectedFile) setImageFile(selectedFile);



 }

 const imageRef= useRef(null);

 const handleOnDragOver = (event) => {
   event.preventDefault();

 }

  const handleOnDrop = (event) => {
   event.preventDefault();
   const droppedFile= event.dataTransfer.files[0];
   if(droppedFile) setImageFile(droppedFile);
  }

async function uploadImageToCloudinary(file) {
  const data = new FormData();  
  data.append('imageFile', file);
  
  try {
    const response= await axios.post('http://localhost:5000/api/admin/product/image-upload',
     data );
     
     console.log('response of image upload', response);
      
   if(response.data.success){
     setUploadedImageUrl(response.data.url);   
   }
     
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}
  
useEffect(() => {
 
if(imageFile !== null) uploadImageToCloudinary(imageFile);

},[imageFile]);
                        




   return (
  
  <Fragment>
   <div
   onDragOver={handleOnDragOver}
    onDrop={handleOnDrop} 
   className={`${!imageFile ? "w-80 h-40" : ""} 
    mt-6 border-2 border-dashed border-gray-300 rounded-lg 
     flex flex-col items-center justify-center`}
   >

        <Input
          type="file" 
         id="imageFile"
         name="imageFile"
         onChange={handleImageFileChange}
         className="hidden" 
          ref={imageRef}
         />

         { !imageFile ?
         <Label 
         className="text-sm text-gray-500 text-center"
         htmlFor="imageFile"
         
         >    
         <UploadCloudIcon className="w-6 h-6 mx-auto mb-2" /> 
          Click or Drag and Drop to upload an image
         </Label>
         : <div className=" w-full  text-center flex ">
          <div className='flex items-center  w-full   justify-between '>
            <div className='flex w-3/4 pl-5 gap-2 '> <FileIcon className=" " />
               <p> {imageFile.name}</p>
            </div>
            <button onClick={() => {
              setImageFile(null)
              imageRef.current.value = null  }
            } className='text-red-500 hover:text-red-700 w-1/4 py-3'>
                <XIcon />
            </button>
           </div> 
          
          </div> }

     </div>
     </Fragment>
  )
}

export default ProductImageUpload
