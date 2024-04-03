const jobModel = require("../Models/jobsModel")

const postJob = async (req, res) => {
    try {
        const {
            jobName,
            Description,
            noOfApplicants,
            jobCreatedDate,
            salary,
            department,
        } = req.body
        await new jobModel({
            jobName,
            Description,
            noOfApplicants,
            jobCreatedDate,
            salary,
            department,
        }).save()
        res.status(200).json({message:"successfull"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"cannot added job"})
    }
}
//get specific job
const getSpecificJob = async (req, res) => {
    try {
        const job_id = req.params.id
        const jobDetails = await jobModel.find({ _id: job_id })
        res.status(200).json({ jobDetails }) // Sending job details as JSON response to front end
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
}

//update specificjob

const updateSpecificJob = async (req, res) => {
    try {
         const job_id = req.params.id
         const updatedInfo = req.body
         await jobModel.findByIdAndUpdate(job_id, updatedInfo, { new: true })
         res.status(200).json({ message: "updated" })
    } catch (error) {
       console.log(error) 
       res.status(500).json({error:"Cannot delete"})
    }
   
}
//delete SpecificJob

const deleteSpecificJob = async (req, res) => {
    try {
          const job_id = req.params.id
          await jobModel.findByIdAndDelete(job_id)
          res.status(200).json({ message: "deleted" }) 
    } catch (error) {
       console.log(error) 
       res.status(500).json({message:"cannot delete"})
    }
  
}
//book a job
const bookJob=async(req,res)=>{
    try {
      const job_id=req.params.id
      const user_id=  req.user.id
      await jobModel.findByIdAndUpdate(job_id, { $push: { users: user_id } },{new:true})
      res.status(200).json({ message: "job_booked" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "cannot book" })
    }
}

//unbook a job
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
    postJob,
    getSpecificJob,
    updateSpecificJob,
    deleteSpecificJob,
    bookJob,
    unbookJob,
}
