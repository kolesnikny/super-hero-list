import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://127.0.0.1:3001/api',
});

export const getAllHeroes = () => httpClient.get('/heroes/all');
export const createHero = (data) => httpClient.post('heroes');
