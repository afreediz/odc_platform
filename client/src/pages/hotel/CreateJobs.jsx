import React ,{useState} from 'react'
import { Button, Checkbox, Label, TextInput ,Datepicker ,Textarea } from "flowbite-react";
import axios from 'axios';
import { API_URL } from '../../constants';



const CreateJobs = () => {

  const [error, setError] = useState('')
  const [chosenDate, setChosenDate] = useState('');
  const handleDateChange = (date) => {
    setChosenDate(date);
  };
  const [data, setData] = useState({
    title:"",
    salary:"",
    desc:"",
    noOfApplicants:""
  })
  const onchange = (e)=> {
    const {name, value} = e.target
    setData((old_data)=>{
      return {
        ...old_data,
        [name]:value
      }
    })
  }
  const create_job = ()=> {
    try{
      async function loadData(){
        const res = await axios.post(API_URL+'hotel/jobs',{
          ...data,
          date:chosenDate
        },{
          headers:{
            "authorization":`Bearer ${localStorage.getItem('token')}`
          }
        })
      }
      loadData()
    }catch({response}){
      console.log(response);
      setError(response.data.message)
    }
  }
  return (
    <div className='flex mx-auto px-[5%] flex-col-reverse justify-end  md:flex-row h-screen md:justify-evenly'>
      {error}
      <div className='flex flex-col  justify-center text-left w-[90%] md:w-[40%]'>
        <h1 className='md:text-4xl text-2xl font-semibold md:my-6 my-3 text-center'>Create new job</h1>
        <form className="flex max-w-md flex-col gap-4" onSubmit={(e)=>{
          e.preventDefault()
          create_job()
        }}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Job Title" />
            </div>
            <TextInput id="title" value={data.title} name='title' onChange={onchange} type="text"  required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="salary" value="Job Salary" />
            </div>
            <TextInput id="salary" value={data.salary} onChange={onchange} type="text"  name='salary' required />
          </div>          
          <div>
            <div className="mb-2 block">
              <Label htmlFor="applicants" value="Allowed number of applicants" />
            </div>
            <TextInput id="applicants" value={data.noOfApplicants} onChange={onchange} type="text"  name='noOfApplicants' required />
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
            <Textarea id="comment" value={data.desc} onChange={onchange} name='desc' required rows={4} />
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