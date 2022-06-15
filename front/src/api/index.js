import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const createHero = (data) => httpClient.post('/heroes', data);
export const getAllHeroes = ({ offset = 0, limit = 5 }) =>
  httpClient.get(`/heroes/all?${queryString.stringify({ offset, limit })}`);
