import React, { useEffect, useState } from 'react'
import { API_URL } from '../../constants'
import axios from 'axios'

const profile = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState("") 
  useEffect(()=>{
    async function loadData(){
      try{
        const res = await axios.get(API_URL+'user/profile');
        setData(res.data.user)
      }catch({response}){
        setError(response.data.message)
      }
    }
    loadData()
  },[])
  return (
    <div>user profile</div>
  )
}

export default profile