import React from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'
function Home() {
  return (
    <div >
        <Navbar/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home