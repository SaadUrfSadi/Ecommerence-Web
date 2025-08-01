import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

 const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;
        }
        return cart;
    }

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
         setCartItem((prev)=> ({...prev, [itemId]:prev[itemId]+1}))
         console.log(itemId)
    };

    const removeToCart = (itemId) => {
         setCartItem((prev)=> ({...prev, [itemId]:prev[itemId]-1}))
    };

    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                let itemsInfo = all_product.find((product)=> product.id===Number(item));
                totalAmount += itemsInfo.new_price * cartItem[item];
            }
            return totalAmount;
        }
    };

      const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItem){
            if (cartItem[item]>0) {
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    } 

      const contextValue = {all_product, cartItem , addToCart, removeToCart, getTotalAmount,  getTotalCartItems};
    
   

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider