export default function Products({ onSetList, onSetValue }) {
  function handleAddProduct(productName, price) {
    onSetList((prevProductList) => [
      ...prevProductList,
      { id: Date.now(), product: productName, price: price, quantity: 1 },
    ]);
    onSetValue((prevValue) => prevValue + price);
  }

  return (
    <div>
      <h2>Products</h2>

      <ol>
        <li>
          Keyboard $50{" "}
          <button onClick={() => handleAddProduct("Keyboard", 50)}>Add</button>
        </li>
        <li>
          Mouse $25{" "}
          <button onClick={() => handleAddProduct("Mouse", 25)}>Add</button>
        </li>
        <li>
          Headphones $80{" "}
          <button onClick={() => handleAddProduct("Headphones", 80)}>
            Add
          </button>
        </li>
        <li>
          Monitor $200{" "}
          <button onClick={() => handleAddProduct("Monitor", 200)}>Add</button>
        </li>
      </ol>
    </div>
  );
}
