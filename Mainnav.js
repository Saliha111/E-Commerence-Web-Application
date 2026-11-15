import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Link, NavLink } from 'react-router';
import './Mainnav.css';

function Mainnav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="site-nav">
        <div className="nav-container">
          <Link to="/" className="brand" onClick={closeMenu}>
            <span className="brand-mark">$</span>
            <span>Dollar Store</span>
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-content ${menuOpen ? 'is-open' : ''}`}>
            <ul className="nav-links">
              <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
              <li><NavLink to="/products" onClick={closeMenu}>Products</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
            </ul>

            <Link to="/cart" className="cart-link" onClick={closeMenu}>
              <span className="cart-icon" aria-hidden="true">bag</span>
              Cart
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
   </>
  );
}

export default Mainnav;