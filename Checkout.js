import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import './Checkout.css';

function Checkout() {

  const [cart, setCart] = useState([]);

  const [paymentMethod, setPaymentMethod] = useState('cod');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [submitted, setSubmitted] = useState(false);


  /* ================================
     LOAD CART
  ================================= */

  useEffect(() => {

    const currentCart =
      JSON.parse(localStorage.getItem('cart')) || [];

    setCart(currentCart);

  }, []);


  /* ================================
     HANDLE FORM INPUT
  ================================= */

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  /* ================================
     CHANGE PAYMENT METHOD
  ================================= */

  const handlePaymentChange = (method) => {

    setPaymentMethod(method);

  };


  /* ================================
     ORDER CALCULATIONS
  ================================= */

  const subtotal = cart.reduce(
    (total, item) => {
      return total + item.price * item.quantity;
    },
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;

  const total = subtotal + shipping;


  /* ================================
     SUBMIT ORDER
  ================================= */

  const handleSubmit = (e) => {

    e.preventDefault();


    /* Clear cart */

    localStorage.removeItem('cart');


    /* Update Navbar cart badge */

    window.dispatchEvent(
      new Event('cartUpdated')
    );


    /* Clear form */

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });


    /* Show success toast */

    toast.success(
      'Order confirmed! Thank you for your purchase.'
    );


    /* Show success page */

    setSubmitted(true);

  };


  /* ================================
     SUCCESS PAGE
  ================================= */

  if (submitted) {

    return (

      <div className="checkout-page">

        <div className="checkout-success">

          <div className="success-icon">
            ✓
          </div>

          <h1>
            Order Confirmed!
          </h1>

          <p>
            Thank you for your purchase.
          </p>

          <p className="success-description">
            Your order has been successfully placed.
            We appreciate your business and hope you
            enjoy your products.
          </p>

          <Link
            to="/"
            className="checkout-primary-button"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    );

  }


  /* ================================
     EMPTY CART
  ================================= */

  if (cart.length === 0) {

    return (

      <div className="checkout-page">

        <div className="empty-checkout">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h1>
            Your Cart Is Empty
          </h1>

          <p>
            You need to add products to your cart
            before checking out.
          </p>

          <Link
            to="/"
            className="checkout-primary-button"
          >
            Start Shopping
          </Link>

        </div>

      </div>

    );

  }


  return (

    <div className="checkout-page">

      <div className="checkout-container">


        {/* ================================
            PAGE HEADER
        ================================= */}

        <div className="checkout-header">

          <p className="checkout-label">
            CHECKOUT
          </p>

          <h1>
            Complete Your Order
          </h1>

          <p>
            Enter your information below to place
            your order.
          </p>

        </div>


        <div className="checkout-grid">


          {/* ================================
              LEFT SIDE
          ================================= */}

          <div className="checkout-left">


            {/* CUSTOMER INFORMATION */}

            <div className="checkout-card">

              <div className="checkout-card-header">

                <div className="checkout-number">
                  1
                </div>

                <div>

                  <h2>
                    Customer Information
                  </h2>

                  <p>
                    Enter your contact and delivery details
                  </p>

                </div>

              </div>


              <form
                onSubmit={handleSubmit}
                id="checkout-form"
              >


                {/* FULL NAME */}

                <div className="form-group">

                  <label htmlFor="fullName">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* EMAIL + PHONE */}

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                {/* ADDRESS */}

                <div className="form-group">

                  <label htmlFor="address">
                    Delivery Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    rows="4"
                    placeholder="Enter your complete delivery address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>


                {/* CITY + POSTAL CODE */}

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="city">
                      City
                    </label>

                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="postalCode">
                      Postal Code
                    </label>

                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Enter postal code"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>

              </form>

            </div>


            {/* ================================
                PAYMENT METHOD
            ================================= */}

            <div className="checkout-card">

              <div className="checkout-card-header">

                <div className="checkout-number">
                  2
                </div>

                <div>

                  <h2>
                    Payment Method
                  </h2>

                  <p>
                    Choose how you would like to pay
                  </p>

                </div>

              </div>


              {/* PAYMENT OPTIONS */}

              <div className="payment-methods">


                {/* CASH ON DELIVERY */}

                <label
                  className={`payment-option ${
                    paymentMethod === 'cod'
                      ? 'payment-option-active'
                      : ''
                  }`}
                >

                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={
                      paymentMethod === 'cod'
                    }
                    onChange={() =>
                      handlePaymentChange('cod')
                    }
                  />

                  <div className="payment-icon">
                    💵
                  </div>

                  <div className="payment-content">

                    <h3>
                      Cash on Delivery
                    </h3>

                    <p>
                      Pay when your order arrives.
                    </p>

                  </div>

                </label>


                {/* DEBIT / CREDIT CARD */}

                <label
                  className={`payment-option ${
                    paymentMethod === 'card'
                      ? 'payment-option-active'
                      : ''
                  }`}
                >

                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={
                      paymentMethod === 'card'
                    }
                    onChange={() =>
                      handlePaymentChange('card')
                    }
                  />

                  <div className="payment-icon">
                    💳
                  </div>

                  <div className="payment-content">

                    <h3>
                      Debit / Credit Card
                    </h3>

                    <p>
                      Pay securely using your card.
                    </p>

                  </div>

                </label>

              </div>


              {/* ================================
                  CASH ON DELIVERY DETAILS
              ================================= */}

              {paymentMethod === 'cod' && (

                <div className="payment-details cod-details">

                  <div className="payment-details-icon">
                    💵
                  </div>

                  <div>

                    <h3>
                      Cash on Delivery
                    </h3>

                    <p>
                      You will pay the delivery person
                      when your order arrives.
                    </p>

                  </div>

                </div>

              )}


              {/* ================================
                  CARD DETAILS
              ================================= */}

              {paymentMethod === 'card' && (

                <div className="payment-details card-details">

                  <div className="card-details-header">

                    <div>

                      <h3>
                        Card Information
                      </h3>

                      <p>
                        Enter your debit or credit card details.
                      </p>

                    </div>

                    <div className="card-icons">
                      💳
                    </div>

                  </div>


                  {/* CARD NAME */}

                  <div className="form-group">

                    <label htmlFor="cardName">
                      Name on Card
                    </label>

                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      placeholder="Enter name on card"
                      value={formData.cardName}
                      onChange={handleChange}
                      required={
                        paymentMethod === 'card'
                      }
                    />

                  </div>


                  {/* CARD NUMBER */}

                  <div className="form-group">

                    <label htmlFor="cardNumber">
                      Card Number
                    </label>

                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required={
                        paymentMethod === 'card'
                      }
                    />

                  </div>


                  {/* EXPIRY + CVV */}

                  <div className="form-row">

                    <div className="form-group">

                      <label htmlFor="expiryDate">
                        Expiry Date
                      </label>

                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM / YY"
                        maxLength="5"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        required={
                          paymentMethod === 'card'
                        }
                      />

                    </div>


                    <div className="form-group">

                      <label htmlFor="cvv">
                        CVV
                      </label>

                      <input
                        type="password"
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        maxLength="4"
                        value={formData.cvv}
                        onChange={handleChange}
                        required={
                          paymentMethod === 'card'
                        }
                      />

                    </div>

                  </div>

                </div>

              )}

            </div>


            {/* MOBILE BUTTON */}

            <div className="mobile-submit">

              <button
                type="submit"
                form="checkout-form"
                className="checkout-primary-button"
              >
                Place Order
              </button>

              <Link
                to="/cart"
                className="back-to-cart"
              >
                ← Back to Cart
              </Link>

            </div>

          </div>


          {/* ================================
              RIGHT SIDE - ORDER SUMMARY
          ================================= */}

          <div className="checkout-right">

            <div className="checkout-card order-summary">


              <div className="summary-header">

                <h2>
                  Order Summary
                </h2>

                <span>

                  {cart.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )}{' '}

                  items

                </span>

              </div>


              {/* PRODUCTS */}

              <div className="checkout-products">

                {cart.map((item) => (

                  <div
                    className="checkout-product"
                    key={item.id}
                  >

                    <div className="checkout-product-image">

                      <img
                        src={item.image}
                        alt={item.title}
                      />

                      <span className="product-quantity">
                        {item.quantity}
                      </span>

                    </div>


                    <div className="checkout-product-info">

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.category}
                      </p>

                    </div>


                    <div className="checkout-product-price">

                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}

                    </div>

                  </div>

                ))}

              </div>


              {/* PRICE DETAILS */}

              <div className="price-details">

                <div className="price-row">

                  <span>
                    Subtotal
                  </span>

                  <strong>
                    ${subtotal.toFixed(2)}
                  </strong>

                </div>


                <div className="price-row">

                  <span>
                    Shipping
                  </span>

                  <strong>
                    ${shipping.toFixed(2)}
                  </strong>

                </div>


                <div className="price-divider"></div>


                <div className="total-row">

                  <span>
                    Total
                  </span>

                  <strong>
                    ${total.toFixed(2)}
                  </strong>

                </div>

              </div>


              {/* DESKTOP BUTTON */}

              <button
                type="submit"
                form="checkout-form"
                className="checkout-primary-button desktop-submit"
              >
                Place Order
              </button>


              <Link
                to="/cart"
                className="back-to-cart desktop-back"
              >
                ← Back to Cart
              </Link>


              <div className="secure-checkout">

                <span>
                  🔒
                </span>

                <span>
                  Secure checkout
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Checkout;