import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./About.css";

function About() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [storyImage, setStoryImage] = useState(
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
  );

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        if (response.data[0]?.image) {
          setStoryImage(response.data[0].image);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-content">
          <span>ABOUT OUR STORE</span>

          <h1>
            Shopping Made
            <span> Simple & Better</span>
          </h1>

          <p>
            Discover quality products, explore your favorite categories,
            and enjoy a smooth shopping experience from anywhere.
          </p>

          <Link to="/products" className="shop-now-button">
            Shop Now →
          </Link>
        </div>
      </section>


      {/* OUR STORY */}
      <section className="story-section">

        <div className="story-image">
           <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
            alt="Our store"
          />
        </div>

        <div className="story-content">

          <span className="section-tag">WHO WE ARE</span>

          <h2>
            Your Trusted Online Shopping Destination
          </h2>

          <p>
            Welcome to our online store, where shopping is simple,
            convenient and enjoyable.
          </p>

          <p>
            We bring together a wide range of products in one place,
            making it easier for customers to find products they love.
          </p>

          <p>
            From everyday essentials to the latest products, we focus
            on quality, variety and a better shopping experience.
          </p>

        </div>

      </section>


      {/* CATEGORIES */}
      <section className="categories-section">

        <div className="section-heading">

          <span className="section-tag">SHOP BY CATEGORY</span>

          <h2>Explore Our Categories</h2>

          <p>
            Find everything you need from our carefully selected
            product categories.
          </p>

        </div>


        <div className="category-filters" aria-label="Filter products by category">
          <button
            className={selectedCategory === "all" ? "active" : ""}
            onClick={() => setSelectedCategory("all")}
            type="button"
          >
            All Items
          </button>
          {[...new Set(products.map((product) => product.category))].map((category) => (
            <button
              className={selectedCategory === category ? "active" : ""}
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="category-grid">
          {products
            .filter(
              (product) =>
                selectedCategory === "all" || product.category === selectedCategory
            )
            .map((product) => (
              <article className="category-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="category-content">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.title}</h3>
                  <p>${product.price.toFixed(2)}</p>
                  <a href={`/detail/${product.id}`}>View Item →</a>
                </div>
              </article>
            ))}
        </div>

      </section>


      {/* SHOPPING EXPERIENCE */}
      <section className="experience-section">

        <div className="section-heading">

          <span className="section-tag">WHY SHOP WITH US</span>

          <h2>Everything You Need, In One Place</h2>

          <p>
            We make online shopping simple, reliable and convenient.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">✓</div>

            <h3>Quality Products</h3>

            <p>
              We focus on providing products that offer great value
              and quality.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">◆</div>

            <h3>Wide Variety</h3>

            <p>
              Explore different categories and discover products
              for every need.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">⚡</div>

            <h3>Easy Shopping</h3>

            <p>
              Browse products, add them to your cart and shop with ease.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">♡</div>

            <h3>Customer First</h3>

            <p>
              We aim to provide a smooth and enjoyable shopping
              experience.
            </p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="steps-section">

        <div className="section-heading">

          <span className="section-tag">HOW IT WORKS</span>

          <h2>Shopping Made Easy</h2>

        </div>


        <div className="steps-grid">

          <div className="step">
            <div className="step-number">01</div>
            <h3>Explore Products</h3>
            <p>
              Browse our categories and find your favorite products.
            </p>
          </div>


          <div className="step">
            <div className="step-number">02</div>
            <h3>Add To Cart</h3>
            <p>
              Select the products you want and add them to your cart.
            </p>
          </div>


          <div className="step">
            <div className="step-number">03</div>
            <h3>Place Your Order</h3>
            <p>
              Complete your order and enjoy a simple shopping experience.
            </p>
          </div>

        </div>

      </section>


      {/* LOCATION */}
      <section className="location-section">

        <div className="location-content">

          <span className="section-tag">OUR LOCATION</span>

          <h2>We're Based In Lahore</h2>

          <p>
            Our store is proudly serving customers from Lahore, Pakistan
            and beyond.
          </p>


          <div className="location-details">

            <div className="location-item">
              <span>⌖</span>

              <div>
                <h3>Location</h3>
                <p>Lahore, Pakistan</p>
              </div>
            </div>


            <div className="location-item">
              <span>✉</span>

              <div>
                <h3>Email</h3>
                <p>hello@example.com</p>
              </div>
            </div>


            <div className="location-item">
              <span>☎</span>

              <div>
                <h3>Phone</h3>
                <p>+92 300 1234567</p>
              </div>
            </div>

          </div>

        </div>


        <div className="location-image">

          <div className="location-pin">
            <span>●</span>
          </div>

          <h3>Lahore</h3>
          <p>Pakistan</p>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <span>START SHOPPING</span>

        <h2>
          Find Something You'll Love
        </h2>

        <p>
          Explore our products and discover your next favorite item.
        </p>

        <button>
          Explore Products →
        </button>

      </section>

    </div>
  );
}

export default About;