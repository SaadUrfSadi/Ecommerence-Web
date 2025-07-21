import React from 'react';
import './Breadrum.css';
import arrow_icon from "../Assets/breadcrum_arrow.png";

function Breadrum(props) {
  const {product} = props;
  return (
    <div className='breadrum'>
       HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />  {product.category} <img src={arrow_icon} alt="" /> {product.name}
       
    </div>
    
  )
}

export default Breadrum