export default function Cart({ list, onSetList }) {
  const totalValue = list.reduce((sum, product) => {
    return sum + product.quantity * product.price;
  }, 0);

  function handleAddMore(id) {
    onSetList((prevList) =>
      prevList.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  }

  function handleDeductMore(id, quantity) {
    if (quantity >= 2) {
      onSetList((prevList) =>
        prevList.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        ),
      );
    } else {
      onSetList((prevList) => prevList.filter((product) => product.id !== id));
    }
  }

  return (
    <div>
      <h2>Cart</h2>

      {list.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <ul>
          {list.map((product) => {
            return (
              <li key={product.id}>
                {product.name} ${product.price}{" "}
                <button
                  onClick={() => handleDeductMore(product.id, product.quantity)}
                >
                  -
                </button>
                {product.quantity}
                <button onClick={() => handleAddMore(product.id)}>+</button>
              </li>
            );
          })}
        </ul>
      )}

      <h3>Total: {totalValue}</h3>
    </div>
  );
}
