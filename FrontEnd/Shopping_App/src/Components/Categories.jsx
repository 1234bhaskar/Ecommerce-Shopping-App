import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

function Categories() {
  return (
    <div className='flex bg-blueCustom2-0  p-5 justify-around w-full '>
        {
            categories.map(item=>(<CategoryItem item={item}key={item.id}/>))
        }
    </div>
  )
}

export default Categories