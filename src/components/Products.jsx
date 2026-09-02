import Product from "./Product";

export default function Products({ onSetList, list }) {
  const products = [
    { id: 1, name: "Keyboard", price: 50 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Headphones", price: 80 },
    { id: 4, name: "Monitor", price: 200 },
  ];

  function handleAddProduct(product) {
    const existingProduct = list.find(
      (productList) => productList.id === product.id,
    );

    existingProduct
      ? onSetList((prevProductList) =>
          prevProductList.map((productList) =>
            productList.id === product.id
              ? { ...productList, quantity: productList.quantity + 1 }
              : productList,
          ),
        )
      : onSetList((prevProductList) => [
          ...prevProductList,
          { ...product, quantity: 1 },
        ]);
  }

  return (
    <div>
      <h2>Products</h2>

      <ol>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddProduct={handleAddProduct}
          />
        ))}
      </ol>
    </div>
  );
}
