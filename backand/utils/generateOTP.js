const generateOTP= ()=>{

  return Math.floor(100000+Math.random()*900000)
}


console.log(generateOTP())

module.exports = generateOTP;