const jwt = require('jsonwebtoken')
const User = require('../Models/userModel')

const authenticateUser = async(req, res, next)=>{
    const token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findOne({_id:decoded._id})

    if(!user) return res.status(404).json("user doesnot exist")
    req.user = user

    next()
}

module.exports = {authenticateUser}