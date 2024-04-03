const userModel=require("../Models/userModel")
const jobModel=require("../Models/jobsModel")
const userRegister =async(req,res)=>{
  try {
    const{name,dob,state,district,address,phone,email,password,}=req.body
    let emailExists=await userModel.findOne({email:email})
    if(emailExists) return res.josn({response:"emailExists"})
    const hashedPassword = await bcrypt.hash(password, 10)
    await new userModel({
        name,
        dob,
        state,
        district,
        address,
        phone,
        email,
        password: hashedPassword,
    }).save()
    res.status(200).json({message:"successfull"})
  } catch (error) {
     console.log(error)
     res.status(500).json({message:"add user failed"})
  }
}

const userLogin=async(req,res)=>{
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email: email })
    if(!user) return res.status(404).json({message:"email doesnt exist"})
    const matchPassword = await bcrypt.compare(
      password,
      user.password
    )
    if (matchPassword) {
      res.status(200).josn({response:"Logined"})
    } else {
      res.status(200).json({response:"incorrectPassword"})
    }

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message:"login failed"})
  }
}

//get specific job
const get_profile = async(req,res)=> {
   try {
    const profileDetails= await userModel.findOne({_id:req.user.id})
    res.status(200).json({profileDetails})
   } catch (error) {
    console.log(error)
     res.status(500).json({message:"cannot get the profile"})
   }
}

const update_profile = async(req,res)=> {
  try {
    const updatedInfo=req.body
    await userModel.findByIdAndUpdate(req.user.id, updatedInfo,{new:true})
     res.status(200).json({ response:"updated" })
    
  } catch (error) {
       console.log(error)
       res.status(500).json({ message: "cannot update profile" })
  }
}

const delte_profile = async(req,res)=> {
  try {
    await findByIdAndDelete(req.user.id)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "cannot delete profile" })
  }
}

//get all the past job that the user applied
const job_history=async(req,res)=>{
    try {
      await jobModel.find({users:{$elemMatch:{$eq:req.user._id}}})
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "cannot get job" })
    }
}

const bookJob = async (req, res) => {
    try {
        const job_id = req.params.id
        const user_id = req.user.id
        const job = await jobModel.findById(job_id)
        if (job && job.users && job.users.length <= job.noOfApplicants) {
            // Update the document and get the updated document
            await jobModel.findByIdAndUpdate(
                job_id,
                { $push: { users: user_id } },
                { new: true }
            )
            res.status(200).json({ response: "successful" })
        } else
            res.status(400).json({
                message:
                    "Cannot book the job. Maximum users reached or job not found.",
            })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const unbookJob = async (req, res) => {
    try {
        const job_id = req.params.id
        const user_id = req.user.id
        await jobModel.findByIdAndUpdate(
            job_id,
            { $pull: { users: user_id } },
            { new: true }
        )
        res.status(200).json({ message: "job_booked" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "cannot book" })
    }
}



module.exports = {
    userRegister,
    userLogin,
    get_profile,
    update_profile,
    delte_profile,
    job_history,
    bookJob,
    unbookJob,
}
