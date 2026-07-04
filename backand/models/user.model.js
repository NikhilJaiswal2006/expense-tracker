const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
{
name:{  type: String , require: true },
email : { type: String , require : true, unique:true},
password :{ type: String , require : true},

isVerified :{ type: Boolean ,default:false},

otp:{ type :Number },

Expireotp:{ type :Date },

VerificationCode:{type:String  }
},

 {  timestamps: true}
);

module.exports = mongoose.model( "User", UserSchema)