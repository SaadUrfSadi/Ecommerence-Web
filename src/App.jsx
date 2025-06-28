import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';

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
     </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
