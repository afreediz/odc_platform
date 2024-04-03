import React, { useEffect, useState } from 'react'
import { API_URL } from '../../constants'
import axios from 'axios'

const HotelProfile = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  const [showJobPostings, setShowJobPostings] = useState(false);

  const toggleJobPostings = () => {
    setShowJobPostings(!showJobPostings);
  };

  useEffect(() => {
    async function loadData() {
      try {
        const res = await axios.get(API_URL + 'hotel/profile');
        //setData(res.data.user)
      } catch ({ response }) {
        //setError(response.data.message)
      }
    }
    loadData()
  }, [])
  return (
    <div className="bg-gray-100 font-sans">
      <div className="container mx-auto p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-800 text-white">
            <h2 className="text-2xl font-semibold">Hotel Name</h2>
          </div>
          <div className="px-6 py-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Email:</label>
              <p className="text-gray-700">hotel@example.com</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Phone:</label>
              <p className="text-gray-700">+1234567890</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">State:</label>
              <p className="text-gray-700">State</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">District:</label>
              <p className="text-gray-700">District</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Address:</label>
              <p className="text-gray-700">Address</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Description:</label>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Hotel Number:</label>
              <p className="text-gray-700">12345</p>
            </div>
            <button
              onClick={toggleJobPostings}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 mt-4"
            >
              {showJobPostings ? 'Hide Job Postings' : 'Show Job Postings'}
            </button>
            <div id="jobPostingsTable" className={`job-postings-table mt-4 ${showJobPostings ? '' : 'hidden'}`}>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-800 text-white">Title</th>
                    <th className="py-2 px-4 bg-gray-800 text-white">Date</th>
                    <th className="py-2 px-4 bg-gray-800 text-white">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4">Job Title 1</td>
                    <td className="py-2 px-4">01/01/2024</td>
                    <td className="py-2 px-4">Active</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Job Title 2</td>
                    <td className="py-2 px-4">02/01/2024</td>
                    <td className="py-2 px-4">Closed</td>
                  </tr>
                  {/* More job postings here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HotelProfile