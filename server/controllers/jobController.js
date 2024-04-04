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
const getjob = async (req, res) => {
    try {
        const jobs = await jobModel.find()
        res.status(200).json(jobs)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "cannot find jobs" })
    }
}

//get specific job
const getSpecificJob = async (req, res) => {
    try {
        const job_id = req.params.id
        console.log(job_id);
        const jobDetails = await jobModel.findOne({ _id: job_id })
        res.status(200).json(jobDetails) // Sending job details as JSON response to front end
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

const bookJob = async (req, res) => {
    console.log("reach");
    try {
        const {id} = req.params.id
        const user_id = req.user._id
        const job = await jobModel.findById(id)
        console.log("job ",id,job);
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
    postJob,
    getSpecificJob,
    updateSpecificJob,
    deleteSpecificJob,
    getjob,
    job_history,
    userPresent,
    userAbsent,
    bookJob, unbookJob
}
