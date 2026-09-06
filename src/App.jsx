import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [checkoutMsg, setCheckoutMsg] = useState("Your Cart is empty");
  const [products, setProducts] = useState([
    { id: 1, name: "Keyboard", price: 50, category: "Accessories", stock: 8 },
    { id: 2, name: "Mouse", price: 25, category: "Accessories", stock: 26 },
    {
      id: 3,
      name: "Headphones",
      price: 80,
      category: "Electronics",
      stock: 14,
    },
    { id: 4, name: "Monitor", price: 200, category: "Electronics", stock: 6 },
  ]);

  function handleAddProduct(product) {
    setCheckoutMsg("");

    if (product.stock === 0) {
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id && item.quantity < product.stock
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function handleAddMore(id) {
    setCart((prevList) =>
      prevList.map((product) =>
        product.id === id && product.quantity < product.stock
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
    setCheckoutMsg("Your Cart is empty");
  }

  function handleClearCart() {
    setCart([]);
    setCheckoutMsg("Your Cart is empty");
  }

  function handleSearch(input) {
    setSearchTerm(input.trim());
  }
  const filteredProducts = products.filter(
    (product) =>
      (searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === "" || product.category === category),
  );

  function handleCheckout() {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
          return {
            ...product,
            stock: product.stock - cartItem.quantity,
          };
        }

        return product;
      }),
    );

    setCart([]);
    setCheckoutMsg("✅ Order placed successfully!");
  }

  return (
    <>
      <h1>ShopNico</h1>

      <Products
        onAdd={handleAddProduct}
        onSearch={handleSearch}
        products={filteredProducts}
        category={setCategory}
        cart={cart}
      />
      <Cart
        onAdd={handleAddMore}
        onDeduct={handleDeductMore}
        onRemove={handleRemoveItem}
        onClearCart={handleClearCart}
        list={cart}
        onCheckout={handleCheckout}
        msgCheckout={checkoutMsg}
      />
    </>
  );
}

export default App;
