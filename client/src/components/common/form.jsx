


import React from 'react'
import { Input } from '../ui/input';

 function CommonForm({formControls}) {
  

   function renderInputByComponentType(getControlItem)
   {
     let element=null;
     
     switch(getControlItem.componentType){
      case "input":
         element= (
            <Input
             name={getControlItem.name}
             placeholder={getControlItem.placeholder}
             id={getControlItem.name}
             type={getControlItem.type}
             />   
          );
          break;
         default :
         element= (
            <Input
             name={getControlItem.name}
             placeholder={getControlItem.placeholder}
             id={getControlItem.name}
             type={getControlItem.type}
             />);

     }

   }







  return (
     <form>
      <div className='flex flex-col gap-3'>
         { formControls.map(controlItem=> <div className='grid w-full gap-1.5'>
            <Label className="mb-1>">{controlItem.label}</Label>
            {
               renderInputByComponentType(controlItem)
            }
         </div>)}
        </div>  
     </form>
  )
}

export default CommonForm