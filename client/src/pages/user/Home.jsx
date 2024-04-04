import React from 'react'

import { Button } from "flowbite-react";

const Home = () => {
  return (
    <>
      <div className='flex mx-auto px-[5%] flex-col md:flex-row h-screen justify-evenly'>
        <div className='flex flex-col  justify-center text-left '>
          <h1 className='md:text-5xl font-bold text-4xl mb-2'>Event Ease</h1>
          <p className='font-semibold'>Effortless Event Staffing: Where Hotels Find Helpers in a Flash!</p>

          <div className="w-full max-w-3xl flex items-center gap-8 pl-8 bg-white rounded-lg border border-gray-300 mt-6">
            <div className="text-red-600 text-4xl cursor-pointer animate-funny-icon">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <input type="text" placeholder="Search jobs" className="flex-1 py-4  text-black outline-none border-none" />

            <button className="bg-red-500 text-white font-semibold py-4 px-8 rounded-r-lg transition duration-300 hover:letter-spacing-2">
              <a href="#">Search</a>
              <ion-icon name="search-outline" className="search-icon text-white text-3xl"></ion-icon>
            </button>
          </div>


        </div>
        <div className='flex items-center justify-center mt-6'>
          <img src="/images/heroimage.jpg" alt="" className='w-[100%] md:w-[80%] ' />
        </div>
      </div>



      <div className="single-job-items w-[90%] md:w-[70%] mx-auto mb-8 p-6 bg-white shadow-md rounded-lg flex justify-between flex-wrap transition duration-400">
        <div className="company-img mr-6">
          <a href="#"><img src="images/job-search.png" alt="" className="w-12 h-12" /></a>
        </div>
        <div className="job-tittle flex-grow">
          <a href="#" className="text-blue-700 hover:text-indigo-600 transition duration-300">
            <h4 className="text-lg font-semibold hover:text-indigo-600">Digital Marketer</h4>
          </a>
          <ul className="text-sm text-gray-600">
            <li className="inline-block mr-12">Creative Agency</li>
            <li className="inline-block mr-12"><i className="fas fa-map-marker-alt"></i> Athens, Greece</li>
            <li className="inline-block">$3500 - $4000</li>
          </ul>
        </div>
        <div className="items-link items-link2 text-right flex items-center">
          <Button color="blue">Apply</Button>
          <span className="text-gray-500 ml-2">7 hours ago</span>
        </div>
      </div>

      <div className="single-job-items w-[90%] md:w-[70%] mx-auto mb-8 p-6 bg-white shadow-md rounded-lg flex justify-between flex-wrap transition duration-400">
        <div className="company-img mr-6">
          <a href="#"><img src="images/job-search.png" alt="" className="w-12 h-12" /></a>
        </div>
        <div className="job-tittle flex-grow">
          <a href="#" className="text-blue-700 hover:text-indigo-600 transition duration-300">
            <h4 className="text-lg font-semibold hover:text-indigo-600">Digital Marketer</h4>
          </a>
          <ul className="text-sm text-gray-600">
            <li className="inline-block mr-12">Creative Agency</li>
            <li className="inline-block mr-12"><i className="fas fa-map-marker-alt"></i> Athens, Greece</li>
            <li className="inline-block">$3500 - $4000</li>
          </ul>
        </div>
        <div className="items-link items-link2 text-right flex items-center">
          <Button color="blue">Apply</Button>
          <span className="text-gray-500 ml-2">7 hours ago</span>
        </div>
      </div>

      <div className="single-job-items w-[90%] md:w-[70%] mx-auto mb-8 p-6 bg-white shadow-md rounded-lg flex justify-between flex-wrap transition duration-400">
        <div className="company-img mr-6">
          <a href="#"><img src="images/job-search.png" alt="" className="w-12 h-12" /></a>
        </div>
        <div className="job-tittle flex-grow">
          <a href="#" className="text-blue-700 hover:text-indigo-600 transition duration-300">
            <h4 className="text-lg font-semibold hover:text-indigo-600">Digital Marketer</h4>
          </a>
          <ul className="text-sm text-gray-600">
            <li className="inline-block mr-12">Creative Agency</li>
            <li className="inline-block mr-12"><i className="fas fa-map-marker-alt"></i> Athens, Greece</li>
            <li className="inline-block">$3500 - $4000</li>
          </ul>
        </div>
        <div className="items-link items-link2 text-right flex items-center">
          <Button color="blue">Apply</Button>
          <span className="text-gray-500 ml-2">7 hours ago</span>
        </div>
      </div>
    </>




  )
}

export default Home