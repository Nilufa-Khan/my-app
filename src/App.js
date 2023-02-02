
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "Nilufa";

function App() {
  return (
    <>
    <Navbar aboutText="AboutTextUtils" / >
    {/* <Navbar / > */}

    <div className="container my-4" >
      <TextForm title="Enter text to analyze"/>
    </div>
    
  </>
  );
}

export default App;
