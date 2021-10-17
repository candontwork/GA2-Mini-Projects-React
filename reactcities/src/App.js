// IMPORT useState
import React, { useState } from 'react';
import './styles.css';
import imagesArr from './imageData'

// console.log(imagesArr)

// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {

  const [bigImage, setBigImage] = useState(imagesArr[0].img)

  // console.log(imagesArr[0].img)

  const image = imagesArr.map((img, index) => {
    return <img className="thumb" src={img.img} alt={img.city} key={index} onClick={handleClick} />
  })

  function handleClick(event) {
    const targetImage = event.target.src
    setBigImage(targetImage)
  }

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {image}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img src={bigImage} id="bigimage" alt='bigImage' />
      </div>
    </div>
  );
}


//   <img
//   class="thumb"
//   src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
//   alt="london"
// />

  // USE useState TO CREATE  [bigImage, setBigImage] done
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY done


  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL



  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT 
  //THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
