import Axios from 'axios';

export const getAllPeople = (page: number) =>
  Axios.get(`https://swapi.dev/api/people/?page=${page}`);

  export const getCharacter = (id: number) =>
  Axios.get(`https://swapi.dev/api/people/${id}`);
