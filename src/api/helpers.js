export const BASE_URL = 'https://swapi.dev/api/';

export const request = (url, options) => fetch(`${BASE_URL}${url}`, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error ('no response');
    }

    return response.json();
  })
  .then(result => result.results);

export const getMovies = () => request('films/');