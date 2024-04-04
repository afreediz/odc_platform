const jwt = require('jsonwebtoken')
const Hotel = require('../Models/hotelsModel')

const authenticateHotel = async(req, res, next)=>{
    console.log("headers");
    console.log(req.headers);
    if(!req.headers.authorization) return res.status(404).json({message:"auth token needed"})
    const token = req.headers.authorization.split(" ")[1]
    console.log("token ",token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const hotel = await Hotel.findOne({_id:decoded._id})
    console.log(hotel);

    if(!hotel) return res.status(404).json("user doesnot exist")
    req.hotel = hotel

    next()
}

module.exports = authenticateHotel