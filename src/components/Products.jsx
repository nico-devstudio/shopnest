import Product from "./Product";

export default function Products({ addProduct, Onsearch, products, category }) {
  return (
    <div>
      <h2>Products</h2>

      <h4>
        Search:{" "}
        <input type="text" onChange={(event) => Onsearch(event.target.value)} />
      </h4>

      <div>
        <strong>Category:</strong>
        <select onChange={(event) => category(event.target.value)}>
          <option value="">Select a category</option>
          <option value="Accesories">Accesories</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      <ol>
        {products.length >= 1
          ? products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onAddProduct={addProduct}
              />
            ))
          : products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onAddProduct={addProduct}
              />
            ))}
      </ol>
    </div>
  );
}
