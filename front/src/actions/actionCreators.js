import { ACTION_TYPES } from './actionTypes';

//Create hero
export const createHeroRequestAction = (values) => {
  return {
    type: ACTION_TYPES.CREATE_HERO_REQUEST,
    values,
  };
};

export const createHeroSuccessAction = (values) => {
  return {
    type: ACTION_TYPES.CREATE_HERO_SUCCESS,
    values,
  };
};
export const createHeroErrorAction = (error) => {
  return {
    type: ACTION_TYPES.CREATE_HERO_ERROR,
    error,
  };
};

//Get Heroes
export const getHeroRequestAction = (values) => {
  return {
    type: ACTION_TYPES.GET_HEROES_REQUEST,
    values,
  };
};

export const getHeroSuccessAction = (values) => {
  return {
    type: ACTION_TYPES.GET_HEROES_SUCCESS,
    values,
  };
};
export const getHeroErrorAction = (error) => {
  return {
    type: ACTION_TYPES.GET_HEROES_ERROR,
    error,
  };
};
