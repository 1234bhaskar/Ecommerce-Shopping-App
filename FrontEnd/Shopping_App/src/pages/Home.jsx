import React from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
function Home() {
  return (
    <div >
        <Navbar/>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Home