import { useState } from "react";

function App(){
  const [count,setCount]=useState(0);
  return(
    <div>
    <h1>"Count": {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <strong>Licet</strong>
    </div>
  );
}

export default App;