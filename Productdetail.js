import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

function Productdetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);


  // Get product
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  // Add product to cart
  const addToCart = () => {

    const currentCart =
      JSON.parse(localStorage.getItem('cart')) || [];


    const existingProduct = currentCart.find(
      (item) => item.id === product.id
    );


    if (existingProduct) {

      existingProduct.quantity += 1;

    } else {

      currentCart.push({
        ...product,
        quantity: 1,
      });

    }


    localStorage.setItem(
      'cart',
      JSON.stringify(currentCart)
    );


    // Tell Navbar that cart changed
    window.dispatchEvent(
      new Event('cartUpdated')
    );


    // Toastify notification
    toast.success(
      'Product added to cart!'
    );

  };


  // Loading state
  if (!product) {

    return (
      <div className="container py-5 text-center">

        <h3>
          Loading product...
        </h3>

      </div>
    );

  }


  return (
    <div className="container py-5">

      <div className="row">


        {/* Product Image */}

        <div className="col-md-6 mb-4">

          <div className="card border-0 h-100">

            <div className="card-body d-flex align-items-center justify-content-center">

              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{
                  height: '400px',
                  objectFit: 'contain',
                }}
              />

            </div>

          </div>

        </div>


        {/* Product Information */}

        <div className="col-md-6">

          <p className="text-muted text-uppercase">
            {product.category}
          </p>


          <h2 className="fw-bold mb-3">
            {product.title}
          </h2>


          <h3 className="text-primary mb-3">
            ${product.price}
          </h3>


          <p className="text-muted">
            {product.description}
          </p>


          {/* Rating */}

          <div className="mb-4">

            <strong>
              ⭐ {product.rating?.rate}
            </strong>

            <span className="text-muted ms-2">
              ({product.rating?.count} reviews)
            </span>

          </div>


          {/* Add to Cart */}

          <button
            onClick={addToCart}
            className="btn btn-primary btn-lg me-2"
          >
            🛒 Add to Cart
          </button>


          {/* View Cart */}

          <Link
            to="/cart"
            className="btn btn-outline-primary btn-lg"
          >
            View Cart
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Productdetail;