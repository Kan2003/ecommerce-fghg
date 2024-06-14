import React from 'react';

const Cart = ({ cart , setShow}) => {
  const cartPrice = () =>{
    let total = 0;
    cart.forEach(pr => {
      const priceWithoutDollar = parseFloat(pr.price.replace('$', ''));
      total += priceWithoutDollar;
    });
    return total;
  }
  return (
    <>
    <div>
      <h1 onClick={() => setShow(true)}>E-com</h1>
    </div>
    <div>
      {cart.map((item) => {
        return <div key={item.id}>
          <h1>{item.name}</h1>
          <h1>{item.price}</h1>
          <h1>{item.img}</h1>
        </div>
      })}

      <h1 >Total Price : ${cartPrice()}</h1>
    </div>
    </>
    
  );
};

export default Cart;
