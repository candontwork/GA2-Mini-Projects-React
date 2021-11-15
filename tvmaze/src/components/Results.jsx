import React from "react";
import resultsData from "./resultsData";

function Results(props) {
  const showResults = resultsData.map((element, index) => {
      return(
        <div key={index}>
            <img src={element.show.image.medium} alt="" />
            <h3>{element.show.name}</h3>
        </div>
     )
  });

  return (
    <>
      <button onClick={() => props.back(false)}>Back</button>
      <div>{showResults}</div>
    </>
  );
}

export default Results;
