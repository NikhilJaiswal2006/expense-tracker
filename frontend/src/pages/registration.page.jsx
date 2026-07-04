import { useState } from "react";
import './Registration.css'

import { useNavigate ,Link} from 'react-router-dom'


function Registration() {

   const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  function HandleChange(e) {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  }

  const HandleSubmit = async (e) => {

  
    e.preventDefault();


    console.log(formdata);
    

      fetch("http://localhost:3000/api/users/register",
 {
        method:"POST",

        headers:{ "Content-Type": "application/json"},

            body:JSON.stringify(formdata)
 
},
    
      ).then((response)=>response.json())
      .then((data)=>{

        console.log("backand-data",data);


        if(data.success){
          alert(data.message)
          navigate('/login',{replace: true})
        }
        else{
          alert(data.message) 
          
          if (data.message === "You already registered, please login") {
      navigate("/login");
          
        }
       
      }}).catch((err)=>(console.log(err)))
  };

  return (
    <>
      <div className="registration">
        <div className="form-container">
          <h1>Create Account</h1>
          <form onSubmit={HandleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              required
              onChange={HandleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter gmail"
              required
              onChange={HandleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              onChange={HandleChange}
            />

            <p>
              you have already accound please <Link className="link"
              to="/login">login</Link>
            </p>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;

