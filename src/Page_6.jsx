import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'

function Page_6() {
  return (
    <>
    <div className="relative min-h-screen bg-black">
      <img src="src/Images/fram_2_removebg_preview1.png" alt="Home" className="w-full h-full absolute top-0 left-0" />
      <div className="absolute top-10 left-5 md:left-20 lg:left-32 xl:left-36 2xl:left-40">
        <FontAwesomeIcon icon={faSuitcase} className="text-blue-500 text-4xl md:text-8xl" />
      </div>
      <div className="absolute top-1/3 left-10 right-5 md:m-20 md:top-1/4 md:left-10 md:right-10 lg:top-1/3 lg:left-16 lg:right-16 xl:top-1/3 xl:left-20 xl:right-20 2xl:top-1/3 2xl:left-24 2xl:right-24">
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white">
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