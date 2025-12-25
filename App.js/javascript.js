import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const App = () => {
const [movies, setMovies] = useState([
  {
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    posterURL: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    rating: 5,
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    title: "The Matrix",
    description: "A computer hacker learns about the true nature of reality.",
    posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    rating: 4,
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
  },
]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />
      <MovieList
        movies={movies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
            movie.rating >= filterRating
        )}
        addMovie={addMovie}
      />
    </div>
  );
};

export default App;
