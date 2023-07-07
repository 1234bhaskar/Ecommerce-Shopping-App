import React from 'react'

function CategoryItem({item}) {
  return (
    <div >
        <div className='relative flex  justify-between'>
        <img src={item.img} alt="image" className='h-96'/>
        <div className='absolute top-0 h-full justify-center  flex flex-col items-center  w-full '>
            <h1 className='font-raleway text-white text-2xl font-bold mb-2 '>{item.title}</h1>
            <button className='bg-white px-2 py-1 font-bold'>Shop Now</button>
        </div>
        </div>
        
    </div>
  )
}

export default CategoryItem