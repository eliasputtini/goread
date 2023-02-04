import axios from 'axios';
import {baseURL} from './config';

export const api = axios.create({baseURL});

export const getSearchRepo = async query => {
  try {
    const response = await axios.get(
      'https://api.github.com/search/repositories',
      {
        params: {
          q: query,
          sort: 'stars',
          order: 'desc',
        },
      },
    );

    return response.data;
  } catch (err) {
    console.error('error => ', err);
  }
};
