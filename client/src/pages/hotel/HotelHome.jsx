import React from 'react'

const HotelHome = () => {
  return (
    <>
      <div className='flex mx-auto px-[5%] flex-col md:flex-row h-screen justify-evenly'>
        <div className='flex flex-col  justify-center text-left '>
          <h1 className='md:text-5xl font-bold text-4xl mb-2'>Hotel Home page</h1>
          <p className='font-semibold'>Effortless Event Staffing: Where Hotels Find Helpers in a Flash!</p>
        </div>
        <div className='flex items-center justify-center mt-6 w-[100%] sm:w-[50%]'>
          <img src="/images/Hotel.jpg" alt="" className='w-[100%] md:w-[80%] ' />
        </div>
      </div>

      <div className='flex flex-col gap-4 bg-blue-100 py-5'>

        <div className="bg-white rounded-lg shadow-lg  border-gray-100 border-2 w-[90%] md:w-[80%] mx-auto">
          <div className="px-6 py-4 ">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm">Posted on April 1, 2024</span>
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">New</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Digital Marketer</h2>
          </div>
          <div className="px-6 py-4 bg-gray-100 ">
            <span className="text-gray-600">Creative Agency</span>
            <span className="text-gray-600 ml-4"><i className="fas fa-map-marker-alt"></i> Athens, Greece</span>
            <span className="text-gray-600 ml-4">$3500 - $4000</span>
          </div>
        </div>


        <div className="bg-white rounded-lg shadow-lg  border-gray-100 border-2 w-[90%] md:w-[80%] mx-auto">
          <div className="px-6 py-4 ">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm">Posted on April 1, 2024</span>
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">New</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Digital Marketer</h2>
          </div>
          <div className="px-6 py-4 bg-gray-100 ">
            <span className="text-gray-600">Creative Agency</span>
            <span className="text-gray-600 ml-4"><i className="fas fa-map-marker-alt"></i> Athens, Greece</span>
            <span className="text-gray-600 ml-4">$3500 - $4000</span>
          </div>
        </div>



        <div className="bg-white rounded-lg shadow-lg  border-gray-100 border-2 w-[90%] md:w-[80%] mx-auto">
          <div className="px-6 py-4 ">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm">Posted on April 1, 2024</span>
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">New</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Digital Marketer</h2>
          </div>
          <div className="px-6 py-4 bg-gray-100 ">
            <span className="text-gray-600">Creative Agency</span>
            <span className="text-gray-600 ml-4"><i className="fas fa-map-marker-alt"></i> Athens, Greece</span>
            <span className="text-gray-600 ml-4">$3500 - $4000</span>
          </div>
        </div>




      </div>
    </>
  )
}

export default HotelHome