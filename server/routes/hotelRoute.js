const express = require('express')
const hotelcontroller=require("../controllers/hotelController")
const router= express.Router()

// hotel reg
router.post("/register",hotelcontroller)
router.post('login',)
// jobs of hotel
router.get('/myjobs',)

module.exports = router