
import "./App.css";
import { Route, Switch } from 'react-router-dom';


//import { Admin } from './components/Admin/Admin';
import { Admin_page } from './components/Admin/Index';


import { Register_page } from './components/Register';
import { Login_page } from './components/Login/Index';
import { useState } from "react";
import Home from "./components/Home/Home";



function App() {

  const [em,setEm]=useState();
  let email=(pre)=>{
    setEm(pre)
    //console.log("pre",pre)
    }

  return (
    <div className="App">
 <Switch>
        <Route exact path="/register">
          <Register_page prev={email}/>
        </Route>
        <Route exact path="/admin">
          <Admin_page next1={"/contest"} next2={"/student"} next3={"/access"} next4={em} />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
       
        <Route exact path="/login">
          <Login_page prev={email}/>
        </Route>
        </Switch>
        {/* <Login_page /> */}
      {/* <Access/> */}
      {/* <Admin/> */}
      {/* <Contest/> */}
     {/* <SignUpForm4 /> */}
    </div>
  );
}

export default App;
