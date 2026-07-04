const express = require('express');
const cors = require('cors')
const app= express();

const userRoutes = require('./routes/user.route') // import register 
const loginRoutes = require('./routes/login.route'); // import login
const Addexpense = require('./routes/addexpense.route')
const getallexpenses = require('./routes/addexpense.route')
const deleteexpense = require('./routes/addexpense.route')
const updateuserexpense = require('./routes/addexpense.route')


// impor dotenv
const dotenv = require('dotenv')
dotenv.config( {path: './config/.env'} )
const PORT  =  process.env.PORT;

// import connectdb
const ConnectMongoDb = require('./config/db')
 ConnectMongoDb();
app.use(cors());
app.use(express.json())

// import user (register router
app.use('/api/users',userRoutes) // register route 
app.use('/api/users',loginRoutes) // login route
app.use('/api/users/',Addexpense);
app.use('/api/users/',getallexpenses);
app.use('/api/users/',deleteexpense);
app.use('/api/users/',updateuserexpense);

app.get( '/', (req,res)=>{
res.json('This is a home page')
})


app.listen( PORT , ()=>{

console.log(`server is listioning on http://localhost:${PORT}`)
})
