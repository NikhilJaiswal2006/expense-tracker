const User = require('../models/user.model')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
dotenv.config( {path:'../config/.env'})




const LoginUser = async ( req ,res) =>{


try{

  const secretkey =process.env.JWT_SECRET
console.log("jwt_secret",secretkey)

const { email ,password } = req.body;

if( !email || ! password){
return  res.status(400).json({ 
  success:false,
  mesage :" email or passowrd required"});
} 

const user =  await User.findOne({email});
console.log("user",user);

if( !user){

   return res.status(404).json({
    message:"user not found"
  })
}
const ismatch =  await bcrypt.compare(password,user.password)
console.log("ismatch", ismatch);

if(!ismatch){
  return res.status(400).json({
    success:false,
message:"wrong password"
  })
}
const token = jwt.sign({ userid : user._id},secretkey,{ expiresIn:"2h"})

console.log("token",token)

// req.session.token=token,
// req.session.userid = user._id
return res.status(200).json({
  success:true,
message: "login sucesfully",
token,
user

})
}
catch(err){
  return res.status(500).json({
    success:false,
    message:"Internal Server Error",
    error: err.message
  })
}
}

module.exports = LoginUser;