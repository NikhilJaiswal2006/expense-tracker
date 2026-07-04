  const generateotp = require('../utils/generateOTP')
  const otpExpire = require('../utils/expireOTP.JS')
  const sendOTPEmail  = require('./mail.service')

  
   const resendOTP =  async(user)=>{

   const otp = await generateotp();
   
   user.otp = otp
   user.Expireotp =  await otpExpire()
   
    await user.save();
  await sendOTPEmail(user.email , otp
  )
   
   }

   const otpdata =()=>{

    const otp = generateotp()
   
    return {
otp,
Expireotp: otpExpire()

    }
   }

   module.exports = {resendOTP,otpdata}
