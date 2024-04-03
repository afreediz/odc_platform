const express = require('express')
const hotelcontroller=require("../controllers/hotelController")
const router= express.Router()
router.post("/addingHotel",hotelcontroller)