const express = require('express')

const router = express.Router();
const  Authmiddleware = require('../middleware/Auth.middleware')

const {
  ExpenseUser,
  getallexpenses,
  DeleteUserExpense,
  Updateuserepense
} = require("../controllers/AddExpense.controller");

router.post('/addexpense',Authmiddleware,ExpenseUser);
router.get('/getallexpenses',Authmiddleware,getallexpenses)
router.delete('/deleteexpense/:id',Authmiddleware,DeleteUserExpense);
router.put('/updateuserexpense/:id',Authmiddleware,Updateuserepense)


module.exports = router;