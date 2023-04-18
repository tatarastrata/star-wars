import React from 'react';
import {Col, Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {TypeMovie} from '../../types';

export const Movie = ({movie, handleShow}) => (
  <Col>
    <Card 
      style={{ width: '25rem', marginBottom: '25px'}}
      className="MoviesList__item" 
      key={movie.created}
    >
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.opening_crawl}</Card.Text>
        <Button onClick={() => handleShow(movie)} variant="primary">Learn more</Button>
      </Card.Body>
      </Card>
  </Col>
)

Movie.propTypes = {
  movie: TypeMovie.isRequired,
  handleShow: PropTypes.func.isRequired,
}
