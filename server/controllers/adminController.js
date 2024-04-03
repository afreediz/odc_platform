const userModel=require('../Models/userModel')
const hotelModel=require('../Models/hotelsModel')
const blockUser=async(req,res)=>{
   try {
    const user_id=req.params.id
    await userModel.updateOne(user_id,{block:true})
   } catch (error) {
      console.log(error)
   }
}
const unblockUser=async(req,res)=>{
   try {
    const user_id=req.params.id
    await userModel.updateOne(user_id,{block:false})
   } catch (error) {
      console.log(error)
   }
}
const blockHotel=async(req,res)=>{
   try {
    const hotel_id=req.params.id
    await hotelModel.updateOne(hotel_id, { block: true })
   } catch (error) {
      console.log(error)
   }
}
const unblockHotel=async(req,res)=>{
   try {
    const hotel_id=req.params.id
    await hotelModel.updateOne(hotel_id, { block: false })
   } catch (error) {
      console.log(error)
   }
}
const getAllHotel=async(req,res)=>{
   try {
     const hotel= await hotelModel.find()
      res.status(200).json({hotel})
   } catch (error) {
     console.log(error)
   }
}
const getAllUser=async(req,res)=>{
   try {
     const hotel= await userModel.find()
      res.status(200).json({hotel})
   } catch (error) {
     console.log(error)
   }
}

module.exports={
   getAllHotel,
   getAllUser,
   blockHotel,
   unblockHotel,
   blockUser,unblockUser 
}