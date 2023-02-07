import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({cart, product, setSearchValue, }) => {
  

  



  
  
  return (
    <div className="navbar">
      <div>
        <Link className="kings" to="/">Kings Store</Link>
      </div>
      <div>
        <input className="search" onChange={(e)=>{
        setSearchValue(e.target.value)
        }} type="text" placeholder="Search products" />
      </div>
        <Link className="cart" to="/cart">Cart: {cart.length}  </Link>
      </div>
    
  );
};

export default Navbar;
