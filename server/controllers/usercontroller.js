const userModel=require("../Models/userModel")

const userRegister =async(req,res)=>{
  try {
    const{name,dob,state,district,address,phone,email,password,}=req.body
    let emailExists=await userModel.findOne({email:email})
    if(emailExists) return res.josn({response:"emailExists"})
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
    }).save()
    res.status(200).json({message:"successfull"})
  } catch (error) {
     console.log(error)
     res.status(500).json({message:"add user failed"})
  }
}

const userLogin=async(req,res)=>{
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email: email })
    if(!user) return res.status(404).json({message:"email doesnt exist"})
    const matchPassword = await bcrypt.compare(
      password,
      user.password
    )
    if (matchPassword) {
      res.josn({response:"Logined"})
    } else {
      res.josn({response:"incorrectPassword"})
    }

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message:"login failed"})
  }
}

const get_profile = async()=> {}

const update_profile = async()=> {}

const delte_profile = async()=> {}

module.exports={
  userRegister,
  userLogin,
  get_profile,
  update_profile,
  delte_profile
}
