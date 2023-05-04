import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Navbar() {
  return (
    <div>
        <div className='h-fit w-full border flex font-ubuntu py-2 text-xl '>
            <div className='list-none sm:flex sm:flex-1 hidden '>
                 <li className='ml-5'>Register</li>
                 <li className='mx-10'>Sign In</li>
                 <li ><ShoppingCartOutlinedIcon/></li>
            </div>
            <div className=' flex flex-1 text-3xl font-extrabold sm:pl-48 font-mono '  >
                Logo
            </div>
            <div className='list-none flex justify-center items-center border sm:mr-5 rounded-sm'>
                 <input type="text"  className='outline-none'/>
                 <SearchOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Navbar