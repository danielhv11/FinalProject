import React from 'react'
import video1 from '../assets/solarhouse.mp4'

const Main = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden' id='hero'>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <video className='absolute inset-0 object-cover w-full h-full opacity-60' src={video1} autoPlay loop muted />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Shine brighter, live greener.
                <br /> 
                <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
                    {" "}Go solar today.
                </span>
            </h1>
            <p className="mt-5 text-lg text-center text-gray-300 max-w-4xl">
                One step toward a brighter future—make the switch to solar now.
            </p>
            <div className='flex justify-center my-10'>
                <a href='#' className='bg-gradient-to-r from-red-500 to-red-800 text-white px-6 py-3 mx-3 rounded-md'>
                    Get a Quote
                </a>
            </div>   
           
        </div>
    </div>
  )
}

export default Main
