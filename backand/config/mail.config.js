const nodemailer = require("nodemailer")


const transport  = nodemailer.createTransport({

services:"email",

auth:{
user : process.env.EMAIL,
password: process.env.EMAIL_PASSWORD

},
})

module.exports = nodemailer
