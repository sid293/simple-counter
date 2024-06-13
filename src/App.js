import { useState } from 'react';
import './App.css';

function App() {
  let [count,setCount] = useState(0);

  let handleCount = (bool)=>{
    if(bool){
      setCount((prev)=> prev+1);
    }else{
      setCount((prev)=> prev-1);
    }
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={()=>{handleCount(true)}}>Increment</button>
      <button onClick={()=>{handleCount(false)}}>Decrement</button>
    </div>
  );
}

export default App;
