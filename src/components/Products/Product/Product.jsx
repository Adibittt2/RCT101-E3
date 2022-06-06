import React, { useState,useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = (props) => {
  console.log("abc" + props.des);
  // Note: this id should come from api
   const [counter,setCounter]=useState(0);
   const {addCart,removeCart}=useContext(CartContext);
   const handleCart=()=>{
     const productId=props.id;
     const count=1;
      setCounter(1);
      addCart({"productId":props.id,
        "count":1
      })
   }
   const handleDelete=()=>{
     const id=props.id;
     setCounter(0);
     removeCart(id);
   }
  return (
    <div style={{ border:"1px solid black",
    borderRadius:"20px" ,
     height:"170px",
     width:"250px",
     margin: "5px"
    }} key={props.key} data-cy={`product-${props.id}`}>
      <h3 data-cy="product-name">{props.name}</h3>
      <h6 data-cy="product-description">{props.des}</h6>


    {/* {counter<1 ? <button data-cy="product-add-item-to-cart-button"
     onClick={handleCart}>Add To Cart</button>:
    
          <div>
        <button data-cy="product-increment-cart-item-count-button"
        onClick={()=>{setCounter(counter+1)}}>+</button>
        <span data-cy="product-count">
           {counter}
        </span>
        <button data-cy="product-decrement-cart-item-count-button"
        onClick={()=>{setCounter(counter-1)}}>-</button>
        <button data-cy="product-remove-cart-item-button"
        onClick={handleDelete}>Remove from Cart</button>
      </div>
    
    
    
    } */}

    </div>
  );
};

export default Product;