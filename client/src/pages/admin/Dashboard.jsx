import React from 'react'
import { useState } from 'react';

const Dashboard = () => {
  const [section, setsection] = useState(false)
  return (
    <div className="bg-gray-100 font-sans">

      {/* Sidebar */}
      <aside className="bg-gray-800 text-gray-200 w-64 min-h-screen fixed top-0 left-0 overflow-y-auto">
        <div className="p-4">
          <h1 className="text-lg font-bold uppercase mb-4">Admin Panel</h1>
          <nav>
            <ul>
              <li><a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={()=>{setsection('Dashboard')}}>Dashboard</a></li>
              <li><a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={()=>{setsection('Hotels')}}>Hotels</a></li>
              <li><a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={()=>{setsection('Users')}}>Users</a></li>
              <li><a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={()=>{setsection('Jobs')}}>Jobs</a></li>
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64"> {/* Adjust margin-left based on sidebar width */}
        {/* Navbar */}
        <nav className="bg-gray-800 text-gray-200 py-4 px-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-semibold">Admin Dashboard</h1>
            {/* Add any additional navigation items if needed */}
          </div>
        </nav>

        {/* Main Content Sections */}

        {
          section=="Dashboard"  &&  < div className="container mx-auto mt-8">

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Total Users Registered</h2>
                <p className="text-3xl font-bold text-blue-600">500</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Total _______ Registered</h2>
                <p className="text-3xl font-bold text-green-600">250</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Users with Job</h2>
                <p className="text-3xl font-bold text-purple-600">150</p>
              </div>
            </div>

            {/* Charts Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">Charts</h2>
              {/* Add charts using your preferred charting library (e.g., Chart.js) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Chart 1</h3>
                  <div className="chart-container">Chart Placeholder</div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Chart 2</h3>
                  <div className="chart-container">Chart Placeholder</div>
                </div>
              </div>
            </div>

            {/* Data Table Section */}
            <section className="mt-8">
              <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold mb-4">User Management</h1>
                <div className="overflow-x-auto">
                  <table className="table-auto w-full bg-white shadow-md rounded-lg">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-100">
                        <td className="border px-4 py-2">1</td>
                        <td className="border px-4 py-2">John Doe</td>
                        <td className="border px-4 py-2">john@example.com</td>
                        <td className="border px-4 py-2">
                          <button className="block-btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Block</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-100">
                        <td className="border px-4 py-2">2</td>
                        <td className="border px-4 py-2">Jane Doe</td>
                        <td className="border px-4 py-2">jane@example.com</td>
                        <td className="border px-4 py-2">
                          <button className="unblock-btn bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Unblock</button>
                        </td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Content Display Section */}
            <section className="mt-8">
              <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-lg font-semibold mb-4">Content Display</h2>
                {/* Content Display Content Goes Here */}
              </div>
            </section>
          </div> 
        }

        {
          section == "Hotels" && <div>Hotels</div>
        }

        {
          section == "Users" && <div>Users</div>
        }



        {
          section == "Jobs" && <div>Jobs</div>
        }







      </div>
    </div >
  );
}

export default Dashboard


