import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSigup from './Pages/LoginSigup';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
    <div>
       <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={ <Shop/> } />
      <Route path="/mens" element={ <ShopCategory categpry="mens"/> } />
      <Route path="/women" element={ <ShopCategory categpry="women"/> } />
      <Route path="/kids" element={ <ShopCategory categpry="kids"/> } />
      <Route path='/product' element={ <Products/> }  />
       <Route path=':productId' element={ <Products/> } />
       <Route path="/cart" element={ <Cart/> } />
       <Route path="/login" element={ <LoginSigup/> } />
     </Routes>
     <Footer/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
