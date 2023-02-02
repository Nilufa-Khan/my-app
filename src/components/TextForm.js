import React,{useState} from 'react'


export default function TextForm(props) {
  const [text,setText] = useState('Enter text here');
  // text = "new text"; // Wrong way to change the state
// setText("new text"); // Correct way to change the state

const handleUpClick = ()=>{
  // console.log("Uppercase was clicked"+text);

  let newText = text.toUpperCase();
  setText(newText)
  }
  const handleLowClick =()=>{
    let lowText = text.toLowerCase();
    setText(lowText);
  }

  const handleClearClick =()=>{
    let lowText ='';
    setText(lowText);
  }



  const handleOnChange = (event)=>{
  // console.log("On change");
  
  setText(event.target.value);
  }
  
  return (
    <div>
    <h1>{props.title}</h1>
    <div className="mb-4">
   
    <textarea className="form-control" placeholder='Enter your text' id="myBox" value={text} onChange={handleOnChange} rows="6"></textarea>
    </div>
    <button type="submit" className="btn btn-primary mb-5 mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
    <button type="submit" className="btn btn-primary mb-5 mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
    <button type="submit" className="btn btn-primary mb-5 mx-1" onClick={handleClearClick}>Clear</button>
    
    <div className="container  my-4">
      <h3>Yor text Summary: </h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Average {0.08 * text.split(" ").length} Minutes take time to Read</p>
    </div>
    <h3>Text Preview</h3>
    <div className="card my-4">
     
      <p>{text}</p>
    </div>
    </div>
  


  )
}
