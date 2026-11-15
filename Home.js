import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const categories = [
    ...new Set(products.map((item) => item.category)),
  ];

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">

      {/* TOP OFFER BAR */}
      <div className="offer-bar">
        🔥 Special Deals Available Today — Shop Now & Save More!
      </div>


      {/* SHOPPING HEADER */}
      <div className="shopping-header">

        <div className="store-logo">
          Shop<span>Ease</span>
        </div>

        <div className="home-search">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>🔍</button>
        </div>

        <div className="header-actions">
          <span>♡</span>
          <Link to="/cart">🛒</Link>
        </div>

      </div>


      {/* CATEGORY NAVIGATION */}
      <div className="category-nav">

        <Link to="/products" className="all-category">
          ☰ All Categories
        </Link>

        {categories.map((category) => (
          <Link to="/products" key={category}>
            {category}
          </Link>
        ))}

      </div>


      {/* MAIN HERO */}
      <section className="main-hero">

        <div className="hero-text">

          <small>NEW COLLECTION 2026</small>

          <h1>
            Big Deals.
            <br />
            Better Shopping.
          </h1>

          <p>
            Discover amazing products at prices you'll love.
            Shop electronics, fashion, jewelry and more.
          </p>

          <Link to="/products" className="hero-btn">
            Shop Now →
          </Link>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1000&q=85"
            alt="Shopping"
          />
        </div>

      </section>


      {/* SERVICE STRIP */}
      <section className="service-strip">

        <div>
          <span>🚚</span>
          <div>
            <strong>Fast Delivery</strong>
            <p>Quick & reliable shipping</p>
          </div>
        </div>

        <div>
          <span>🔒</span>
          <div>
            <strong>Secure Shopping</strong>
            <p>Your data is protected</p>
          </div>
        </div>

        <div>
          <span>↩️</span>
          <div>
            <strong>Easy Returns</strong>
            <p>Simple return process</p>
          </div>
        </div>

        <div>
          <span>💳</span>
          <div>
            <strong>Safe Payment</strong>
            <p>Secure payment options</p>
          </div>
        </div>

      </section>


      {/* FLASH SALE */}
      <section className="flash-section">

        <div className="flash-heading">

          <div>
            <span>LIMITED TIME</span>
            <h2>🔥 Flash Sale</h2>
          </div>

          <Link to="/products">
            View All →
          </Link>

        </div>


        <div className="flash-products">

          {products.slice(0, 4).map((item) => (

            <div className="sale-card" key={item.id}>

              <div className="sale-badge">
                SALE
              </div>

              <div className="sale-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="sale-info">

                <small>{item.category}</small>

                <h3>{item.title}</h3>

                <div className="rating">
                  ⭐ {item.rating?.rate || "4.0"}
                  <span>
                    ({item.rating?.count || 0})
                  </span>
                </div>

                <div className="price-row">

                  <strong>
                    ${item.price.toFixed(2)}
                  </strong>

                  <del>
                    ${(item.price * 1.25).toFixed(2)}
                  </del>

                </div>

                <Link
                  to={`/detail/${item.id}`}
                  className="sale-btn"
                >
                  Buy Now
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CATEGORIES */}
      <section className="categories-area">

        <div className="area-heading">
          <span>SHOP YOUR WAY</span>
          <h2>Popular Categories</h2>
        </div>

        <div className="category-cards">

          {categories.map((category) => {

            const product = products.find(
              (item) => item.category === category
            );

            return (
              <Link
                to="/products"
                className="category-card"
                key={category}
              >

                <div>
                  <img
                    src={product?.image}
                    alt={category}
                  />
                </div>

                <h3>{category}</h3>

                <span>Shop Now →</span>

              </Link>
            );
          })}

        </div>

      </section>


      {/* PROMOTIONAL BANNER */}
      <section className="promo-banner">

        <div className="promo-content">

          <span>DON'T MISS OUT</span>

          <h2>
            Your Next
            <br />
            Favorite Product
            <br />
            Is Waiting.
          </h2>

          <p>
            Explore our collection and find something
            special for yourself.
          </p>

          <Link to="/products">
            Explore Products →
          </Link>

        </div>

        <div className="promo-image">
          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=900&q=85"
            alt="Shopping products"
          />
        </div>

      </section>


      {/* TRENDING PRODUCTS */}
      <section className="trending-section">

        <div className="flash-heading">

          <div>
            <span>JUST FOR YOU</span>
            <h2>Trending Products</h2>
          </div>

          <Link to="/products">
            See All Products →
          </Link>

        </div>


        <div className="trending-grid">

          {filteredProducts.slice(0, 8).map((item) => (

            <div className="trending-card" key={item.id}>

              <div className="trending-image">

                <span>♡</span>

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="trending-info">

                <small>{item.category}</small>

                <h3>{item.title}</h3>

                <div className="rating">
                  ⭐ {item.rating?.rate || "4.0"}
                  <span>
                    ({item.rating?.count || 0})
                  </span>
                </div>

                <div className="trending-bottom">

                  <strong>
                    ${item.price.toFixed(2)}
                  </strong>

                  <Link to={`/detail/${item.id}`}>
                    Detail
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* FINAL SHOPPING CTA */}
      <section className="shopping-cta">

        <h2>Ready to Find Your Next Favorite?</h2>

        <p>
          Thousands of products are waiting for you.
        </p>

        <Link to="/products">
          Start Shopping →
        </Link>

      </section>

    </div>
  );
}

export default Home;