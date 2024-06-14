import React, { useState } from 'react'
import Home from './Home'
import Cart from './Cart'
import { useLocation } from 'react-router-dom';

const App = () => {
  const [show , setShow] = useState(true);
  const [cart , setCart] = useState([]);
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach(pr => {
      if(item.id === pr.id) isPresent = true;
    });

    if(isPresent) return ;
  
    setCart([...cart , item])
    console.log(cart)
    
  }

  return (
    <>
    {show ? <Home handleClick={handleClick} setShow={setShow}/> 
    : <Cart cart={cart} setShow={setShow}/>}
    </>
  )
}

export default App
