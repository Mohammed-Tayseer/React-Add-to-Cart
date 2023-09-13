import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyNavbar  from './Components/Navbar/MyNavbar ';
import Products  from './Pages/Products/Products';
import Product  from './Pages/Product/Product';
import {CartContext}  from './store/CartContext';

import Cart  from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  

  return (
    <>
        <BrowserRouter>
        <CartContext.Provider value={{cartItems, setCartItems, count, setCount}}>
          <MyNavbar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/products' element={<Products />}/>
              <Route path='/products/:productId' element={<Product />}/>
              <Route path='/cart' element={<Cart />}/>
            </Routes>
            </CartContext.Provider>
        </BrowserRouter>
    </>
  );
}

export default App;
