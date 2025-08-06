import React, { Fragment } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react'




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
         />

         { !imageFile ?
         <Label 
         className="text-sm text-gray-500 text-center"
         htmlFor="imageFile"
         >    
         <UploadCloudIcon className="w-6 h-6 mx-auto mb-2" /> 
          Click or Drag and Drop to upload an image
         </Label>
         : <div className="text-sm  text-gray-500 text-center flex   justify-between">
            <FileIcon className="w-6 h-6 mx-auto mb-2" />
            <p> {imageFile.name}</p>
            <button>
                <XIcon className='w-6 h-6'/>
            </button>
           
          </div> }

     </div>
     </Fragment>
  )
}

export default ProductImageUpload
