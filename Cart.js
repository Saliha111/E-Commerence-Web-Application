import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

function Cart() {
    const [cart , setcart]=useState([]);
    useEffect(()=>{
      const currentcart = JSON.parse(localStorage.getItem('cart')) || [];
      setcart(currentcart);

      const fixed_cart = currentcart.map((item) => ({
        ...item,
        quantity: item.quantity || 1, // Set default quantity to 1 if not present
      }));
      setcart(fixed_cart);
    } , []);

    const increaseQty = (id) => {
        setcart((prevCart) => {
            return prevCart.map((item) => 
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
        })
    };
    const decreaseQty = (id) => {
        setcart((prevCart) => {
            return prevCart.map((item) => 
                item.id === id && item.quantity > 1
             ?{ ...item, quantity:  item.quantity - 1 } 
             : item
            );
        })
    };

    const itemremove = (id) => {
    setcart((prevCart) => {
        const updatedCart = prevCart.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
    });
    };

    const subtotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

  return (
    <div class="container py-5">
    <h1 class="mb-5">Your Shopping Cart</h1>
    <div class="row">
        <div class="col-lg-8">
            
            <div class="card mb-4">
                <div class="card-body">
                    {cart.map((item)=>{
                        return(
                            <div class="row cart-item">
                        <div class="col-md-3">
                            <img src={item.image} class="img-fluid rounded"/>
                        </div>
                        <div class="col-md-5">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="text-muted">Category: {item.category} </p>
                        </div>
                        <div class="col-md-2">
                            <div class="input-group">
                                <button onClick={()=> decreaseQty(item.id)} class="btn btn-outline-secondary btn-sm" type="button">-</button>

                                <input style={{width:"100px"}} type="text" class="form-control form-control-sm text-center quantity-input" value={item.quantity}/>

                                <button onClick={()=> increaseQty(item.id)} class="btn btn-outline-secondary btn-sm" type="button">+</button>
                            </div>

                        </div>
                        <div class="col-md-2 text-end">
                            <p class="fw-bold">{item.price * item.quantity}</p>

                            <button onClick={()=>{itemremove(item.id)}} class="btn btn-sm btn-outline-danger">
                                    <i class="bi bi-trash"></i>
                                </button>
                        </div>
                          <br/>
                          <hr/>
                          <br/>
            
                    </div>
                        )
                    })}
                  
                    
                </div>
            </div>
           
            <div class="text-start mb-4">
                <Link to="/products" class="btn btn-outline-primary">
                    <i class="bi bi-arrow-left me-2"></i>Continue Shopping
                </Link>
            </div>
        </div>
        <div class="col-lg-4">
           
            <div class="card cart-summary">
                <div class="card-body">
                    <h5 class="card-title mb-4">Order Summary</h5>
                    <div class="d-flex justify-content-between mb-3">
                        <span>Subtotal</span>
                        <span>Rs :{subtotal.toFixed(2)}</span>
                    </div>
                    
                    <hr/>
                    <div class="d-flex justify-content-between mb-4">
                        <strong>Total</strong>
                        <strong>Rs :{subtotal.toFixed(2)}</strong>
                    </div>
                    <Link to="/checkout" class="btn btn-primary w-100">Proceed to Checkout</Link>
                </div>
            </div>
        
        </div>
    </div>
</div>
  );
}

export default Cart;