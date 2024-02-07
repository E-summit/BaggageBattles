import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'

function Page_7() {
  return (
    <>
    <div className="relative min-h-screen bg-black">
      <img src="src/Images/fram_2_removebg_preview1.png" alt="Home" className="w-full h-full absolute top-0 left-0" />
      <div className="absolute md:ml-20 md:w-9/12 top-40 left-10 right-4 md:top-32 md:left-8 md:right-8 lg:top-36 lg:left-12 lg:right-12 xl:top-40 xl:left-16 xl:right-16 2xl:top-48 2xl:left-20 2xl:right-20">
        <p className="text-md md:text-xl lg:text-2xl md:mt-10 xl:text-3xl 2xl:text-4xl font-bold text-white">
          <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-300 block">Some important Information about the boxes</span>
          The following hints will be provided for each box in the selection phase:
          <br /> <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-300">Owner's Description: </span>A brief description of the owner of the box
          <br /> <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-300">Number of items: </span>The number of items in the box will be specified
          <br /> <span className="text-md md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-300">Pictorial hint: </span>A visual clue regarding the possible contents of the box will be provided to the competing team.
        </p>
      </div>
      <div className="absolute top-0 right-0 h-40 w-40 md:h-80 md:w-80">
        <img src="src/Images/Baggage_Photo.png" alt="Home" className="text-4xl text-white" />
    </div>
    </div>
    </>
  )
}

export default Page_7