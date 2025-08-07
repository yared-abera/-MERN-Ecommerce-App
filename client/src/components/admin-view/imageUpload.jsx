import React, { Fragment } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import { useRef } from 'react'




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

   return (
  
  <Fragment>
   <div
  className={`${!imageFile ? "w-80 h-40" : ""}  mt-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center`}
   >

        <Input
          type="file" 
         id="imageFile"
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
              imageRef.current.value = null}
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
