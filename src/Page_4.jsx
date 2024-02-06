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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 sm:p-6 md:p-8 md:m-10 lg:p-10 xl:p-12 w-9/12 rounded-md shadow-md  text-white">
            <p className="text-sm md:text-lg sm:text-md font-bold text-blue-300">
                <span className='block'>Rules:</span>
                <span className='block'>Total number of teams: <span className='text-white'>40</span></span>
                <span className='block'>Total number of boxes: <span className='text-white'>60</span></span>
                <span className='block'>Registration form opens: <span className='text-white'>February 7, 2024</span></span>
                <span className='block'>Registration form close: <span className='text-white'>February 9, 2024</span></span>
                <span className='block'>Reporting time for Teams: <span className='text-white'>2:00 P.M.</span></span>
            </p>
        </div>
        {/* Suitcase Icon */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 xl:top-12 xl:right-12">
            <FontAwesomeIcon icon={faSuitcase} className="text-blue-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" />
        </div>
    </div>
    </>
  )
}

export default Page_4