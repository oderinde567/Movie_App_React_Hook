import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
      <Link to={`/movie/${movie.title}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={movie.posterURL}
          alt={movie.title}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}/5</p>
      </Link>
    </div>
  );
};

export default MovieCard;
