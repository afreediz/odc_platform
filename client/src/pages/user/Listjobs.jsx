import React from 'react'
import {Table} from 'flowbite-react'

const Listjobs = () => {
  return (
    <div>
      <h1 className='md:text-3xl text-xl font-semibold  text-green-600  md:w-[60%] sm:w-[80%] w-[90%] mx-auto my-4'>All Jobs</h1>
       <div className="overflow-x-auto md:w-[60%] sm:w-[80%] w-[90%] mx-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Job</Table.HeadCell>
              <Table.HeadCell>Hotel</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Salary</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>Catering</Table.Cell>
                <Table.Cell>Royal Plaza</Table.Cell>
                <Table.Cell>27/06/2024</Table.Cell>
                <Table.Cell>750</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>Catering</Table.Cell>
                <Table.Cell>Royal Plaza</Table.Cell>
                <Table.Cell>27/06/2024</Table.Cell>
                <Table.Cell>750</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>Catering</Table.Cell>
                <Table.Cell>Royal Plaza</Table.Cell>
                <Table.Cell>27/06/2024</Table.Cell>
                <Table.Cell>750</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
    </div>
  )
}

export default Listjobs