
import {useState } from 'react';
import './App.css';

function App() {
  const [advice,setAdvice]=useState("Please Click Button to Get Advice");
  const [count,setCount]=useState(0);
  async function getAdvice(){
    const res=await fetch("https://api.adviceslip.com/advice")
    const data=await res.json();
    setAdvice(data.slip.advice)
    setCount((e)=>e+1);

  }
 
  return (
    <div>
    <h3>{advice}</h3>
    <button onClick={getAdvice}>Get Advice</button>
    <p>You Have Read <b>{count}</b> Pices Of Advice</p>
    </div>
  );
}

export default App;
