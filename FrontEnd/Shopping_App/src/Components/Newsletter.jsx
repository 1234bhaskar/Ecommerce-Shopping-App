import React from 'react'
import SendIcon from '@mui/icons-material/Send';
const Newsletter = () => {
  return (
    <div>
          <div className='w-full  bg-peach-0 py-20'>
            <div className=' h-40 flex flex-col  items-center justify-around'>
                <header className='text-4xl font-bold font-montserrat '>Newsletter</header>
                <p className='pb-5'>Get timely updates from your favourite products</p>
                <div className='w-full flex justify-center h-9'>
                <input type="email" placeholder='Your email' className='w-1/3 rounded-sm px-2 outline-none'/>
                <button className='text-white bg-green-800 w-20'><SendIcon/></button>
                </div>
            </div>

          </div>
    </div>
  )
}

export default Newsletter