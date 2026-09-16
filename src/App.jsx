import { useState } from "react";


const App = () => {
  const [count,setCount] = useState (0)
  const hendle = () =>{
    setCount (count + 1);
  }
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={hendle}>incriess</button>
    </div>
  );
};

export default App;