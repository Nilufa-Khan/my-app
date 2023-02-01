import logo from './logo.svg';
import './App.css';
let name = "Nilufa";

function App() {
  return (
    <>
   <nav className="navbar">
    
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
   </nav>
   <div className="cont">
    <h1>Hello {name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati praesentium assumenda hic, laudantium ut voluptas! Reiciendis minus porro tempore ducimus, labore sit consequuntur assumenda, fuga, vel enim maiores voluptate.</p>
    
    const element = <h1>Hello, world!</h1>; {/* This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript.  */}
   </div>
   <div className="example" >
    How is React
    <li className="name">
      lovely
    </li>
   </div>
   </>
  );
}

export default App;
