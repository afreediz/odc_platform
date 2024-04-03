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
                [name]: value
            }
        })
    }
    const on_submit = async () => {
        try {
            const response = await axios.post(API_URL + 'auth/login?type=user', {
                ...data
            })
            setUser(response.data.user)
            navigate('/')
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
                        on_submit()
                    }}>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" required name='email'/>
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput id="password1" type="password" required name='password' />
                        </div>


                        <Button type="submit" className='bg-blue-600 text-white rounded-md mt-5 w-[200px] mx-auto'>Login</Button>

                        <a href="signup" className='md:text-[15px] text-xs text-blue-500'>Create new Account</a>

                    </form>
                </Tabs.Item>

                <Tabs.Item active title="Hotels" >
                    <form className="flex max-w-md flex-col gap-4" onSubmit={(e)=>{
                        e.preventDefault()
                        on_submit()
                    }}>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" required name='email' />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="hotel_num" value="Hotel number" />
                            </div>
                            <TextInput id="hotel_num" type="number" required name='hotel_num' />
                        </div>


                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput id="password1" type="password" required  name='passowrd'/>
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