export default function Cart({ list, total, setTotal, onSetList }) {
  function handleAddMore(price, id) {
    setTotal((prevTotal) => prevTotal + price);
    onSetList((prevList) =>
      prevList.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  }

  function handleDeductMore(price, id) {
    setTotal((prevTotal) => prevTotal - price);
    onSetList((prevList) =>
      prevList.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  }

  return (
    <div>
      <h2>Cart</h2>

      <ul>
        {list.map((products) => {
          return (
            <li key={products.id}>
              {products.product} ${products.price}
              <button
                onClick={() => handleDeductMore(products.price, products.id)}
              >
                -
              </button>
              {products.quantity}
              <button
                onClick={() => handleAddMore(products.price, products.id)}
              >
                +
              </button>
            </li>
          );
        })}
      </ul>

      <h3>Total: {total}</h3>
    </div>
  );
}
