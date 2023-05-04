import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'
function Products() {
  return (
<div className='mt-4'>
    <header className='text-center font-raleway text-5xl font-bold my-5'>Popular Products</header>
    <div className='grid grid-cols-4 gap-4 h-full  justify-items-center '>

        {
            popularProducts.map((item)=>(
                <Product item={item} key={item.id}/>
            ))
        }
    </div>
</div>
    
   
  )
}

export default Products