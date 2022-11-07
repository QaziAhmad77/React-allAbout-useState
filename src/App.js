import "./App.css";

import React, { useState } from 'react';
import About from "./components/About";
import Increment from "./components/Increment";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Clock from "./components/Clock"
import Alert from "./components/Alert"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark mode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils-Light mode"
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Clock mode={mode}/>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </Route>
      </Switch>
      <div className="container">
        <Increment heading="Click here" />
      </div>
      </Router>
    </>
  );
}

export default App;
