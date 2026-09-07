export default function CartItem({ onAdd, onDeduct, product, onRemove }) {
  return (
    <li className="cart-item">
      <div>
        <button onClick={() => onRemove(product.id)} className="remove-btn">
          Remove
        </button>
        <h4>{product.name}</h4>
        <button onClick={() => onDeduct(product.id)} className="quantity-btn">
          {" "}
          -{" "}
        </button>
        <button onClick={() => onAdd(product.id)} className="quantity-btn">
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        ${product.price} x {product.quantity} <br />
        Subtotal: ${(product.price * product.quantity).toFixed(2)}
      </div>
    </li>
  );
}
