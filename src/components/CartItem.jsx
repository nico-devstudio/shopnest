export default function CartItem({ onAdd, onDeduct, product, onRemove }) {
  return (
    <li>
      <button onClick={() => onRemove(product.id)}>Remove</button>{" "}
      {product.name} ${product.price}{" "}
      <button onClick={() => onDeduct(product.id)}>-</button>
      {product.quantity}
      <button onClick={() => onAdd(product.id)}>+</button>
    </li>
  );
}
