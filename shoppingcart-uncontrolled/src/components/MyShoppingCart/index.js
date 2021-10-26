import React from 'react';
import products from '../../products';

function MyShoppingCart(props) {

  function removeOnClick(event) {
    // console.log(event.target.id)
    const id = event.target.id 

    props.onRemoveFromCartHandler(id)
  }

  const shoppingList = props.cart.map((el, index) => {

    return (
      <div key = {index} id = {index} onClick = {removeOnClick}>
        {el.name} - ${el.price}
      </div>
    )
  })

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {shoppingList}
    </div>
  );
}

export default MyShoppingCart;
