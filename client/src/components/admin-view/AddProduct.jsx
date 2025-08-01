 
import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

const AddProduct = ({open,setOpen}) => {
  return (
      <Sheet open={open} onOpenChange={ () => {
        setOpen=(false)
      }} >
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <div className="p-4">
             
          </div>
        </SheetContent>
      </Sheet>  
  )
}

export default AddProduct
