import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { API_URL } from '../../constants';

const HotelHome = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  useEffect(()=>{
    async function getJobs(){
      try{
        const res = await axios.get(API_URL+'jobs',{
          headers:{
            "authorization":`Bearer ${localStorage.getItem('token')}`
          }
        })
        setData(res.data.filter(job => job.noOfApplicants < 10))
      }catch(error){
        setError(error.message)
      }
    }
    getJobs()
  },[])
  return (
    <>
      <div className='flex mx-auto px-[5%] flex-col md:flex-row h-screen justify-evenly'>
        <div className="bg-red-100 text-red-100">{error}</div>
        <div className='flex flex-col  justify-center text-left '>
          <h1 className='md:text-5xl font-bold text-4xl mb-2'>Hotel Home page</h1>
          <p className='font-semibold'>Effortless Event Staffing: Where Hotels Find Helpers in a Flash!</p>
        </div>
        <div className='flex items-center justify-center mt-6 w-[100%] sm:w-[50%]'>
          <img src="/images/Hotel.jpg" alt="" className='w-[100%] md:w-[80%] ' />
        </div>
      </div>

      <div className='flex flex-col gap-4 bg-blue-100 py-5'>
        {data && data.map((job)=>{ return(<div className="bg-white rounded-lg shadow-lg  border-gray-100 border-2 w-[90%] md:w-[80%] mx-auto">
          <div className="px-6 py-4 ">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm">{job.title}</span>
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">New</span>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-100 ">
            <span className="text-gray-600">{JSON.desc}</span>
            <span className="text-gray-600 ml-4"><i className="fas fa-map-marker-alt"></i> Athens, Greece</span>
            <span className="text-gray-600 ml-4">{job.salary}</span>
          </div>
        </div>)})}


      </div>
    </>
  )
}

export default HotelHome