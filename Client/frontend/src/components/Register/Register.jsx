
import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";

export const Register = ({ prev, next }) => {
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
        axios.post('http://localhost:2244/register',
        logindata)
     .then((res)=>{
         console.log("status",res.status)
         return setStatus(res.status)
     }).catch((err)=>(setStatus("no")))
    }



    return status === 200 ? (
        <Redirect to="/login" />
          
      ) :(
        <div>
            <h1>Welcome to login page</h1>
        <div className={styles.parent}>
        <div className={styles.main}>
           <div className={styles.card1}>
               <h2> Admin Register</h2>
                <div>
                   <h3>Email:</h3> <input onChange={handlechange} type={"email"} name="email" />
                </div>
                <div>
                   <h3> Password:</h3> <input onChange={handlechange} type={"password"} name="password"/>
                </div>
                <div>
                    <button className={styles.back4} onClick={handlelogin}>Register</button>
                </div>
           </div>
           {/* <div className={styles.card2}>
           <h2> Student Login</h2>
                <div>
                   <h3>Email: </h3>  <input type={"email"} />
                </div>
                <div>
                    <h3>Password:</h3> <input type={"password"} />
                </div>
                <div>
                    <button className={styles.back4}>Login</button>
                </div>
           </div> */}
        </div>
        </div>
        </div>
    );
};
