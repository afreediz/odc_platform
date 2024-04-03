const jobModel = require("../Models/jobsModel")
const notificationModel = require("../Models/Notification")
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
        res.status(200).json({ message: "successfull" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "cannot added job" })
    }
}
//get all job
const getjob = async () => {
    try {
        const jobs = await jobModel.find()
        res.status(200).json({ jobs })
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
        console.log(error)
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
        res.status(500).json({ error: "Cannot delete" })
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
        res.status(500).json({ message: "cannot delete" })
    }
}
//job history
const job_history = async (req, res) => {
    try {
        const jobs = await jobModel.find({ hotel: req.hotel._id })
        res.status(200).json({ jobs })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "cannot get history" })
    }
}

//present and reject(add notification to user)
const abscent = async (req, res) => {
    try {
        const job_id = req.job.id
        await jobModel.updateOne(
            { _id: job_id, "users.employee": userId },
            { $set: { "users.$.present": true } }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "cannot update" })
    }
}
const userPresent = async (req, res) => {
    try {
        const job_id = req.job.id
        await jobModel.updateOne(
            { _id: job_id, "users.employee": userId },
            { $set: { "users.$.present": true } }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "cannot update" })
    }
}
const userAbsent = async (req, res) => {
    try {
        const job_id = req.job.id
        const job = await jobModel.findById(job_id)
        const usersArray = job.users
        for (const user of usersArray) {
            const userId = user.employee

            // Send notificaiton
            await new notificationModel({
                UserID: userId,
                Content: "You are not present in todays job",
                Time: new Date(),
                Read: false,
            }).save()
            res.json({ response: "notified" })
            await jobsModel.updateOne(
                { _id: job_id, "users.employee": userId },
                { $set: { "users.$.present": false } }
            )
        }

        res.status(200).json({
            message:
                "Notifications sent and present status updated successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Cannot update" })
    }
}

module.exports = {
    postJob,
    getSpecificJob,
    updateSpecificJob,
    deleteSpecificJob,
    getjob,
    job_history,
    userPresent,
    userAbsent,
}
