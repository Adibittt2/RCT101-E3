import React, { useState,useEffect } from "react";
import axios from 'axios';
import Product from './Product/Product';
// import styles from './Products.module.css';

const Products = () => {

  const [data,setdata]=useState([]);

  const getData=async()=>{
    let r=await axios.get("http://localhost:8080/products");
    setdata(r.data);
    console.log("slf;js" + r.data[0].description);
  }
  useEffect(()=>{
    getData();
  },[]);

  // useEffect(() => {
  //   axios({
  //     url: `http://localhost:8080/products`,
  //     method: "GET"
  //   })
  //     .then((res) => {
  //       console.log(res.data[0].name);
  //       setdata(res.data);
  //     })
  //     // .catch((err) => {});
  // },[]);

  return (
    <div>
    {data.map((product,index)=>{

      console.log(product.name);
      <Product name={product.name} key={index} id = {product.id} des= {product.description} />
    }
    )}
  
  </div>
  )
}

export default Products;