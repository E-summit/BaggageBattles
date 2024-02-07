import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'

function Page_4() {
  return (
    <>
    <div className="h-screen w-screen bg-black relative">
        {/* Centered Text */}
        <div className="flex flex-row items-center justify-center">
            <h1 className="text-center text-4xl font-bold text-white py-4 sm:text-5xl md:text-6xl lg:text-7xl">RULE</h1>
            <h1 className="text-center text-4xl font-bold text-blue-400 py-4 sm:text-5xl md:text-6xl lg:text-7xl">BOOK</h1>
        </div>
        {/* Background Image */}
        <img src="src/Images/fram_2_removebg_preview1.png" alt="Home" className="w-screen h-screen absolute top-0 left-0" />
        {/* Rules Information */}
        <div className="absolute top-40 md:ml-20 md:w-9/12 left-10 right-4 md:top-40 md:left-8 md:right-8 lg:top-44 lg:left-12 lg:right-12 xl:top-48 xl:left-16 xl:right-16 2xl:top-56 2xl:left-20 2xl:right-20">
            <p className="text-md md:text-xl lg:text-2xl md:mt-10 xl:text-3xl 2xl:text-4xl font-bold text-blue-300">
                <span className='block'>Rules:</span>
                <span className='block'>Total number of teams: <span className='text-white'>40</span></span>
                <span className='block'>Total number of boxes: <span className='text-white'>60</span></span>
                <span className='block'>Registration form opens: <span className='text-white'>February 7, 2024</span></span>
                <span className='block'>Registration form close: <span className='text-white'>February 9, 2024</span></span>
                <span className='block'>Reporting time for Teams: <span className='text-white'>2:00 P.M.</span></span>
            </p>
        </div>
        {/* Suitcase Icon */}
        <div className="absolute top-0 right-0 h-40 w-40 md:h-80 md:w-80">
        <img src="src/Images/Baggage_Photo.png" alt="Home" className="text-4xl text-white" />
    </div>
    </div>
    </>
  )
}

export default Page_4