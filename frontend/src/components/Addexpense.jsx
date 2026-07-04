import { data } from "react-router-dom";
import "../css/addexpense.css";
import { useState } from "react";
function AddExpense() {
  const [addexpense, setaddexpense] = useState({
    title: "",
    amount: "",
    category: "",
    description: "",
    paymentMethod: "",
    date: "",
  });

  function HandleOnChange(e) {
    setaddexpense({
      ...addexpense,
      [e.target.name]: e.target.value,
    });
  }

  const HandleOnSubmit = async (e) => {
    e.preventDefault();
    // alert('add expense succesfully')
    console.log("frontend", addexpense);
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/api/users/addexpense", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(addexpense),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("backand-data", data);

        if (data.success) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      })

      .catch((err) => {
        console.log("eror in add expense form", err);
      });
  };

  return (
    <>
      <div className="add-expense-container">
        <h1 className="add-expense-heading">Add Expense Form</h1>

        <form className="expense-form" onSubmit={HandleOnSubmit}>
          <div className="row">
            <div className="col-md-5 expense-input">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                placeholder="Enter title of expense"
                name="title"
                required
                onChange={HandleOnChange}
              />
            </div>

            <div className="col-md-5 expense-input">
              <label htmlFor="title">Amount:</label>
              <input
                type="number"
                placeholder="Enter expense"
                name="amount"
                required
                onChange={HandleOnChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 expense-input">
              <label htmlFor="category">Category:</label>

              <select
                name="category"
                onChange={HandleOnChange}
                required
              >
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
                <option value="Bills">Bills</option>
                <option value="Health">Health</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Coaching">Coaching</option>
                <option value="Library">Library</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 expense-input">
              <label htmlFor="">Description:</label>
              <input
                type="text"
                placeholder="Description"
                name="description"
                required
                onChange={HandleOnChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 expense-input">
              <label htmlFor="paymentMethod">paymentMethod:</label>
              <select
                name="paymentMethod"
                onChange={HandleOnChange}
                required
              >
                // enum:["Cash","UPI","Debit Card","Credit Card"]

                <option value="">payment method</option>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Credit Card"> Credit Card</option>
              </select>
            </div>

            <div className="col-md-4 expense-input">
              <label htmlFor="paymentMethod">Date:</label>
              <input
                type="date"
                name="date"
                required
                onChange={HandleOnChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="expense-btn">
              <button type="submit" className="btn btn-success expense-btn">
                Success
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddExpense;


