const UserExpenses = require("../models/AddExpense");

const ExpenseUser = async (req, res) => {
  try {
    console.log(req.user);

    const {
      title,
      amount,
      category,
      description,
      paymentMethod,
      date,
      receipt,
    } = req.body;

    const Expenses = await UserExpenses.create({
      title,
      amount,
      category,
      description,
      paymentMethod,
      date,
      receipt,
      user: req.user.userid,
    });
    return res.status(201).json({
      success: true,
      message: " Add Expense succesfully",
      expense: Expenses,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "error in add Expense",
      ereor: err.message,
    });
  }
};

// get all expenses

const getallexpenses = async (req, res) => {
  try {
    // const userID = req.user.userid

    const expenses = await UserExpenses.find({ user: req.user.userid });

    if (!expenses) {
      return res.status(404).json({
        success: false,
        message: "Expense not found or does not belong to this user",
      });
    }

    return res.status(200).json({
      success: true,
      message: "user All expenses sucesfully",
      expenses,
    });
  } catch (err) {
    return res.status(401).json({
      success: false,
      error: err.message,
    });
  }
};

const DeleteUserExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    // const deleteExpense = await UserExpenses.findByIdAndDelete(expenseId)

    const deleteExpense = await UserExpenses.findOneAndDelete({
      _id: expenseId,
      user: req.user.userid,
    });

    if (!deleteExpense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found or does not belong to this user",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Expense deleted successfully",
      deleteExpense,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Error in delete expense",
      error: error.message,
    });
  }
};

const Updateuserepense = async (req, res) => {

  try {

const {title ,amount ,category,description,paymentMethod,date,receipt} = req.body

    const expenseId = req.params.id;
    const userID = req.user.userid

    const updateexpense = await UserExpenses.findOneAndUpdate({
      _id: expenseId,
      user:req.user.userid
    }
  ,{ title,
      amount,
      category,
      description,
      paymentMethod,
      date,
      receipt},
      {new:true}
  );
    if (!updateexpense) {
      return res.status(404).json({
        success: false,
        message: `expense not found with ${userID} `
      });
    }

    return res.status(200).json({
success:true,
message:"upadte user succesfully",
updateexpense

    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "error in updateexpense",
      Error: err.message,
    });
  }
};

module.exports = {
  ExpenseUser,
  getallexpenses,
  DeleteUserExpense,
  Updateuserepense,
};
