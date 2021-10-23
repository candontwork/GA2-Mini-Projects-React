// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  function addToCart(obj) {

    setCart([
      ...cart,
      obj
    ]);

    // console.log(`in app ${obj}`)
    // console.log(cart)
  }

  function removeFromCart(id) {
    let converter = id
    let idNum = parseInt(converter, 10);
    const inCart = cart.filter((element, index) => {
      // console.log(typeof index) //number
      // console.log(typeof idNum) //string
      return index !== idNum;

    });
    console.log(inCart)
    setCart(inCart)

  }

  // create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array

  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form />
      <div className="products">
        <AllTheThings onAddToCartHandler={addToCart} />
        <MyShoppingCart cart={cart} onRemoveFromCartHandler={removeFromCart} />
      </div>
    </div>
  );
}