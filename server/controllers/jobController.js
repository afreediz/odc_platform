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
            jobName:jobName,
            Description:Description,
            noOfApplicants:noOfApplicants,
            jobCreatedDate:jobCreatedDate,
            salary:salary,
            department:department,
        }).save().then(()=>res.json({response:"Added"})).catch((err)=>console.log(err))
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    postJob,
}
