import { useState } from "react";
import Goal from "./component/Goal";

function App(props) {
const handlehome = ()=>
{
   setCount(1);
}
const handleAbout = ()=>
{
  setCount(2);
 
}
const [count, setCount] = useState(0);
  return (
    <div className="App">
      <center>
     <button onClick={handlehome}>Home</button>&nbsp;&nbsp;
     <button onClick={handleAbout}>About</button>
     </center>
       <Goal Count ={count}/>
    </div>
  );
}

export default App;
