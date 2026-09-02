import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [productList, setProductList] = useState([]);

  return (
    <>
      <h1>Shopping Cart</h1>

      <Products onSetList={setProductList} list={productList} />
      <Cart onSetList={setProductList} list={productList} />
    </>
  );
}

export default App;
