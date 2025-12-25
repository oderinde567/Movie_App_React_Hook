import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: name === "rating" ? Number(value) : value });
  };

  const handleAddMovie = () => {
    if (!newMovie.title || !newMovie.posterURL) {
      alert("Title and Poster URL are required!");
      return;
    }
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h3>Add a New Movie</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          min="0"
          max="5"
          value={newMovie.rating}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
