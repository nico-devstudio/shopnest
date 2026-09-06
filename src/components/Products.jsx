import Product from "./Product";

export default function Products({
  onAdd,
  onSearch,
  products,
  category,
  cart,
}) {
  return (
    <div>
      <h2>Products</h2>

      <h4>
        Search:{" "}
        <input type="text" onChange={(event) => onSearch(event.target.value)} />
      </h4>

      <div>
        <strong>Category:</strong>
        <select onChange={(event) => category(event.target.value)}>
          <option value="">Select a category</option>
          <option value="Accessories">Accessories</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      <ol>
        {products.length >= 1 ? (
          products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);

            const remainingStock = cartItem
              ? product.stock - cartItem.quantity
              : product.stock;

            return (
              <Product
                key={product.id}
                product={product}
                onAdd={onAdd}
                remainingStock={remainingStock}
              />
            );
          })
        ) : (
          <p>No products found.</p>
        )}
      </ol>
    </div>
  );
}
