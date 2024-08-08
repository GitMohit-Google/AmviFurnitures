import React from 'react'
import Cards from '../components/Cards'

const ProductsSection = () => {
  return (
    <div className='flex w-full items-center p-3 px-5 flex-col'>
      <div className="flex w-full items-center justify-center text-6xl p-3">
        <p className='w-[850px] text-center font-semibold'>Quality and Guaranteed Products Here</p>
      </div>
      <Cards/>
    </div>
  )
}

export default ProductsSection
