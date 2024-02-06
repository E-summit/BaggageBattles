import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons'

function Page_3() {
  return (
    <>
<div className="min-h-screen flex flex-col items-center justify-center relative bg-black">

{/* Left Circle */}
<div className="w-8 h-8 bg-white rounded-full sm:w-12 sm:h-12"></div>

{/* Center Line */}
<div className="w-1 bg-white h-screen sm:w-3 sm:h-screen"></div>

{/* Right Circle */}
<div className="w-8 h-8 bg-white rounded-full sm:w-12 sm:h-12"></div>

{/* Clock */}
<div className='w-2/4 sm:w-2/4 absolute top-32 left-44 sm:left-72 md:left-80 lg:left-96 xl:right-10 xl:left-auto lg:ml-20'>
  <div className="w-full h-16 text-black font-bold bg-white border-b-4 border-white text-center sm:h-20 sm:text-3xl text-sm p-3 rounded-md">
    2:00 PM - 5:00 PM
    <FontAwesomeIcon icon={faClock} className='text-blue-500 text-4xl sm:text-3xl rounded-full'/>
  </div>
</div>

{/* Location */}
<div className='w-2/4 sm:w-2/4 absolute top-82 left-3 sm:left-10'>
  <div className="w-full h-16 text-black font-bold bg-white border-b-4 border-white text-center sm:h-20 sm:text-3xl text-sm p-3 rounded-md">
    Activity Space
    <FontAwesomeIcon icon={faLocationDot} className='text-blue-500 text-4xl sm:text-3xl rounded-full'/>
  </div>
</div>

{/* Calendar */}
<div className='w-2/4 sm:w-2/4 absolute bottom-24 left-44 sm:left-72 md:left-80 lg:left-96 xl:right-10 xl:left-auto lg:ml-20'>
  <div className="w-full h-16 text-black font-bold bg-white border-b-4 border-white text-center sm:h-20 sm:text-3xl text-sm p-3 rounded-md">
    10 February, 2024
    <FontAwesomeIcon icon={faCalendarDays} className='text-blue-500 text-4xl sm:text-3xl rounded-full'/>
  </div>
</div>
</div>
    </>
  )
}

export default Page_3