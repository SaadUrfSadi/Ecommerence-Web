import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from "react-router-dom"
import Breadrum from '../Components/Breadrums/Breadrum';

function Products() {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadrum product={product}/>
    </div>
  )
}

export default Products