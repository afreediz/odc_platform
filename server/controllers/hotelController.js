const hotelModel= require("../Models/hotelsModel")
const jobMoel=require("../Models/jobsModel")
const bcrypt = require("bcrypt")

const hotel_register = async(req,res)=>{
   try {
      const {name,email,phone,state,district,address,description,hotelNumber,password,}=req.body
      const alreadyExists=await hotelModel.findOne({
        name:name
      })
      if(alreadyExists) return res.json({response:"exists"})
      const hashedPassword = await bcrypt.hash(password, 10)
      await new hotelModel({name,email,phone,state,district,address,description,hotelNumber,password:hashedPassword,
      }).save()
      res.status(200).json({message:"successfull"})
   } catch (error) {
    console.log(error)
    res.status(500).json({message:"cannot logged in"})
   }
}
const hotel_login = async(req,res)=> {
   try {
       const { email, password } = req.body
       const hotel = await hotelModel.findOne({ email: email })
       if (!hotel) return res.status(404).json({ message: "email doesnt exist" })
       const matchPassword = await bcrypt.compare(password, hotel.password)
       if (!matchPassword) return res.status(404).json({message:"password not match"})
       const token = hotel.generateToken();
       res.status(200).json({message:"login successfull",hotel:hotel, token:token})
   } catch (error) {
       console.log(error)
       res.status(500).json({ message: "login failed" })
   }
}

const hotel_jobs = async(req,res)=> {
   try {
      const hotel_job_details= await jobMoel.findOne({hotel:req.hotel.id})
      res.status(200).json({hotel_job_details})
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Cannot get job result" })
   }
}
//show details user present and job desc while clicking 

const hotel_profile = async(req,res)=> {
    try {
      const hotel_profile= await hotelModel.findOne({_id:req.hotel.id})
      res.status(200).json({ hotel_profile })
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Cannot get job result" })
   }
}

//hotel profile updation
//cancel jobs

module.exports={
    hotel_register,
    hotel_login,
    hotel_profile,
    hotel_jobs
}