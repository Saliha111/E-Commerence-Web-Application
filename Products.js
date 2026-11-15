import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; 
import './Products.css';



function Products() {
  const [data , setdata] = useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((response)=>{
      setdata(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
  });
  
  return (
  <div className="products-page">

    <h1>All Products</h1>

    <div class="row">
      {
        data.map((item)=>{
          return<>
            <div class="card" style={{width:"17rem"}}>
              <img src={item.image} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <Link to={`/detail/${item.id}`} class="btn btn-primary">
                  Detail
                </Link>
              </div>
            </div>
          </>
        })
      }
    </div>

  </div>
);
}

export default Products;