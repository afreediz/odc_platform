import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../constants';
import axios from 'axios'
import { Button } from 'flowbite-react';
const JobsDescription = () => {
    const {id} = useParams();
    console.log(id);
    const [data, setData] = useState()
    const [error, setError] = useState("")
    useEffect(()=>{
        async function geteData(){
            try{
                const res = await axios.get(API_URL+'jobs/'+id,{
                    headers:{    
                        "Authorization":`Bearer ${localStorage.getItem('token')}`
                    }
                })
                setData(res.data)
            }catch(error){
                console.log(error);
                setError(error.message)
            }
        }
        geteData()
    },[])
    const bookJob = async()=> {
        try{
            await axios.post(API_URL+'/job/book/'+id,{
                headers:{
              "Authorization":`Bearer ${localStorage.getItem('token')}`
                }
            });
        }catch(error){
            console.log(error);
        }
    }
    console.log(data);
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className=" bg-red-100 text-red-800">{error}</div>
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">{data && data.title}</p>
                            <p className="text-gray-800">{data && data.title}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Description</p>
                            <p className="text-gray-800">{data && data.desc}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Number of Applicants</p>
                            <p className="text-gray-800">{data && data.noOfApplicants}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Job Created Date</p>
                            <p className="text-gray-800">{data && data.jobEndDate}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Hotel</p>
                            <p className="text-gray-800">{data && data._id}</p>
                            {/* Additional hotel information can be displayed here */}
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Salary</p>
                            <p className="text-gray-800">{data && data.salary}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Users applied</p>
                            <div className="flex items-center">
                                <p className="text-gray-800">{data && data.users.length}</p>
                                <span className="ml-2 text-gray-500">(Present)</span>
                            </div>
                            {/* Additional users can be displayed here */}
                            <Button onClick={bookJob} >book</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsDescription