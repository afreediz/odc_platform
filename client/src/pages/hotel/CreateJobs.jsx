import React ,{useState} from 'react'
import { Button, Checkbox, Label, TextInput ,Datepicker ,Textarea } from "flowbite-react";



const CreateJobs = () => {

  const [chosenDate, setChosenDate] = useState('');

  

  const handleDateChange = (date) => {
    setChosenDate(date);
  };



  return (
    <div className='flex mx-auto px-[5%] flex-col-reverse justify-end  md:flex-row h-screen md:justify-evenly'>
      <div className='flex flex-col  justify-center text-left w-[90%] md:w-[40%]'>
        <h1 className='md:text-4xl text-2xl font-semibold md:my-6 my-3 text-center'>Create new job</h1>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Job Title" />
            </div>
            <TextInput id="title" type="text"  required />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Choose Date" />
            </div>
            <Datepicker onChange={handleDateChange}/>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Description" />
            </div>
            <Textarea id="comment"  required rows={4} />
          </div>
         
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div className='flex items-center justify-center mt-6 w-[90%] md:w-[40%]'>
        <img src="/images/create_job.jpg" alt="" />
      </div>
    </div>
  )
}

export default CreateJobs