import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Products from './Components/Products';
import Productdetail from './Components/Productdetail';
import Cart from './Components/Cart';
import Mainnav from './Components/Mainnav';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Checkout from './Components/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <BrowserRouter>
     <Routes>
        <Route path="/" element={<Mainnav/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/detail/:id" element={<Productdetail/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
        </Route>
     </Routes>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
   </BrowserRouter>
  );
}

export default App;
