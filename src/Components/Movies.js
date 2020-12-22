import React from "react";
import "../Assets/Css/Movies.css";

const Movies = ({ category, images }) => {
  return (
    <div>
      <h2>{category}</h2>
      <div className="movies-list">
        {images.map((url, index) => {
          return <img key={index} alt="film or serie" src={url} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
