export default function CartItem({ onAdd, onDeduct, product }) {
  return (
    <>
      <li key={product.id}>
        {product.name} ${product.price}{" "}
        <button onClick={() => onDeduct(product.id, product.quantity)}>
          -
        </button>
        {product.quantity}
        <button onClick={() => onAdd(product.id)}>+</button>
      </li>
    </>
  );
}
