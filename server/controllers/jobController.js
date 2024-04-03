const jobModel = require("../Models/jobsModel")
const notificationModel=require("../Models/Notification")
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
//get all job
const getjob=async()=>{
    try {
        const jobs= await jobModel.find()
        res.status(200).json({jobs})
    } catch (error) {
          console.log(error)
          res.status(500).json({ message: "cannot find jobs" })
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
//job history


module.exports = {
    postJob,
    getSpecificJob,
    updateSpecificJob,
    deleteSpecificJob,
    getjob,

}
