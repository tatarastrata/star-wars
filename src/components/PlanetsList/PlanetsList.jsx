import React from 'react';
import PropTypes from 'prop-types';
import {TypePlanet} from '../../types';

export const PlanetsList = ({planets}) => (
  <ul style={{color: "black"}}>
    {planets.map(planet => {
      return (
        <li key={planet.url}>
          Planet {planet.name}
          <br />
          {planet.terrain} terrain; {planet.climate} climate
        </li>
      )
    })}
  </ul>
);

PlanetsList.propTypes = {
  planets: PropTypes.arrayOf(TypePlanet.isRequired).isRequired,
}
