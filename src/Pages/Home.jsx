import React from "react";
import "../styles/Home.css";

const Home = ({product, addToCart}) => {
  return (
    <div className="product-container">
      {product.map((e)=>{
        return(
          <div className="wrap" key={e.id}>
            <p>{e.title} </p>
            <div className="img">
            <img src={e.images[0]} alt="" />
            </div>
            <p>${e.price}</p>
            <p>{e.description}</p>
            <button onClick={()=>{
              addToCart(e)
            }}>Add to Cart</button>
          </div>
        )
      })}
      
    </div>
  );
};

export default Home;
