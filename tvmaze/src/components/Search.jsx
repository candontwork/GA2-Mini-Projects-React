import React, { useState } from "react";
import Results from "./Results";

function Search() {
  const [movieQuery, setMovieQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  function onChangeHandler(event) {
    console.log(event.target.value);
    setMovieQuery(event.target.value);
  }
  function onSubmitHandler(event) {
    setHasSearched(true);
    console.log("has submit");
  }

  return (
    <>
      {hasSearched ? (
        <Results back={setHasSearched} />
      ) : (
        <div>
          <input placeholder="search movie title" onChange={onChangeHandler} />
          <button onClick={onSubmitHandler}> Submit </button>
        </div>
      )}
    </>
  );
}

export default Search;
