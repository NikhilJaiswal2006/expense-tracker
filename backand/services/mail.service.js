const transporter= require('../config/mail.config')

sendOTPEmail = async ( email ,otp )=>{

  transporter.sendMail(
    {

    from: process.env.EAMIL,
    to :email,
    subject : ' Email otp verificaion',
    html:` your email Verification code 
      <h2 >please verify youe email 
    <strong>youe otp is ${otp}</strong> </h2>
   <p>This otp will expire in 5 minutes</p> 
   `
    }
  )
}

module.exports= sendOTPEmail