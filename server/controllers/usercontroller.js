const userModel=require("../Models/userModel")
const bcrypt = require("bcrypt")
const { response } = require("../app")
const addUser=async(req,res)=>{
  try {
    const{
    name,
    dob,
    state,
    district,
    address,
    phone,
    email,
    password,
    }=req.body
    let emailExists=await userModel.findOne({email:email})
    if(emailExists)  res.josn({response:"emailExists"})
    else{
      const hashedPassword = await bcrypt.hash(password, 10)
           await new userModel({
               name: name,
               dob: dob,
               state: state,
               district: district,
               address: address,
               phone: phone,
               email: email,
               password: hashedPassword,
           }).save().then(()=>res.josn({response:"added"})).catch((err)=>console.log(err))
     }
  } catch (error) {
     console.log(error)
  }


}

const userLogin=async(req,res)=>{
  try {
    const { email, password } = req.body
        const user = await userModel.findOne({ email: email })
        if (user) {
    
            const matchPassword = await bcrypt.compare(
                password,
                user.password
            )
            if (matchPassword) {
              
                res.josn({response:"Logined"})
            } else {
                res.josn({response:"incorrectPassword"})
            }
        } else {
            res.josn({response:"emailIncorrect"})
        }

  } catch (error) {
    
  }
}

module.exports={
  addUser,
  userLogin
}
