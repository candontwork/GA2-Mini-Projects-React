import React, { useState, useRef } from 'react';

function Form(props) {
  const inputItemRef = useRef();
  const inputPriceRef = useRef();
  const inputDescriptRef = useRef();

  // console.log("input ref item ", inputItemRef)

  function submitHandler(event) {

    props.onSubmitCustomItem(
      inputItemRef.current.value,
      inputPriceRef.current.value,
      inputDescriptRef.current.value
    )
  }
  // console.log( inputItemRef.current.value,
  //     inputPriceRef.current.value,
  //     inputDescriptRef.current.value)

  return (
    <div className="Form">
      <input name="name" placeholder="item name" type="text"
        ref={inputItemRef} />

      <input name="price" placeholder="price" type="number"
        ref={inputPriceRef} />

      <input name='description' placeholder='description' type="text"
        ref={inputDescriptRef} />

      <button type='submit' onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Form;
