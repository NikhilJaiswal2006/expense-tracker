const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config( {path: '../config/.env'} )

const Authmiddleware =  async( req,res,next)=>{


  try{
const jwt_secret = process.env.JWT_SECRET

console.log(jwt_secret)

const AuthHeader = req.headers.authorization;

if (!AuthHeader) {
  return res.status(401).json({
    success: false,
    message: "No token provided"
  });
}

const token = AuthHeader.split(" ")[1];

const decoded = jwt.verify(token,jwt_secret)

req.user = decoded;

next();

  }
  catch(err){
return res.status(401).json({

success:false,
message:" invalid token"

})


  }
}
module.exports = Authmiddleware;