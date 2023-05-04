import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Product({item}) {
  return (
    <div className='relative h-full '>
         <img src={item.img} alt="image"  className='h-60 w-56 object-cover obj'/>
         <div className='flex justify-evenly absolute top-0 h-full w-full items-center opacity-0 hover:opacity-100 hover:backdrop-brightness-90 hover:duration-200 ease-in'>
             <ShoppingCartOutlinedIcon className='bg-white rounded-xl scale-125 p-1 hover:scale-150 duration-500 ease-in'/>
             <SearchOutlinedIcon className='bg-white rounded-xl scale-125 p-1 hover:scale-150 duration-500 ease-in '/>
             <FavoriteBorderOutlinedIcon className='bg-white rounded-xl scale-125 p-1 hover:scale-150 duration-500 ease-in'/>
         </div>

    </div>
  )
}

export default Product