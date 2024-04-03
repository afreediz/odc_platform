const hotelModel= require("../Models/hotelsModel")
const bcrypt = require("bcrypt")

const addingHotel=async(req,res)=>{
   try {
      const {
          name,
          email,
          phone,
          state,
          district,
          address,
          description,
          hotelNumber,
          password,
      }=req.body
      const alreadyExists=await hotelModel.findOne({
        hotelName:hotelName
      })
      if(alreadyExists){
         res.json({response:"exists"})
      }else{
         const hashedPassword = await bcrypt.hash(Password, 10)
        await new hotelModel({
         name,
         email,
         phone,
         state,
         district,
         address,
         description,
         hotelNumber,
         password,
        }).save().then(()=>res.json({response:"added"})).catch((err)=>console.log(err))
      }
    
   } catch (error) {
    console.log(error)
   }
}
module.exports={
    addingHotel,
}