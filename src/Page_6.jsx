import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'

function Page_6() {
  return (
    <>
    <div className="relative min-h-screen bg-black">
      <img src="src/Images/fram_2_removebg_preview1.png" alt="Home" className="w-full h-full absolute top-0 left-0" />
      <div className="absolute top-0 right-0 h-40 w-40 md:h-80 md:w-80">
        <img src="src/Images/Baggage_Photo.png" alt="Home" className="text-4xl text-white" />
    </div>
      <div className="absolute top-40 md:ml-20 md:w-9/12 left-10 right-4 md:top-40 md:left-8 md:right-8 lg:top-44 lg:left-12 lg:right-12 xl:top-48 xl:left-16 xl:right-16 2xl:top-56 2xl:left-20 2xl:right-20">
        <p className="text-md md:text-xl lg:text-2xl md:mt-10 xl:text-3xl 2xl:text-4xl font-bold text-white">
          <br/> - The price for each box would be pre-decided by the organizing committee and not be non-negotiable during the time of the event.
          <br/> - Teams will have the entirety of 1 hour to choose a maximum of 10 boxes.
          <br/> - Also, it is not mandatory to choose 10 boxes, but the maximum any team can choose is 10.
        </p>
      </div>
    </div>
    </>
  )
}

export default Page_6