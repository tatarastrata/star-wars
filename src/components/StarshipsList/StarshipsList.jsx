import React from 'react';
import PropTypes from 'prop-types';
import {TypeStarship} from '../../types';


export const StarshipsList = ({starships}) => (
  <ul
    style={{color: "black"}}
  >
    {starships.map(starship => {
      return (
        <li key={starship.url}>
          {starship.model} by {starship.manufacturer}
        </li>
      )
    })}
  </ul>
)

StarshipsList.propTypes = {
  starships: PropTypes.arrayOf(TypeStarship.isRequired).isRequired,
}
