import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDetail from "./MovieDetail";

const App = () => {
  const [movies, setMovies] = useState([...]); // Your updated movies array
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
