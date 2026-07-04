const mongoose = require('mongoose')


const AddExpenseSchema = mongoose.Schema(
{
  title:{ type : String , required: true},
  amount:{ type : Number , required: true},
 category:{  type :String , required :true,

  enum:["Food" , "Travel" ,"Shopping","Bills","Health" ,"Entertainment" ,"Coaching","Library"]
 },

 description:{type : String ,required: true},
 paymentMethod:{ type:String,required:true,
  enum:["Cash","UPI","Debit Card","Credit Card"]
 },
 date:{ type : Date , required: true},
 receipt:{type : String },

 user:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"User",
  required:true
},



},
{timestamps:true}
)

module.exports = mongoose.model("UserExpenses",AddExpenseSchema);
