
import React, { useState } from "react";
import "./App.css";

function App() {

  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: "₹14,999",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    },

    {
      id: 2,
      name: "Wireless Headphones",
      price: "₹1,799",
      image:
        "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
    },

    {
      id: 3,
      name: "Camera",
      price: "₹32,499",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80",
    },

    {
      id: 4,
      name: "Sports Shoes",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    },

    {
      id: 5,
      name: "Backpack",
      price: "₹1,299",
      image:
        "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg",
    },

    {
      id: 6,
      name: "Laptop",
      price: "₹49,999",
      image:
        "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg",
    },

    {
      id: 7,
      name: "Keyboard",
      price: "₹999",
      image:
        "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg",
    },

    {
      id: 8,
      name: "T-Shirt",
      price: "₹799",
      image:
        "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="app">

      {/* SIDE MENU */}
      <div className="side-menu">

        <h2>Menu</h2>

        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">Categories</a>
        <a href="/">Deals</a>
        <a href="/">Contact</a>

      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* HEADER */}
        <header>

          <div className="logo">

            <div className="logo-box">EB</div>

            <h2>EasyBuy</h2>

          </div>

        </header>

        {/* HERO */}
        <section className="hero">

          <h1>Shop Smart. Shop Easy.</h1>

          <p>Your everyday products at one click</p>

          <button>Start Shopping</button>

        </section>

        {/* SEARCH + CART */}
        <div className="search-container">

          <div className="search-bar">

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <div className="cart-box">
            🛒 Cart: {cartCount}
          </div>

        </div>

        {/* PRODUCTS */}
        <section className="products">

          <div className="product-grid">

            {filteredProducts.map((product) => (

              <div className="card" key={product.id}>

                <img src={product.image} alt={product.name} />

                <h3>{product.name}</h3>

                <p className="price">{product.price}</p>

                <button onClick={addToCart}>
                  Add to Cart
                </button>

              </div>

            ))}

          </div>

        </section>

        {/* FOOTER */}
        <footer>

          <p>
            <strong>EasyBuy</strong> – Your Trusted Online Store
          </p>

          <p>© 2025 EasyBuy. All Rights Reserved.</p>

        </footer>

      </div>

    </div>
  );
}

export default App;