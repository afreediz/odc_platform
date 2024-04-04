const hotelModel= require("../Models/hotelsModel")
const Job=require("../Models/jobsModel")
const bcrypt = require("bcrypt")

const hotelPrivate = (req, res)=> {
   res.status(200).json({message:"success",hotel:req.hotel})
}

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
       const token = hotel.generate_token();
       res.status(200).json({message:"login successfull",hotel:hotel, token:token})
   } catch (error) {
       console.log(error)
       res.status(500).json({ message: "login failed" })
   }
}

const hotel_jobs = async(req,res)=> {
   try {
      console.log(req.hotel);
      const hotel_job_details= await Job.find({hotel:req.hotel._id})
      res.status(200).json(hotel_job_details)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Cannot get job result" })
   }
}
//show details user present and job desc while clicking 

const hotel_profile = async(req,res)=> {
    try {
      const hotel_profile= await hotelModel.findOne({_id:req.hotel.id})
      res.status(200).json(hotel_profile)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Cannot get job result" })
   }
}
//hotel profile updation
const hotel_profile_update = async(req,res)=> {
    try {
      const hotel_id=req.hotel.id
      const updateInfo=req.body
      await hotelModel.findByIdAndUpdate(hotel_id,updateInfo)
      res.status(200).json({response:"updated"})
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Cannot update job result" })
   }
}



//cancel jobs
const canceljobs = async (req, res) => {
    try {
        const job_id=req.params.id  
        await Job.findByIdAndDelete(job_id)
        res.status(200).json({ response: "updated" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Cannot update job result" })
    }
}

const create_job = async(req, res) => {
   try{
      const {title, salary, desc, date, noOfApplicants} = req.body;
      const job = new Job({
         title,
         salary,
         desc,
         noOfApplicants,
         jobCreatedDate:new Date(),
         jobEndDate:date,
         hotel:req.hotel._id
      })
      await job.save()
      res.status(200).json({message:"successfull"})
   }catch(error){
      console.log(error);
      res.status(500).json({message:"failed, internal error"})
   }
}
const hotel_job = async(req, res)=>{
   try {
      console.log('hotel job');
      const job_id = req.params.id
      console.log(job_id);
      const jobDetails = await Job.findOne({ _id: job_id })
      res.status(200).json(jobDetails) // Sending job details as JSON response to front end
   } catch (error) {
   console.log(error)
   res.status(500).json({ error: error.message })
   }
}

module.exports = {
    hotel_register,
    hotel_login,
    hotel_profile,
    hotel_jobs,
    hotel_profile_update,
    canceljobs,
    hotelPrivate,
    create_job,
    hotel_job
}