import Header from './Components/Layout/header'
import React,{useState} from 'react';

import Meals from './Components/Meals/Meals.js'
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/ContextProvider';

const App = () => {
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  };

  const hideCartHandler=()=>{
    setCartIsShown(false);
  };
 



  return (
    <CartProvider>
      {cartIsShown &&<Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )
}

export default App