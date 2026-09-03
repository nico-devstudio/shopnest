import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "Keyboard", price: 50, category: "Accesories" },
    { id: 2, name: "Mouse", price: 25, category: "Accesories" },
    { id: 3, name: "Headphones", price: 80, category: "Electronics" },
    { id: 4, name: "Monitor", price: 200, category: "Electronics" },
  ];

  function handleAddProduct(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  function handleAddMore(id) {
    setCart((prevList) =>
      prevList.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  }

  function handleDeductMore(id) {
    setCart((prevList) =>
      prevList.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  }

  function handleRemoveItem(id) {
    setCart((prevList) => prevList.filter((product) => product.id !== id));
  }

  function handleClearCart() {
    setCart([]);
  }

  function handleSearch(input) {
    setSearchTerm(input.trim());
  }
  const filteredProducts =
    searchTerm === ""
      ? products
      : products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  return (
    <>
      <h1>Shopping Cart</h1>

      <Products
        addProduct={handleAddProduct}
        Onsearch={handleSearch}
        products={filteredProducts}
      />
      <Cart
        addMore={handleAddMore}
        deductMore={handleDeductMore}
        remove={handleRemoveItem}
        clearCart={handleClearCart}
        list={cart}
      />
    </>
  );
}

export default App;
