import React from 'react'

const Home = () => {
  return (
    <div className='flex mx-auto px-[5%] flex-col md:flex-row h-screen justify-evenly'>
      <div className='flex flex-col  justify-center text-left '>
        <h1 className='md:text-5xl font-bold text-4xl mb-2'>Event Ease</h1>
        <p className='font-semibold'>Effortless Event Staffing: Where Hotels Find Helpers in a Flash!</p>
      </div>
      <div className='flex items-center justify-center mt-6'>
        <img src="/images/heroimage.jpg" alt="" className='w-[100%] md:w-[80%] '/>
      </div>
    </div>
  )
}

export default Home