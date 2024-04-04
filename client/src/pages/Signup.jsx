import React, { useState } from 'react'
import { Button, Label, TextInput, Datepicker, Select, Tabs, Textarea } from "flowbite-react";
import axios from 'axios'
import { API_URL } from '../constants';


const Signup = () => {
    const [error, setError] = useState("")
    const [selectedState, setSelectedState] = useState(''); // State to store the selected state
    const [districts, setDistricts] = useState([]); // State to store the districts based on the selected state
    const [hotelNum, setHotelNum] = useState(0)
    const onchange = (e)=> {
        const {name, value} = e.target;
        setData((old_data)=>{return {
            ...old_data,
            [name]: value
        }})
    }
    const [data, setData] = useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        address:'',
        district:''
    })


    console.log(data);
    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setSelectedState(selectedState);


        if (selectedState === 'Kerala') {
            setDistricts([
                "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam", "Idukki", "Ernakulam",
                "Thrissur", "Palakkad", "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
            ]);
        } else if (selectedState === 'Tamil Nadu') {
            setDistricts([
                "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tiruppur", "Erode", "Vellore",
                "Thoothukudi", "Thanjavur", "Kancheepuram", "Tirunelveli", "Kanyakumari", "Virudhunagar"
            ]);
        } else {
            setDistricts([]);
        }
    };

    const on_user_submit = async()=> {
        try{
            console.log('at', data);
            const res = await axios.post(API_URL+'user/register',{
                ...data,
                state:selectedState,
            })
        }catch({response}){
            console.log(response);
            setError(response.data.message)
        }
    }
    const on_hotel_submit = async()=> {
        try{
            const res = await axios.post(API_URL+'hotel/register',{
                ...data,
                state:selectedState,
                hotelNum
            })
        }catch({response}){
            console.log(response);
            setError(response.data.message)
        }
    }

    return (
        <div className='xl:max-w-[40%] md:max-w-[60%] max-w-[90%] md:m-6 md:p-6 m-3 p-3 border-sky-500'>
            <div className=" bg-red-100 text-red-800">{error}</div>
            <h1 className='md:text-4xl   text-2xl font-semibold md:my-6 my-3'>Signup</h1>
            <Tabs aria-label="Default tabs" style="default" className=''>
                <Tabs.Item active title="User" >
                    <form className="flex max-w-md flex-col gap-4" onSubmit={(e)=>{
                        e.preventDefault()
                        on_user_submit()
                    }}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Name" />
                            </div>
                            <TextInput id="username" value={data.name} name='name' type="text" onChange={onchange} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" value={data.email} name='email' type="email" onChange={onchange} required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="phone" value="Phone" />
                            </div>
                            <TextInput id="phone" name='phone' value={data.phone} onChange={onchange} type="number" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput id="password1" name='password' value={data.password} onChange={onchange} type="password" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label value="Date of Birth (Atleast 18 years old)" />

                            </div>
                            {/* <Datepicker maxDate={new Date(2005, 11, 31)} value={data.dob} onChange={onchange} name="dob" /> */}
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="countries" value="Select your State" />
                            </div>
                            <Select id="states" value={selectedState} required onChange={handleStateChange}>
                                <option value="">Choose</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Puducherry">Puducherry</option>
                            </Select>

                        </div>

                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="countries" value="Select your district" />
                            </div>
                            <Select id="districts" onChange={onchange} name='district' value={data.district}>
                                <option value="">Select District</option>
                                {districts.map((district, index) => (
                                    <option key={index} value={district}>{district}</option>
                                ))}
                            </Select>
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="addresss" value="Address" onChange={onchange} />
                            </div>
                            <TextInput id="address" value={data.address} name='address' onChange={onchange} type="text" required />
                        </div>
                        <Button type="submit">Signup</Button>
                        
                        <a href="login" className='md:text-[15px] text-xs text-blue-500'>Login</a>

                    </form>
                </Tabs.Item>
                <Tabs.Item active title="Hotel" >
                    <form className="flex max-w-md flex-col gap-4" onSubmit={(e)=>{
                        e.preventDefault()
                        on_hotel_submit()
                    }}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="hotelname" value="Hotel Name" />
                            </div>
                            <TextInput id="hotelname" value={data.name} name='name' onChange={onchange} type="text" required />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput id="email" value={data.email} name='email' onChange={onchange} type="email" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="phone" value="Phone" />
                            </div>
                            <TextInput id="phone" value={data.phone} name='phone' onChange={onchange} type="number" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput id="password1" value={data.password} onChange={onchange} name='password' type="password" required />
                        </div>

                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="countries" value="Select your State" />
                            </div>
                            <Select id="states" value={selectedState} required onChange={handleStateChange}>
                                <option value="">Choose</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Puducherry">Puducherry</option>
                            </Select>

                        </div>

                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="countries" value="Select your district" />
                            </div>
                            <Select id="districts">
                                <option value="">Select District</option>
                                {districts.map((district, index) => (
                                    <option key={index} value={district}>{district}</option>
                                ))}
                            </Select>
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="addresss" value="Address" />
                            </div>
                            <TextInput id="address" value={data.address} name='address' onChange={onchange} type="text" required />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="hotel_num" value="Hotel number" />
                            </div>
                            <TextInput id="hotel_num" name='hotel_num' type="number" required value={hotelNum} onChange={(e)=>{setHotelNum(e.target.value)}} />
                        </div>
                        <Button type="submit">Signup</Button>
                        <a href="login" className='md:text-[15px] text-xs text-blue-500'>Login</a>

                    </form>
                </Tabs.Item>

            </Tabs>


        </div>

    )
}

export default Signup