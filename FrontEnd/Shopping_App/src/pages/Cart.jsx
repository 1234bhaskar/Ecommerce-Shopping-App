import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
function Cart() {
  return (
    <div>
        <Navbar/>
        <div>
             <header className='text-center font-bold text-4xl font-montserrat'>YOUR BAG</header>
             <div className='flex justify-between my-4 font-sans mx-5'>
                <button className=' border-black border-2 rounded-sm'>CUNTINUE SHOPPING</button>
                <div>
                    <span>Shopping Bag</span>
                    <span>(2)</span>
                    <span className='ml-5'>Your Wishlist</span>
                    <span>(0)</span>
                </div>
                <button className=' border-black border-2 bg-black text-white rounded-sm'>CHECKOUT NOW</button>
             </div>

              <div className='flex'>

             <div className='flex flex-col w-3/5'>
                <div className=' border-b '>
                    <div className='flex justify-between mx-10 my-2'>
                        <img className='h-36' src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/91efd39b-b82f-4da4-8087-05eee067d4b3/zoom-mercurial-superfly-9-elite-xxv-fg-football-boot-RxNPgm.png" alt="" />
                        <div>
                           <div>
                             <span>Product:</span>
                            <span>Nike Supperfly</span>
                           </div>
                           <div>
                            <span>ID:</span>
                            <span>93095753</span>
                           </div>
                           <div className='h-2 w-2 bg-black'></div>
                           <div>
                            <span>Size:</span>
                            <span>37.5</span>
                           </div>
                        </div>
                        <div>
                            <div>
                                <span>+</span>
                                <span>1</span>
                                <span>-</span>
                            </div>

                            <div>
                                <span>₹</span>
                                <span>39999</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nkd item */}
                <div className=' border-b '>
                    <div className='flex justify-between mx-10 my-2'>
                        <img className='h-36' src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/91efd39b-b82f-4da4-8087-05eee067d4b3/zoom-mercurial-superfly-9-elite-xxv-fg-football-boot-RxNPgm.png" alt="" />
                        <div>
                           <div>
                             <span>Product:</span>
                            <span>Nike Supperfly</span>
                           </div>
                           <div>
                            <span>ID:</span>
                            <span>93095753</span>
                           </div>
                           <div className='h-2 w-2 bg-black'></div>
                           <div>
                            <span>Size:</span>
                            <span>37.5</span>
                           </div>
                        </div>
                        <div>
                            <div>
                                <span>+</span>
                                <span>1</span>
                                <span>-</span>
                            </div>

                            <div>
                                <span>₹</span>
                                <span>39999</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>


             <div className='w-2/5 border-4 border-black mx-5 px-10'>
                    <header className='text-4xl text-center font-bold mb-5'>ORDER SUMMARY</header>
                    <div className='flex justify-between my-5 '>
                        <p className='font-bold'>Subtotal</p>
                        <p>₹80</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Estimated Shipping</p>
                        <p>₹80</p>
                    </div>
                    <div className='flex justify-between my-5'>
                        <p className='font-bold'>Shipping Discount</p>
                        <p>₹80</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-bold'> Total</p>
                        <p>₹240</p>
                    </div>
                    <div className=' text-center mt-5'>    
                    <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span class="relative text-black group-hover:text-white">Button Text</span>
                    </a>
                    </div>

                </div>
</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart