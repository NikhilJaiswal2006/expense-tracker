const mongoose = require('mongoose')

const ConnectMongoDb= async()=>{
try{

    // mongoose.connect(process.env.MONGO_URL);
    mongoose.connect(process.env.MONGO_URL)

    console.log('mongodb connected successfulyy')

    }
      catch(err){

      console.log('mongodb connection failed',err);

}

}

module.exports=ConnectMongoDb