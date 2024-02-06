import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'

function Page_5() {
  return (
    <>
    <div className="h-screen w-screen bg-black relative">
      {/* Background Image */}
      <img src="src/Images/fram_2_removebg_preview1.png" alt="Home" className="w-screen h-screen absolute top-0 left-0" />
      {/* Information Box */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 sm:p-6 md:p-8 md:m-20 lg:p-10 xl:p-12 w-10/12 rounded-md shadow-md text-white">
        <p className="text-md md:text-lg sm:text-md font-bold text-white">
          The teams will be sent to the venue at <span className='sm:inline md:inline lg:inline xl:inline text-md md:text-2xl sm:text-xl font-bold text-blue-300'>2:30 P.M.</span>
          <br/> Teams will have the option of a maximum of <span className='sm:inline md:inline lg:inline xl:inline text-md md:text-2xl sm:text-xl font-bold text-blue-300'>10</span> boxes
          <br/> to look from out of the total <span className='sm:inline md:inline lg:inline xl:inline text-md md:text-2xl sm:text-xl font-bold text-blue-300'>60</span> present.
          <br/> Teams will be sent in 2 slots of 1 hour each i.e. from <span className='sm:inline md:inline lg:inline xl:inline text-md md:text-2xl sm:text-xl font-bold text-blue-300'>2:30-3:30</span> and <span className='block sm:inline md:inline lg:inline xl:inline text-md font-bold text-blue-300'>3:40-4:40 P.M.</span>
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

export default Page_5