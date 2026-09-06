export default function Product({ product, onAdd, remainingStock }) {
  return (
    <li>
      {product.name} - ${product.price} <br />
      Available: {remainingStock} <br />
      <button onClick={() => onAdd(product)} disabled={remainingStock === 0}>
        Add
      </button>
    </li>
  );
}
