export default function Product({ product, onAddProduct }) {
  return (
    <li>
      {product.name} - ${product.price} <br />
      Stock: {product.stock} <br />
      <button onClick={() => onAddProduct(product)}>Add</button>
    </li>
  );
}
