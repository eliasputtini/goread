import axios from 'axios';
import {baseURL} from './config';

export const api = axios.create({baseURL});

export const getSearchRepo = async (query, page) => {
  try {
    const response = await axios.get(
      'https://api.github.com/search/repositories',
      {
        params: {
          q: query,
          page: page,
          per_page: 50,
        },
      },
    );

    return response.data;
  } catch (err) {
    console.error('error => ', err);
  }
};

