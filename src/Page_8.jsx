import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'

function Page_8() {
  return (
    <>
    <div className="relative min-h-screen bg-black">
      <img src="src/Images/fram_2_removebg_preview1.png" alt="Home" className="w-full h-full absolute top-0 left-0" />
      <div className="absolute md:ml-20 md:mt-20 md:w-9/12 top-40 left-10 right-4 md:top-32 md:left-8 md:right-8 lg:top-36 lg:left-12 lg:right-12 xl:top-40 xl:left-16 xl:right-16 2xl:top-48 2xl:left-20 2xl:right-20">
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white">
          <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-blue-300 block">Competition Procedure</span>
          <br />
          - Each participating team would be provided 100,000 virtual money at the beginning of the competition.
          <br />
          - Once all the teams have decided on their boxes, the auction will take place.
          <br />
          - The teams will be bidding for their boxes through the virtual currency they have been provided.
        </p>
      </div>
      <div className="absolute top-0 right-0 h-40 w-40 md:h-80 md:w-80">
        <img src="src/Images/Baggage_Photo.png" alt="Home" className="text-4xl text-white" />
    </div>
    </div>
    </>
  )
}

export default Page_8