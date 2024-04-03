const hotelModel= require("../Models/hotelsModel")
const bcrypt = require("bcrypt")

const addingHotel=async(req,res)=>{
   try {
      const {
          hotelName,
          userName,
          Email,
          phone,
          state,
          District,
          Address,
          Description,
          hotelNumber,
          Password,
      }=req.body
      const alreadyExists=await hotelModel.findOne({
        hotelName:hotelName
      })
      if(alreadyExists){
         res.json({response:"exists"})
      }else{
         const hashedPassword = await bcrypt.hash(Password, 10)
        await new hotelModel({
            hotelName: hotelName,
            userName: userName,
            Email: Email,
            phone: phone,
            state: state,
            District: District,
            Address: Address,
            Description: Description,
            hotelNumber: hotelNumber,
            Password: hashedPassword
        }).save().then(()=>res.json({response:"added"})).catch((err)=>console.log(err))
      }
    
   } catch (error) {
    console.log(error)
   }
}
module.exports={
    addingHotel,
}