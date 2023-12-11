import axios from 'axios'

export const fetchPeople = (page: number) => {
  return axios.get(`https://swapi.dev/api/people/?page=${page}`).then(res => res.data);
}

export const fetchSpaceships = (page: number) => {
  return axios.get(`https://swapi.dev/api/starships/?page=${page}`).then(res => res.data);
}

export const fetchPlanets = (page: number) => {
  return axios.get(`https://swapi.dev/api/planets/?page=${page}`).then(res => res.data);
}