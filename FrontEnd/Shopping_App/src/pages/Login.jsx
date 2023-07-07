import React from 'react'
import Img1 from '/login_img.png'
function Login() {
  return (
    <div >

      <div>
        <header className=' font-bold text-4xl text-center'>LOGO</header>
      </div>
      <div className='flex h-1/2 '>

      <div className='flex justify-center flex-1   '>
        <img className='h-4/5' src={Img1} alt="" />
      </div>
        <div className='w-1/2 h-screen flex justify-center  items-center  '>
            <div className='w-1/2 flex flex-col  h-1/2'>
                <header className='text-2xl font-bold my-6 font-ubuntu'>SIGN IN</header>
                <input type="text" placeholder='username' className='border py-1' />
                <input type='password' placeholder='password'  className='border py-1 my-5'/>
                  <button className='bg-teal1-0 w-1/3 py-2'>LOGIN</button>
                <div className='mt-6'>
                  <div className=''>Forgot password? </div>
                <div>Create a new account</div>
                </div>
            </div>

        </div>

        </div>
    </div>
  )
}

export default Login