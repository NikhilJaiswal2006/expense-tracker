const User = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const {resendOTP,otpdata} = require('../services/otp.service')
const sendOTPEmail = require('../services/mail.service')

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (  !name || !email || !password) {
      return res.status(400).json({
        message: " name , email or password required",
        success: false,
      });
    }

    const userexist = await User.findOne({ email });

    if (userexist) {


      if(!userexist.isVerified){
      
         await resendOTP(userexist);

        return res.status(200).json({
        success :true,
        message:'user already exist but not verified please OTP resend',
        email : userexist.email
        })
       
      }

      return res.status(400).json({
      
       success :false,
       message:"you already registered and verefied"
      })
    }

    const salt  = await bcrypt.genSalt(10);
    const hashedpassword =  await bcrypt.hash(password,salt);
    console.log(hashedpassword)


    const  { otp ,Expireotp} = await otpdata();

    const newuser = await User.create({
      name,
      email,
      password:hashedpassword,
      otp,
      Expireotp,
      isVerified:false

    });

    await sendOTPEmail(newuser.email,otp)

    return res
      .status(201)
      .json({ user, success: true, message: " Registration successful. OTP sent successfully.",
      user : newuser
       });
  } catch (err) {
    res.status(500).json({
      message: "user not created",
      err:err.message
    });
  }
};

module.exports = registerUser;

// login user
