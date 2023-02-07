import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Component/Footer";

function App() {
  const [data, setData] = useState({ products: [], cart: [] });
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    let fetchData = async (url) => {
      let res = await fetch(url);
      let newData = await res.json();
      console.log(newData);
      setData({ ...data, products: newData.products });
    };
    fetchData("https://dummyjson.com/products");
  }, []);

  let addToCart = (e) => {
    let existingItem = data.cart.find((item) => item.id == e.id);
    console.log(existingItem);
    if (existingItem) {
      let tempProduct = { ...e, quantity: existingItem.quantity + 1 };
      let fit = data.cart.filter((each) => tempProduct.id !== each.id);
      let tempCart = [...fit, tempProduct];
      setData({ ...data, cart: tempCart });
    } else {
      let tempProduct = { ...e, quantity: 1 };
      setData({ ...data, cart: [...data.cart, tempProduct] });
      console.log("this runs first");
    }
  };

  let increaseCount = (current) => {
    let tempCart = data.cart.map((e) => {
      if (e.id == current.id) {
        return { ...e, quantity: e.quantity + 1 };
      } else {
        return e;
      }
    });
    setData({ ...data, cart: tempCart });
  };

  let decreaseCount = (current) => {
    let tempCart = data.cart.map((e) => {
      if (e.id == current.id) {
        return { ...e, quantity: e.quantity - 1 };
      } else {
        return e;
      }
    });
    setData({ ...data, cart: tempCart });
  };

  let handleSearch = () => {
    let tempProducts = data.products.filter((datum) => {
      console.log(datum.title);
      return datum.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setData({ ...data, products: tempProducts });
    console.log(tempProducts);
    console.log(searchValue);
  };

 
   

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          cart={data.cart}
          product={data.products}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                product={data.products.filter((datum) =>
                  datum.title.toLowerCase().includes(searchValue.toLowerCase())
                )}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                newCart={data.cart}
                increase={increaseCount}
                decrease={decreaseCount}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
