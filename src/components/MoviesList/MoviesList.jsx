import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {TypeMovie} from '../../types';
import {Movie} from '../Movie/Movie';

export const MoviesList = ({handleShow, movies}) => {
  return (
    <Container fluid className="MoviesList">
      <Row>
        {movies.map(movie => (
          <Movie 
            key={movie.episode_id} 
            movie={movie} 
            handleShow={handleShow}
          />
        ))}
      </Row>
    </Container>
  )
}

MoviesList.propTypes = {
  handleShow: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(TypeMovie.isRequired).isRequired,
}