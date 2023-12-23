import React from 'react'
import CartContext from './cart-context';

const CartProvider = (props) => {
    const addItemToCartHandler=item=>{};

    const removeItemFormCartHandler =id =>{};

    const CartContext ={
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFormCartHandler
    }

  return (
    <div>
        <CartContext.Provider vlaue={CartContext}>
            {props.children}
        </CartContext.Provider>
    </div>
  )
}

export default CartProvider