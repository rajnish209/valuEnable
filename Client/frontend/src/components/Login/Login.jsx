
import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";
//import {Link} from "react-router-dom"
export const Login = ({ prev, next }) => {
  const [logindata,setLogindata]=useState({});
  const [status,setStatus]=useState();
 
    const handlechange = (e) => {
        const {name, value} = e.target;

        setLogindata({
            ...logindata,
            [name]: value
        })
        
    }
 
    const handlelogin=()=>{
        //console.log(logindata);
    let pre=logindata.email;
    prev(pre);
        axios.post('http://localhost:2244/login',
        logindata)
     .then((res)=>{
         console.log("status",res.status)
         return setStatus(res.status)
     }).catch((err)=>(setStatus("no")))
    }



    return status === 200 ? (
        <Redirect to="/admin" />
          
      ) :(
        <div>
            <h1>Welcome to login page</h1>
        <div className={styles.parent}>
        <div className={styles.main}>
           <div className={styles.card1}>
               <h2> Admin Login</h2>
                <div>
                   <h3>Email:</h3> <input onChange={handlechange} type={"email"} name="email" />
                </div>
                <div>
                   <h3> Password:</h3> <input onChange={handlechange} type={"password"} name="password"/>
                </div>
                <div>
             <button className={styles.back4} onClick={handlelogin}>Login</button>
                </div>
           </div>
          
        </div>
        </div>
        </div>
    );
};
