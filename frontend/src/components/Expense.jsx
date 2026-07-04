import { useEffect } from "react"
import { useState } from "react"
import '../css/addexpense.css'
function Expenses() {
 
  
const api = "http://localhost:3000/api/users/getallexpenses"

 const token = localStorage.getItem("token")

const [expenses ,setexpenses]= useState([])


const fetchexpenses = async (url)=>{

try{
const res = await fetch(url,
  {
headers:{
  Authorization : `Bearer ${token}`
}

  }
)
const data  = await res.json()

console.log(data)

setexpenses(data.expenses)
}

catch(err){
console.log(err)
}
}

useEffect(()=>{

  fetchexpenses(api);


},[])


  return (
    <>

<h2> Expense Table</h2>

<table className='expense-table'>

<thead> 
 <tr>
 <th>title</th>
  <th>Amount</th>
  <th>Category</th>
  <th>Description</th>
  <th>paymentMethod</th>
  <th>date</th>


 </tr>
</thead>

<tbody>
{expenses.map((expense)=>(

<tr key={expense._id}>
<td>{expense.title}</td>
<td>{expense.amount}</td>
<td>{expense.category}</td>
<td>{expense.description}</td>
<td>{expense.paymentMethod}</td>
<td>{expense.date}</td>

</tr>
))

}


</tbody>
</table>


    </>

  )
}

export default Expenses;