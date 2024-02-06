import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'

function Page_2() {
    return (
    <>
    <div className="h-screen bg-black p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-400 py-6 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        About The Event
      </h1>

      <div className="bg-black m-4 sm:m-8 md:m-12 lg:m-16 xl:m-20 rounded-md shadow-md mx-auto">
        <p className="text-white font-bold p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero in libero cursus bibendum.
          Nullam id quam nec augue venenatis hendrerit at eget erat.
        </p>
      </div>

      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 xl:top-12 xl:right-12">
        <FontAwesomeIcon icon={faSuitcase} className="text-blue-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" />
      </div>
    </div>
    </>
    )
}

export default Page_2