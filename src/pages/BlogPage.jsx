import React from 'react'
import Mosaic from '../components/mosaic'

const BlogPage = () => {
  
  return (
    <div className='overflow-auto p-8 px-8 w-full flex flex-col gap-10 justify-center items-center'>
      <p className='text-4xl sm:text-6xl font-semibold text-center'><span className='text-[#ee4d37]'>Latest</span> Updates and Articles</p>
      <Mosaic/>
    </div>
  )
}

export default BlogPage
