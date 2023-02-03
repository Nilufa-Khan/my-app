
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "Nilufa";

function App() {
  return (
    <>
    <Navbar aboutText="About" / >
    {/* <Navbar / > */}

    <div className="container my-4" >
    <TextForm title="Enter text to analyze"/>
    {/* <About/> */}
    </div>
   
   
    
  </>
  );
}

export default App;
