import CartItem from "./CartItem";

export default function Cart({ list, deductMore, addMore, remove, clearCart }) {
  const totalValue = list.reduce((sum, product) => {
    return sum + product.quantity * product.price;
  }, 0);

  const totalItems = list.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);

  return (
    <div>
      <h2>Cart</h2>
      {list.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <div>
          <ul>
            {list.map((product) => (
              <CartItem
                key={product.id}
                onAdd={addMore}
                onDeduct={deductMore}
                product={product}
                onRemove={remove}
              />
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
      <h4>Items/Item: {totalItems}</h4>
      <h3>Total: ${totalValue.toFixed(2)}</h3>
    </div>
  );
}
