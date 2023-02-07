
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled","success");
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
  }
  }
  return (

    <>
    <Navbar aboutText="About" mode={mode} toggle={toggle} />
    {/* <Navbar / > */}
    <Alert alert= {alert}/>
    <div className="container my-4" >
    <TextForm title="Enter text to analyze" mode={mode} showAlert = {showAlert}/>
    {/* <About/> */}
    </div>
   
   
    
  </>
  );
}

export default App;
