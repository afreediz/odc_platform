import React, { useState, useEffect } from 'react'
import {Table} from 'flowbite-react'
import { API_URL } from '../../constants'
import axios from 'axios'

const Listjobs = () => {
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
        setData(res.data)
      }catch(error){
        setError(error.message)
      }
    }
    getJobs()
  },[])
  console.log(data);
  return (
    <div>
      <h1 className='md:text-3xl text-xl font-semibold  text-green-600  md:w-[60%] sm:w-[80%] w-[90%] mx-auto my-4'>All Jobs</h1>
       <div className="overflow-x-auto md:w-[60%] sm:w-[80%] w-[90%] mx-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Job</Table.HeadCell>
              <Table.HeadCell>Hotel</Table.HeadCell>
              <Table.HeadCell>End Date</Table.HeadCell>
              <Table.HeadCell>Salary</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data && data.map((job)=>{
                return <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell><a href={`/user/job/${job._id}`}>{job.title}</a> </Table.Cell>
                <Table.Cell>{job.hotel}</Table.Cell>
                <Table.Cell>{job.jobEndDate}</Table.Cell>
                <Table.Cell>{job.salary}</Table.Cell>
              </Table.Row>
              })}
            </Table.Body>
          </Table>
        </div>
    </div>
  )
}

export default Listjobs