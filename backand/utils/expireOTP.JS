const expireOTP= ()=>{

  return Date.now()+5*60*1000;

}

console.log(expireOTP())


module.exports = expireOTP