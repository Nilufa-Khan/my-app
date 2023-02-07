import React,{useState} from 'react'
import './About.css'


export default function About() {
    let team ={
        marginLeft:"450px",
        padding:"30px",
       
    }
    const[myStyle,setMyStyle] = useState( {
        color:'black',
        backgroundColor:'white'
    })
const toggle = ()=>{
    if(myStyle.color === 'black'){
        setMyStyle({
            color:'white',
            backgroundColor:'black'
        })
        setBtnText("Enable Dark Mode")
    }
    
    else{
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        }) 
        setBtnText("Enable Light Mode")
    }
}

   const[btnText,setBtnText] = useState("Enable Dark Mode")

   
  return (
    <div>
            <div className="about-section" style={myStyle}>
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 style={team} >Our Team</h2>
            <div className="row" >
            <div className="column">
                <div className="card" style={myStyle}>
                <img src="/w3images/team1.jpg" alt="Jane"/>
                <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">CEO & Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>jane@example.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card" style={myStyle}>
                <img src="/w3images/team2.jpg" alt="Mike"/>
                <div className="container">
                    <h2>Mike Ross</h2>
                    <p className="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card" style={myStyle}>
                <img src="/w3images/team3.jpg" alt="John"/>
                <div className="container">
                    <h2>John Doe</h2>
                    <p className="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>john@example.com</p>
                    <p><button className="button">Contact</button></p>
                </div>
                </div>
            </div>
            </div>
            <div className="container">
                <button type="button" onClick={toggle} class="btn btn-primary my-3">{btnText}</button>
            </div>
    </div>
  )
}
