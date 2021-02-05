import './App.css';
import React, {useState, useEffect, useMemo, useCallback} from 'react';
import { MoviesList } from './components/MoviesList/MoviesList';
import {SearchInput } from './components/SearchInput/SearchInput';
import { getMovies } from './api/helpers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { MovieDetails } from './components/MovieDetails/MovieDetails';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [chosenMovie, setChosenMovie] = useState({});

  useEffect(() => {
    getMovies()
      .then(moviesFromServer => {
        setMovies(moviesFromServer);
      })
  }, []);

  const moviesOnPage = useMemo(() => {
    if (appliedQuery) {
      let filteredMovies = movies.filter(movie => {
        return movie.title.includes(appliedQuery) || movie["opening_crawl"].includes(appliedQuery);
      });

      return filteredMovies.sort((movieOne, movieTwo) => movieOne.title.localeCompare(movieTwo.title));
    }

    return [...movies].sort((movieOne, movieTwo) => movieOne.title.localeCompare(movieTwo.title));
  }, [appliedQuery, movies]);

  const onChange = (e) => {
    setQuery(e.target.value);
    applyQuery(e.target.value);
  }

  const debounce = (f, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(f, delay, ...args);
    }
  }

  const applyQuery = useCallback(
    debounce(setAppliedQuery, 1000),
    []
  )

  const handleShow = (movie) => {
    setChosenMovie(movie);
    setModalShow(true);
  }

  const handleClose = () => {
    setChosenMovie({});
    setModalShow(false);
  }

  return (
    <>
      {modalShow && <MovieDetails 
        show={modalShow} 
        handleClose={handleClose} 
        movie={chosenMovie}
      />}
        <header>
          <SearchInput 
            value={query}
            onChange={onChange}
          />
        </header>

        <Container className="App">
        <main>
          <MoviesList 
            handleShow={handleShow}
            movies={moviesOnPage}
          />
        </main>
      </Container>
    </>
  );
}

export default App;
