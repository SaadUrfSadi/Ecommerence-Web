import React from "react";
import "./RelativeProducts.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

function RelativeProducts() {
  return (
    <div className="relativeproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relativeproducts-item">
        {data_product.map((item, e) => {
          return (
            <Item
              key={e}
              id={item.id}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelativeProducts;
