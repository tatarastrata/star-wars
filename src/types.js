import PropTypes from 'prop-types';

export const TypeMovie = PropTypes.shape({
  director: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  pening_crawl: PropTypes.string.isRequired,
  episode_id: PropTypes.number.isRequired,
});

export const TypeStarship = PropTypes.shape({
  model: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
})

export const TypePlanet = PropTypes.shape({
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
})
