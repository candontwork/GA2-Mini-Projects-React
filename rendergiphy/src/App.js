import React from "react";
import Button from "./components/Button";
import GifGenerator from "./components/GifGenerator";


function App() {
  return (
    <>
      <h1> Giphy</h1>
      <input name = 'searchBar' placeholder = 'type of giphy' type = 'text'/>
      <button>Submit</button>
      <div>
      <Button />
      <GifGenerator />
      </div>
    </>
  );
}

export default App;
