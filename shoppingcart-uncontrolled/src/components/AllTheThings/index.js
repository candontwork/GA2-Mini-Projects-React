import React from 'react';


function AllTheThings({products, onAddToCartHandler}) {

  function itemOnClick(event) {

    // console.log(event.target.id)
    const index = event.target.id
    const obj = products[index]

    // console.log(obj)
    // console.log(products[index])
    onAddToCartHandler(obj);
    return obj
  }

console.log("this is", products)
  const productList = products.map((el, index) => {

    return (
      <div key={index} id={index} onClick={itemOnClick}>
        {el.name} - ${el.price}
      </div>
    )
  });



  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      {productList}
    </div>

  );
}

export default AllTheThings;
