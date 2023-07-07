import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter';

function Product_Page() {
  return (
    <div>
        <Navbar/>
        <div className=''>

        <div className='flex my-5'>
            <div className='sm:w-1/2  flex justify-center'>
           <img className='w-96' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a883b6f-1a3c-42d7-943e-a2e4a4107b18/invincible-3-road-running-shoes-Wwmmlp.png" alt="nike shoose" />
            </div>
         
         {/* Right part */}
           <div className='flex-1   '>
             <div>
            <h1 className='font-montserrat font-bold text-3xl my-5'>Nike Supperfly</h1>
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam, tenetur nihil sequi ratione, rem nulla, dolorem temporibus non rerum vel dolores labore ut ad dolore aut quae adipisci nam?</p>
           <div className='text-3xl font-bold'>
            <span>₹</span>
            <span>3000</span>
             </div>
           </div>

           <div className='flex w-1/2  justify-between items-center  my-10'>

           <div className='flex justify-between sm:w-1/3 items-center '>
            <span className='font-bold'>Color</span>
            <div className='w-4 h-4 bg-red-500 rounded-lg'></div>
            <span className='w-4 h-4 bg-blue-500 rounded-lg'></span>
            <span className='w-4 h-4 bg-black rounded-lg'></span>
           </div>
           
           <div className='flex'>
            <header>Size</header>
           <select name="size" id="" className='mx-2 outline rounded-sm'>
                        <option value="">Xl</option>
                        <option value="">L</option>
                        <option value="">Sm</option>
                        <option value="">Md</option>
                    </select>
           </div>
           </div>

             <div className='flex '>
           <div className='flex w-1/3 justify-center items-center'>
            <span className='text-3xl'>-</span>
            <span className='px-2 border border-blue-400'>1</span>
            <span className='text-3xl'>+</span>
           </div>
                 <div className='border border-blue-400 bg-blue-400 text-white font-bold flex items-center px-2 rounded-md'>
                    ADD TO CART
                 </div>
             </div>
           </div>
        </div>
                </div>
                <Newsletter/>

        <Footer/>
    </div>
  )
}

export default Product_Page