import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { usercontext } from '../context/userContext'
import axios from 'axios';
import { API_URL } from '../constants';
import Navbar from './Hotelnavbar';

const HotelPrivate = () => {
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
                const {data} = await axios.get(API_URL + 'hotel/private', config);
                setAuth(true)
                console.log(data);
                setUser(data.user);
            }catch({response}){
                setAuth(false)
                setUser(null)
                // localStorage.removeItem('token');
            }
        }
        getUser();
    }, [bool, navigate])
  return (auth?<><Navbar/><Outlet /></>:<Navigate to='/login' />)
}

export default HotelPrivate