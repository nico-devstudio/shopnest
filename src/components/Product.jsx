export default function Product({ product, onAddProduct }) {
  return (
    <li>
      {product.name} ${product.price}{" "}
      <button onClick={() => onAddProduct(product)}>Add</button>
    </li>
  );
}
