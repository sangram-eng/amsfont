import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

import Newnav from "./Newnav";
const Login = ()=>
{

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history = useHistory();
    useEffect(()=>{
    if(localStorage.getItem('user-info')){
        history.push("/login")
    }
  },[])
 async function login()
  {
    console.warn("data",email,password)
    let item={email,password}
    let result=await fetch('',{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item)
    });
    result=await result.json();
    localStorage.setItem('user-info',JSON.stringify(result));
    history.push("")
  }

    return(
        <>
        <Newnav/>
        <div className="col-mb-6 col-12 text-center">
          <br></br>
          <h1>Login Page</h1>
           <br></br>
            <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email"placeholder="youremail@gmail.com" id="email"name="email"/>
            <br></br>
            <br></br>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="password" id="password"name="password"/>
             <br></br>
             <br></br>
             <div className="col-sm-12 ">
             <li className="btn btn-primary">
          <NavLink className="nav-link"to="/service">Login</NavLink>
        </li>
        </div>
        </div>
        </>
    );
}
export default Login;