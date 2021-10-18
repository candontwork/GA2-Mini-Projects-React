import React from 'react';
import products from '../../products';

function AllTheThings(props) {

  const itemList = products.map((item, index2) => {
      return(
          <div 
            key = {index2} 
            onClick = {() => props.handleClick(item)}
            >
              {console.log(item)}
              <div>{item.name}</div>
              <div>${item.price}</div>
          </div>
        )
      }
    ) 

  return (
    <div className="AllTheThings">
       <h2>Put these in your cart!</h2>
       {itemList}
    </div>
  );
}

export default AllTheThings;
