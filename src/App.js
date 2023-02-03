
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "Nilufa";

function App() {
  const[mode,setMode] = useState('light');
  const toggle = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
  }
  }
  return (

    <>
    <Navbar aboutText="About" mode={mode} toggle={toggle} />
    {/* <Navbar / > */}

    <div className="container my-4" >
    <TextForm title="Enter text to analyze" mode={mode}/>
    {/* <About/> */}
    </div>
   
   
    
  </>
  );
}

export default App;
