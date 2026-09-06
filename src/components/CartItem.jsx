export default function CartItem({ onAdd, onDeduct, product, onRemove }) {
  return (
    <li>
      <button onClick={() => onRemove(product.id)}>Remove</button>{" "}
      {product.name} <button onClick={() => onDeduct(product.id)}> - </button>{" "}
      <button onClick={() => onAdd(product.id)}> + </button> <br />$
      {product.price} x {product.quantity} <br />
      Subtotal: ${(product.price * product.quantity).toFixed(2)}
    </li>
  );
}
