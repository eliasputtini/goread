import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from './actionTypes';

import {getSearchRepo} from '../services/api';

export const getDataLoading = () => {
  return {type: GET_DATA_LOADING};
};

export const getDataSuccess = payload => {
  return {type: GET_DATA_SUCCESS, payload};
};

export const getDataError = () => {
  return {type: GET_DATA_ERROR};
};

export const getDataRequest = (query, page) => async dispatch => {
  try {
    dispatch(getDataLoading());
    const result = await getSearchRepo(query, page);

    const repoData = result.items;

    console.log('here');
    dispatch(getDataSuccess({repoData}));
  } catch (err) {
    console.log(err);
    dispatch(getDataError());
  }
};

export const getMoreDataRequest = (query, page, repos) => async dispatch => {
  try {
    dispatch(getDataLoading());
    const result = await getSearchRepo(query, page);
    const repoData = [...repos, ...result.items];
    dispatch(getDataSuccess({repoData}));
  } catch (err) {
    console.log(err);
    dispatch(getDataError());
  }
};
