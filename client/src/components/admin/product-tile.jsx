import React from 'react'
import { Card, CardContent } from '../ui/card'

const  AdminProductCard= (
   {
    product
   }
    
) => {
  return (
    <div>
      <Card>
       
      <CardContent>
      <div className='flex items-center justify-center rounded-md '>
       <img className='h-40 w-40' src={product.image} alt="laptop image" />
       <div>
       <h1>{product.model}</h1>
       <h1>{product.price}</h1>
       </div>
       
      </div>
      </CardContent>

      </Card>
    </div>
  )
}

export default AdminProductCard
