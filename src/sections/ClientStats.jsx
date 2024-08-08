import React from 'react'
import Slider from 'react-infinite-logo-slider'

const ClientStats = () => {
  return (
    <div className='flex flex-col w-full my-8 px-5 p-3 gap-16'>
      <div className="flex w-full flex-col p-3 justify-center items-center gap-1">
        <p className='text-lg text-gray-500'>OUR CLIENTS</p>
        <p className='text-4xl'>Trusted by over 886 + clients</p>
        <p className='text-xl text-gray-700'>Our clients are our top priority, and we are committed to providing them </p>
        <p className='text-xl text-gray-700'>with the highest level of service</p>
      </div>
      <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="/banners/ISO-Photoroom.png" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/banners/Vocal-Photoroom.png" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/banners/SwachBharat-Photoroom.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
            <img src="/banners/MakeIndia-Photoroom.png" alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
            <img src="/banners/Girl-Photoroom.png" alt="any3" className='w-36' />
            </Slider.Slide>
        </Slider>
    </div>
  )
}

export default ClientStats
