import React, { useState,Link } from 'react'
import { useContext } from 'react'
import { usercontext } from '../context/userContext'
import { API_URL } from '../constants';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Label, TextInput, Tabs } from "flowbite-react";


const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(usercontext);
    const [hotelNum, setHotelNum] = useState(0);
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    // 2 input boxes with names : email and password targetting onChange to onchange 
    const onchange = (e) => {
        const { name, value } = e.target;
        setData((old_data) => {
            return {
                ...old_data,
                [name]: value
            }
        })
    }
    const on_user_submit = async () => {
        console.log(data);
        try {
            const response = await axios.post(API_URL + 'user/login', {
                ...data
            })
            localStorage.setItem("token",response.data.token)
            setUser(response.data.user)
            navigate('/user')
        } catch ({ response }) {
            // setError(response.data.message)
        }
    }
    const on_hotel_submit = async () => {
        try {
            const response = await axios.post(API_URL + 'hotel/login', {
                ...data,
                hotelNum
            })
            localStorage.setItem("token",data.token)
            setUser(response.data.hotel)
            navigate('/hotel')
        } catch ({ response }) {
            setError(response.data.message)
        }
    }

    return (
        <div className='xl:max-w-[40%] md:max-w-[60%] max-w-[90%] md:m-6 md:p-6 m-3 p-3 border-sky-500'>
            <h1 className='md:text-4xl   text-2xl font-semibold md:my-6 my-3'>Login</h1>
            <Tabs aria-label="Default tabs" style="default" className=''>
                <Tabs.Item active title="User" >
                    <form className="flex max-w-md flex-col gap-4" onSubmit={(e)=>{
                        e.preventDefault()
                        on_user_submit()
                    }}>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" onChange={onchange} required value={data.email} name='email'/>
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput id="password1" type="password" onChange={onchange} required value={data.password} name='password' />
                        </div>


                        <Button type="submit" className='bg-blue-600 text-white rounded-md mt-5 w-[200px] mx-auto'>Login</Button>

                        <a href="signup" className='md:text-[15px] text-xs text-blue-500'>Create new Account</a>

                    </form>
                </Tabs.Item>

                <Tabs.Item active title="Hotels" >
                    <form className="flex max-w-md flex-col gap-4" onSubmit={(e)=>{
                        e.preventDefault()
                        on_hotel_submit()
                    }}>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" onChange={onchange} required name='email' />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="hotel_num" value="Hotel number" />
                            </div>
                            <TextInput id="hotel_num" type="number" value={hotelNum} onchange={(e)=>{setHotelNum(e.target.value)}} required name='hotel_num' />
                        </div>


                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput id="password1" type="password" onChange={onchange} required  name='passowrd'/>
                        </div>

                        <Button type="submit" className='bg-blue-600 text-white rounded-md mt-5 w-[200px] mx-auto'>Login</Button>

                        <a href="signup" className='md:text-[15px] text-xs text-blue-500'>Create new Account</a>
                    </form>
                </Tabs.Item>

            </Tabs>


        </div>

    )
}

export default Login