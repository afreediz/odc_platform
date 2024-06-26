const express = require("express")
const router = express.Router()
const {
    postJob,
    getSpecificJob,
    updateSpecificJob,
    deleteSpecificJob,
    bookJob,
    unbookJob,
    getjob,
} = require("../controllers/jobController")
const { authenticateUser } = require("../middlewares/authenticateUser")

// get all jobs
router.get("/", getjob)
// create job
router.post("/", postJob)
// get specific
router.get("/:id", authenticateUser ,getSpecificJob)
// upate specific job
router.put("/:id", updateSpecificJob),
    // delete specific job
router.delete("/:id", deleteSpecificJob)
// // book job
router.post('/book/:id',authenticateUser,bookJob)
// // unbook job
router.post('/cancelbook/:id',authenticateUser,unbookJob)

module.exports = router
