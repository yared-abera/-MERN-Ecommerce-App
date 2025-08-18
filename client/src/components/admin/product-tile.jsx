import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
const  AdminLaptopCard= (
   {
     laptop

   }
    
) => {
  return (
    <div  >
      <Card  >
      <CardContent className='p-3 w-full  '>
      <div className=' items-center justify-center align-center rounded-md w-full '>
       <img className='h-40 w-40' src={ laptop.imageUrl} alt="laptop image" />
       <div className='flex flex-col'>
        <h1> <span className='font-bold text-lg text-blue-500'>{laptop.model} </span></h1>
      <h1> Price : <span className='text-red-600 hover:text-yellow-700 hover:underline'>{laptop.price} ETB </span></h1>
        </div>
        <div className='flex  justify-between  '>
        <Button className='mt-4 bg-blue-500'>Edit</Button>
        <Button className='mt-4 bg-red-500'>Delete</Button>
        </div>
      </div>
      </CardContent>

      </Card>
    </div>
  )
}

export default AdminLaptopCard
