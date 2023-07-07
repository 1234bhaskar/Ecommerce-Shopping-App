import React from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
  return (
    <div>
        <div className='w-full h-1/2 flex justify-between bg-blueCustom1-0 text-white font-ubuntu'>
        <div className='flex-1'>
            <div className=' flex flex-1 text-4xl font-extrabold  font-mono'  >
                Logo
            </div>
            <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit reiciendis eveniet ea similique corporis laboriosam eligendi, velit temporibus placeat cumque! Est fugit, laborum repellat dolorem expedita saepe nihil rem sunt?</p>
        </div>
        <div className='flex-1 flex-col justify-center '>
            <header className=" text-center font-bold text-xl">Useful Links</header>
           <ul className="list-none text-center mt-6">
             <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
           </ul>
            </div> 
        <div className='flex-1  '>
            <header className="font-bold text-xl">Contact</header>
            <div className="flex flex-col justify-evenly h-3/4">

            <div className="flex">
                <LocationOnIcon/>
                <p>Dwarka sec-2 new delhi 110045</p>
            </div>
            <div className="flex">
                 <PhoneIcon/>
                  <p>+91 935431</p>
            </div>
            <div className="flex">
                 <EmailIcon/>
                 <p>bhaskar2@gmail.com</p>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Footer