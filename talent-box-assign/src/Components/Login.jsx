import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

function Login() {

  const [cookies] = useCookies([]);
  const navigate = useNavigate();


  useEffect(() => {

        console.log(document.cookie);
    if (document.cookie) {
      navigate("/dashboard");
    }
    else{
     for(let i=0;i<0;i++){
     }
      navigate("/login")
    }
  }, [cookies, navigate]);

 
  
  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {      
      const { data } = await axios.post(
        "http://localhost:4000/talentbox/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          console.log("yredh");
          console.log(data.errors);
          const { name, email, password } = data.errors;
          if (name) {
            generateError(name);
          } else if (email) {
            generateError(email);
          } else if (password) {
            generateError(password);
          }
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      console.log(err);

    }
  };
  return (
    
    <div className="container">

      <h2>Login to your Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            required
            placeholder="UserName or Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button className="register-btn" type="submit">Submit</button>
        <span>
          Don't have an account ?<Link to="/register"> Register </Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;