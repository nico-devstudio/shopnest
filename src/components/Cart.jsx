import CartItem from "./CartItem";

export default function Cart({
  list,
  onDeduct,
  onAdd,
  onRemove,
  onClearCart,
  onCheckout,
  msgCheckout,
}) {
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
                onAdd={onAdd}
                onDeduct={onDeduct}
                product={product}
                onRemove={onRemove}
              />
            ))}
          </ul>
          <h4>Total Items: {totalItems}</h4>
          <h3>Total: ${totalValue.toFixed(2)}</h3>
          <button onClick={onClearCart}>Clear Cart</button>{" "}
          <button onClick={onCheckout}>Checkout</button>
        </div>
      )}
      <p>{msgCheckout}</p>
    </div>
  );
}
