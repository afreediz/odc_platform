const express = require('express')
const {hotel_register, hotel_login, hotel_profile, hotel_jobs}=require("../controllers/hotelController")
const router= express.Router()

// hotel reg
router.post("/register",hotel_register)
router.post('login',hotel_login)
// jobs of hotel
router.get('/jobs',hotel_jobs)
router.get('/profile',hotel_profile)

module.exports = router