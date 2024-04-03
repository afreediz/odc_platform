const jwt = require('jsonwebtoken')
const User = require('../Models/userModel')

const authenticateUser = async(req, res, next)=>{
    console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1]
    console.log("token ",token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findOne({_id:decoded._id})

    if(!user) return res.status(404).json("user doesnot exist")
    console.log(user);
    req.user = user

    next()
}

module.exports = {authenticateUser}