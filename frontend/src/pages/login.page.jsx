import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate,Link} from "react-router-dom";

import "./login.css";
function LoginPage() {

  const navigate = useNavigate(); // page redirect
//  useEffect(() => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     navigate("/dashboard");
//   }
// }, [navigate]);

  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setlogindata({
      ...logindata,
      [e.target.name]: e.target.value,
    });
  };

  const handlSubmit = (e) => {
    e.preventDefault();

    console.log("frontend",logindata);
  

    fetch("http://localhost:3000/api/users/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logindata),
    })
      .then((response) => response.json())
     .then((data) => {
  console.log("backend-data", data);
if (data.success) {
  localStorage.setItem("token", data.token);
  alert("Login Successful");
   navigate("/dashboard", { replace: true });
}
  else{
    alert(data.message)
  }
}).catch(err=>{
console.log("error",err)
alert('server error')
})
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form-container">
          <div className="login-form">
            <h2>Login Form</h2>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder=" Enter password"
              onChange={handleChange}
            />

            <a href="#">Forget password ?</a>
            <button onClick={handlSubmit}> Login</button>

            <p>
              you have no Account please <Link to="/">SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
