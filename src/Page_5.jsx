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
      <div className="absolute top-40 md:ml-20 md:w-9/12 left-10 right-4 md:top-40 md:left-8 md:right-8 lg:top-44 lg:left-12 lg:right-12 xl:top-48 xl:left-16 xl:right-16 2xl:top-56 2xl:left-20 2xl:right-20">
        <p className="text-md md:text-xl lg:text-2xl md:mt-10 xl:text-3xl 2xl:text-4xl font-bold text-white">
          The teams will be sent to the venue at <span className='sm:inline md:inline lg:inline xl:inline text-md md:text-2xl sm:text-xl font-bold text-blue-300'>2:30 P.M.</span>
          <br/> Teams will have the option of a maximum of <span className='sm:inline md:inline lg:inline xl:inline text-md md:text-2xl sm:text-xl font-bold text-blue-300'>10</span> boxes
          <br/> to look from out of the total <span className='sm:inline md:inline lg:inline xl:inline text-md md:text-2xl sm:text-xl font-bold text-blue-300'>60</span> present.
          <br/> Teams will be sent in 2 slots of 1 hour each i.e. from <span className='sm:inline md:inline lg:inline xl:inline text-md md:text-2xl sm:text-xl font-bold text-blue-300'>2:30-3:30</span> and <span className='block sm:inline md:inline lg:inline xl:inline text-md font-bold text-blue-300'>3:40-4:40 P.M.</span>
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

export default Page_5