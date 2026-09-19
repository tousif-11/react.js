import axios from "axios";
import { useEffect } from "react";

const getProduct = async () => {
  const res = await axios.get("https://fakestoreapi.com/products/1");

  console.log(res?.data);
  return res?.data;
};
export default function Api() {
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

