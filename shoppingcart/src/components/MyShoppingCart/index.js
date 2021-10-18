import React from 'react';

function MyShoppingCart(props) {

  const shoppingList = cart.map((item, index) => {
    return (
      <div 
        key = {index}
        onClick = {() => props.handleClick(item)}
        >
          {item.name} ${item.price}<br />
          {item.description}
      </div>
    )
  });

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {shoppingList}
    </div>
  );
}

export default MyShoppingCart;
