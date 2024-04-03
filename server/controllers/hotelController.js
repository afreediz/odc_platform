const hotelModel= require("../Models/hotelsModel")
const bcrypt = require("bcrypt")

const hotel_register = async(req,res)=>{
   try {
      const {name,email,phone,state,district,address,description,hotelNumber,password,}=req.body
      const alreadyExists=await hotelModel.findOne({
        hotelName:hotelName
      })
      if(alreadyExists) return res.json({response:"exists"})
      const hashedPassword = await bcrypt.hash(Password, 10)
      await new hotelModel({name,email,phone,state,district,address,description,hotelNumber,password,
      }).save()
      res.status(200).json({message:"successfull"})
   } catch (error) {
    console.log(error)
    res.status(500).json({message:"cannot logged in"})
   }
}
const hotel_login = async()=> {}

const hotel_jobs = async()=> {}

const hotel_profile = ()=> {}

module.exports={
    hotel_register,
    hotel_login,
    hotel_profile,
    hotel_jobs
}