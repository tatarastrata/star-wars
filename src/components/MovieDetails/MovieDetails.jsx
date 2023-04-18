import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import { StarshipsList } from '../StarshipsList/StarshipsList';
import {PlanetsList} from '../PlanetsList/PlanetsList';
import PropTypes from 'prop-types';
import {TypeMovie} from '../../types';

export const MovieDetails = ({show, movie, handleClose}) => {
  const [starships, setStarships] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [showPlanets, setShowPlanets] = useState(false);
  const [showStarships, setShowStarships] = useState(false);
  const [onHoverStarships, setHoverStarships] = useState(false);
  const [onHoverPlanets, setHoverPlanets] = useState(false);

  const loadStarships = async () => {
    const starshipsUrls = movie.starships.map(starship => starship.replace('http', 'https'));

    Promise.all(starshipsUrls.map(starship =>
      fetch(starship)
        .then(response => response.json())
          .then(newStarship => setStarships(prev => [...prev, newStarship]))))
  }

  const loadPlanets = async () => {
    const planetsUrls = movie.planets.map(planet => planet.replace('http', 'https'));
    Promise.all(planetsUrls.map(planet =>
      fetch(planet)
        .then(response => response.json())
          .then(newPlanet => setPlanets(prev => [...prev, newPlanet]))))
   }

   const handleOpenPlanets = () => {
    setShowPlanets(prev => !prev);
  }

   const handleOpenStarships = () => {
    setShowStarships(prev => !prev);
   }

   const handleHover = (e) => {
    e.preventDefault();
     const element = e.target;

     switch (element.className) {
       case ("Starships") :
         setHoverStarships(true);
         return onHoverStarships
        case ("Planets") :
          setHoverPlanets(true);
          return onHoverPlanets;
        default :
          setHoverStarships(false);
          setHoverPlanets(false);
          return;
     }
   }

   const handleLeave = (e) => {
     e.preventDefault();
    const element = e.target;

    switch (element.className) {
      case ("Starships") :
        setHoverStarships(false);
        return onHoverStarships
       case ("Planets") :
         setHoverPlanets(false);
         return onHoverPlanets;
       default :
         setHoverStarships(false);
         setHoverPlanets(false);
         return;
    }
  }

useEffect(() => {
  loadStarships();
  loadPlanets();
}, [movie.episode_id]);

  return (
    <Modal 
      show={show} 
      className="MovieDetails" 
      onHide={handleClose}
    >
      <Modal.Header closeButton className="MovieDetails__header">
        <Modal.Title className="title">
          {movie.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="MovieDetails__body">
        <div className="MovieDetails__creators">
          <h6>Director:</h6>
          <p>{movie.director}</p>

          <h6>Producers: </h6>
          <p>{movie.producer}</p>
        </div>
        <div className="MovieDetails__plot">
          <h6>Opening Crawl:</h6>
          <p>{movie.opening_crawl}</p>
        </div>
        <ul className="MovieDetails__list">
          {onHoverStarships
          ? (<li
              style={{color: "blue", cursor: "pointer"}}
              className="Starships"
              onClick={handleOpenStarships}
              onMouseOver={(e) => handleHover(e)}
              onMouseLeave ={(e) => handleLeave(e)}
            >Starships
            {showStarships && (
              <StarshipsList 
                starships={starships}
              />
              )}</li>)
          : (<li
                style={{color: "black"}}
                className="Starships"
                onClick={handleOpenStarships}
                onMouseOver={(e) => handleHover(e)}
                onMouseLeave ={(e) => handleLeave(e)}
              >Starships
              {showStarships && (
                <StarshipsList 
                  starships={starships}
                />
              )}
            </li>)
          }
          {onHoverPlanets
          ? (<li
              style={{color: "blue", cursor: "pointer"}}
              className="Planets"
              onClick={handleOpenPlanets}
              onMouseOver={(e) => handleHover(e)}
              onMouseLeave ={(e) => handleLeave(e)}
            >
              Planets
              {showPlanets && (<PlanetsList planets={planets}/>)}
            </li>)
          : (<li
                className="Planets"
                onClick={handleOpenPlanets}
                onMouseOver={(e) => handleHover(e)}
                onMouseLeave ={(e) => handleLeave(e)}
              >
                Planets
                {showPlanets && (<PlanetsList planets={planets}/>)}
            </li>
            )
          }
        </ul>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

MovieDetails.propTypes = {
  show: PropTypes.bool.isRequired,
  movie: TypeMovie.isRequired,
  handleClose: PropTypes.func.isRequired,
}