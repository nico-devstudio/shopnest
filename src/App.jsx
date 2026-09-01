import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [productList, setProductList] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  return (
    <>
      <h1>Shopping Cart</h1>

      <Products onSetList={setProductList} onSetValue={setTotalValue} />
      <Cart
        onSetList={setProductList}
        list={productList}
        total={totalValue}
        setTotal={setTotalValue}
      />
    </>
  );
}

export default App;
