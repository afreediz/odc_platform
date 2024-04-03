const userModel=require("../Models/userModel")
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
    
  }
}