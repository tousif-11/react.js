 import { useEffect, useState, } from "react";


 const UseState = () => {
  const [count, setCount] = useState(0);

   useEffect(() =>{
    console.log("useEggect");
  },[]);

  const handleIncrement = () => {
    setCount(count + 1);

  };
    const handleDecrease = () => {
      if (count > 0){
    setCount(count - 1 );
    }
  } ;

  return (
    <div>
      {console.log("rendering")}
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Incrices</button>
      <button onClick={handleDecrease}>Decrices</button>
    </div>
  );
};

export default UseState;


