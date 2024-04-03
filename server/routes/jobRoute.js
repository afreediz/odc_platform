const express= require('express')
const router= express.Router()
// get all jobs
router.get('/',)
// create job
router.post('/',)
// get specific
router.get('/:id',)
// upate specific job
router.put('/:id'),
// delete specific job
router.delete('/:id',)
// book job
router.post('/book/:id',)
// unbook job
router.post('/cancelbook/:id',)


module.exports = router