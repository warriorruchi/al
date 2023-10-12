import './App.css';
import React, { useState } from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import FetchData from './componant/product/fetchproductdata';
import Basket from './componant/Basket/basket';

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);
    console.log(cart);
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active">Product</NavLink>
          </li>

          <li>
            <NavLink to="/basket" className="nav-link" activeClassName="active">Basket</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" exact element={<FetchData addToCart={addToCart} />} />
        <Route path="/basket" exact element={<Basket cart={cart} removeFromCart={removeFromCart} />} />

      </Routes>
    </>
  );
}

export default App;
