export default function Product({ product, onAdd, remainingStock }) {
  return (
    <li className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <p>Available: {remainingStock} </p>
      <button onClick={() => onAdd(product)} disabled={remainingStock === 0}>
        Add
      </button>
    </li>
  );
}
