import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'

function Page_9() {
  return (
    <>
<div className="relative min-h-screen w-full bg-black">
    <img src="src/Images/fram_2_removebg_preview1.png" alt="Home" className="w-full h-full absolute top-0 left-0" />

    <div className="absolute top-40 left-10 right-4 md:top-40 md:left-8 md:right-8 lg:top-44 lg:left-12 lg:right-12 xl:top-48 xl:left-16 xl:right-16 2xl:top-56 2xl:left-20 2xl:right-20">
        <p className="text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white">
            <span className="text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-blue-300 block">Scoring Criteria</span>
            <br />
            - Through the clues provided by the organizing team, the teams would be required to guess about the potential value of the boxes of their choice.
            <br />
            - They would then be bidding in the auction based on their analysis of the particular box.
            <br />
            - The winner would be based on maximum profit earned where maximum profit would be equal to:
            <br />
            <span className="text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-blue-300">“Virtual bucks spend on acquiring the box-the actual value of that box”</span>
        </p>
    </div>

    <div className="text-left ml-12"> 
        <a href='edc_form' className="bg-blue-500 text-decoration-none w-2/3 md:w-2/12 sm:w-3/12 md:text-2xl sm:text-xl hover:bg-blue-500 text-white text-md font-bold py-2 px-4 rounded-full absolute bottom-2">
            Register
        </a>
    </div>

    <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 xl:top-10 xl:right-10 2xl:top-12 2xl:right-12">
        <img src="src/Images/Baggage_Photo.png" alt="Home" className="text-4xl text-white" />
    </div>
</div>
    </>
  )
}

export default Page_9