import React from 'react'
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

 function CommonForm({formControls,formData,setFormData,onSubmit,buttonText}) {
  
   function renderInputByComponentType(getControlItem)
   {
     let element=null;
     const value= formData[getControlItem.name];
     switch(getControlItem.componentType){
      case "input":
         element= (
            <Input className="bg-gray-300 p-2 rounded-md"
             name={getControlItem.name}
             placeholder={getControlItem.placeholder}
             id={getControlItem.name}
             type={getControlItem.type}
             value={value}
             onChange={event=>setFormData({
               ...formData,
               [getControlItem.name]:event.target.value
            })}
             />   
          );
          break;
          case "select":
         element= (
              <Select value={value} onValueChange={(value)=>
              setFormData({
               ...formData,
               [getControlItem.name]:value
               })
               } 
               >
            <SelectTrigger className="w-full">
            <SelectValue placeholder={getControlItem.placeholder}/>

            </SelectTrigger>
            <SelectContent>
               {
                getControlItem.options &&
                getControlItem.option.length>0 ?
                getControlItem.option.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem> ):null
               }
            </SelectContent>

              </Select> 
          );
          break;
          case "textarea":
         element= (
            <Input 
             name={getControlItem.name}
             placeholder={getControlItem.placeholder}
             id={getControlItem.name}
             value={value}
             onChange={event=>setFormData({
               ...formData,
               [getControlItem.name]:event.target.value
            })}
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
             value={value}
             onChange={event=>setFormData({
               ...formData,
               [getControlItem.name]:event.target.value
            })}
             />);

     }

     return element

   }







  return (
     <form onSubmit={onSubmit}>
      <div className='flex flex-col gap-3'>
         { formControls.map(controlItem=> <div className='grid w-full gap-1.5 '>
            <Label className="mb-1>">{controlItem.label}</Label>
            {
               renderInputByComponentType(controlItem)
            }
         </div>)}
        </div> 
        <Button type="submit" className="mt-4 w-full">{buttonText || "Submit"}</Button> 
     </form>
  )
}

export default CommonForm