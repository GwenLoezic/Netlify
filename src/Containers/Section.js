import React from "react";
import "../Assets/Css/Section.css";
import Movies from "../Components/Movies";
import data from "../Assets/Data/movies.json"

function Section() {
  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <Movies key={index} category={item.category} images={item.images} />
        );
      })}
    </div>
  );
}

export default Section;
