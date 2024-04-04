import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { usercontext } from '../context/userContext'
import axios from 'axios';
import { API_URL } from '../constants';
import Navbar from './Navbar';

const UserPrivate = () => {
    const bool = localStorage.getItem('token') ? true : false;
    const [auth, setAuth] = useState(bool);
    const {setUser} = useContext(usercontext);
    const navigate = useNavigate();
    const config = {
        headers:{
            "authorization":`Bearer ${localStorage.getItem('token')}`
        }
    }
    useEffect(()=>{
        async function getUser(){
            try{
                const {data} = await axios.get(API_URL + 'user/private', config);
                setAuth(true)
                console.log(data);
                setUser(data.user);
            }catch({response}){
                setAuth(false)
                setUser(null)
                localStorage.removeItem('token');
            }
        }
        getUser();
    }, [])
  return (auth?<><Navbar/><Outlet /></>:<Navigate to='/login' />)
}

export default UserPrivate