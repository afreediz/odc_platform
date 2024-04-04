import React from 'react'

const JobsDescription = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Job Name</p>
                            <p className="text-gray-800">Digital Marketer</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Description</p>
                            <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae pulvinar velit.</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Number of Applicants</p>
                            <p className="text-gray-800">25</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Job Created Date</p>
                            <p className="text-gray-800">April 1, 2024</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Hotel</p>
                            <p className="text-gray-800">Hotel Name</p>
                            {/* Additional hotel information can be displayed here */}
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Salary</p>
                            <p className="text-gray-800">$3500 - $4000</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Department</p>
                            <p className="text-gray-800">Marketing</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Users</p>
                            <div className="flex items-center">
                                <p className="text-gray-800">John Doe</p>
                                <span className="ml-2 text-gray-500">(Present)</span>
                            </div>
                            {/* Additional users can be displayed here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsDescription