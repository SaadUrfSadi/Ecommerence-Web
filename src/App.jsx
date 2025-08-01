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
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {

  return (
    <>
    <div>
       <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={ <Shop/> } />
      <Route path="/men" element={ <ShopCategory banner={men_banner} category="men"/> } />
      <Route path="/women" element={ <ShopCategory banner={women_banner} category="women"/> } />
      <Route path="/kid" element={ <ShopCategory banner={kid_banner} category="kid"/> } />
      <Route path='/product' element={ <Products/> }  />
      <Route path="/product/:productId" element={<Products />} />
      {/* <Route path=':productId' element={ <Products/> } /> */}
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
