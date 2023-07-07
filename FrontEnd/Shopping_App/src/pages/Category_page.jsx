import React from 'react'
import Navbar from "../Components/Navbar"
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import Categories from '../Components/Categories'
//import CategoryItem from '../Components/CategoryItem'

function Category_page() {
  return (
    <div>
        <Navbar/>
        <div >
            <header className='font-montserrat text-3xl font-bold my-5'>Clothes</header>
            <div className='flex justify-between font-bold mx-5'>
                <div >
                <div className='flex   '>
                    <h1 className='mr-2'>Filter Products:</h1>
                    <select name="color" id=""  className='outline rounded-sm'>
                        <option value="">Yellow</option>
                        <option value="">Red</option>
                        <option value="">Blue</option>
                        <option value="">White</option>
                    </select>
                    <select name="size" id="" className='mx-5 outline rounded-sm'>
                        <option value="">Xl</option>
                        <option value="">L</option>
                        <option value="">Sm</option>
                        <option value="">Md</option>
                    </select>
                </div>
            </div>

            <div className='flex'>
                <h1>Sort Products:</h1>
                <select name="sort" id="" className='mx-3 outline rounded-sm' >
                        <option value="">Newest</option>
                        <option value="">Price(asc)</option>
                        <option value="">Price(desc)</option>
                    </select>
            </div>
            </div>
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Category_page