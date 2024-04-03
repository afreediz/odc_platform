import React, { useState } from 'react'
import { useContext } from 'react'
import { usercontext } from '../context/userContext'
import { API_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {setUser} = useContext(usercontext);
  const [data, setData] = useState({
    email:"",
    password:""
  })
  const [error, setError] = useState("")
  // 2 input boxes with names : email and password targetting onChange to onchange 
  const onchange = (e)=> {
    const {name, value} = e.target;
    setData((old_data)=>{
      return {
        [name]:value
      }
    })
  }
  const on_submit = async()=> {
    try{
      const response = await axios.post(API_URL+'auth/login?type=user',{
        ...data
      })
      setUser(response.data.user)
      useNavigate('/')
    }catch({response}){
      setError(response.data.message)
    }
  }
  return (
    <div>Login</div>
  )
}

export default Login