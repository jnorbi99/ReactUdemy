import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLodaing, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //Get request
  // we have to use the callBack, because we need to add it to the dependency array, in ht useEffect
  const fetcMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-2c7db-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Valami nem oké");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }

      /* const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl,
        };
      }); */

      setMovieList(loadedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  //fecth the data automaticly, at the component first render
  useEffect(() => {
    fetcMoviesHandler();
  }, [fetcMoviesHandler]);

  //POST request
  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-http-2c7db-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies!</p>;

  if (movieList.length > 0) {
    content = <MoviesList movies={movieList} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLodaing) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetcMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
