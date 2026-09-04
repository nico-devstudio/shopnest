export default function Product({ product, onAddProduct, remainingStock }) {
  return (
    <li>
      {product.name} - ${product.price} <br />
      Available: {remainingStock} <br />
      <button
        onClick={() => onAddProduct(product)}
        disabled={remainingStock === 0}
      >
        Add
      </button>
    </li>
  );
}
