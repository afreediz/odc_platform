const jwt = require('jsonwebtoken')
const Hotel = require('../Models/hotelsModel')

const authenticateHotel = async(req, res, next)=>{
    if(!req.headers.authorization) return res.status(404).json({message:"auth token needed"})
    const token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const hotel = await Hotel.findOne({_id:decoded._id})

    if(!hotel) return res.status(404).json("user doesnot exist")
    req.hotel = hotel

    next()
}

module.exports = authenticateHotel