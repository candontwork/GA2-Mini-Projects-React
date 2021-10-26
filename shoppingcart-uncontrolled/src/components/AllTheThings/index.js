import React from 'react';


function AllTheThings({products}) {

  function itemOnClick(event) {

    // console.log(event.target.id)
    const index = event.target.id
    const obj = products[index]

    // console.log(obj)
    // console.log(products[index])
    props.onAddToCartHandler(obj);
    return obj
  }

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
