import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {useCookies} from 'react-cookie'
import { API_URL } from '../constants';
import { usercontext } from '../context/userContext';

const Private = () => {
    const {setUser} = useContext(usercontext)
    const navigate = useNavigate()
    const [error, setError] = useEffect('')
    const [cookies, removeCookies] = useCookies()
    useEffect(()=>{
      if(!cookies.token){
        navigate('/login')
      }
      async function getDetails(){
        try{
          const res = await axios.get(API_URL+'user',{
            withCredentials:true
          })
          setUser(res.data.message)
        }catch({response}){
          navigate('/login')
          console.log(response.data.message);
        }
      }
      getDetails()
    },[])
  return (
    <Outlet />
  )
}

export default Private