
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let name = "Nilufa";

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert =(message,type)=>{
     setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
   
  }
  const toggle = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#135175';
    showAlert("Dark mode has been enabled","success");
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
  }
  }
  return (
    <Router>
    
  
    <Navbar aboutText="About" mode={mode} toggle={toggle} />
    {/* <Navbar / > */}
    <Alert alert= {alert}/>
    <div className="container my-3" >
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <TextForm title="Enter text to analyze" mode={mode} showAlert = {showAlert}/>
    
          </Route>
        </Switch>
    {/* <About/> */}
    </div>
  </Router>
  );
}

export default App;
