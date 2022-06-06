import React,{useContext, useEffect} from "react";
import {Link ,useNavigate} from 'react-router-dom';
// import styles from './Navbar.module.css';
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink

const Navbar = () => {
  const navigate=useNavigate();
  const {auth,logout}=useContext(AuthContext);
  const {cart,getData,length}=useContext(CartContext);
    const handleClick=()=>{
        if(auth){
            logout();
        }
        else{
           navigate("/login");
        }
        
    }
    useEffect(()=>{
      getData();
    },[cart]);

  return (
    <div data-cy="navbar" style={{ 
      display: "flex",
      margin: "auto",
      justifyContent:"space-between",
      marginBottom:"100px"
    }}>
      <Link data-cy="navbar-home-link" to="/">Logo</Link>
      <div>
      <span data-cy="navbar-cart-items-count">Cart:{length}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleClick}>
       {auth ? "Logout" : "Login"} 
      </button>
      </div>
    </div>
  );
};

export default Navbar;