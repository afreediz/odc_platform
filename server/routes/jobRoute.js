const express= require('express')
const router= express.Router()
const { postJob,
    getSpecificJob,
    updateSpecificJob,
    deleteSpecificJob,
    bookJob,
    unbookJob,}=require("../controllers/jobController")
// get all jobs
router.get('/',)
// create job
router.post("/", postJob)
// get specific
router.get("/:id", getSpecificJob)
// upate specific job
router.put("/:id", updateSpecificJob),
// delete specific job
router.delete("/:id",deleteSpecificJob)
// book job
router.post('/book/:id',bookJob)
// unbook job
router.post('/cancelbook/:id',unbookJob)


module.exports = router