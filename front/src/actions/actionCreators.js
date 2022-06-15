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
export const getHeroRequestAction = ({ limit, offset }) => {
  return {
    type: ACTION_TYPES.GET_HEROES_REQUEST,
    payload: {
      limit,
      offset,
    },
  };
};

export const getHeroSuccessAction = (heroes) => {
  return {
    type: ACTION_TYPES.GET_HEROES_SUCCESS,
    payload: { heroes },
  };
};
export const getHeroErrorAction = (error) => {
  return {
    type: ACTION_TYPES.GET_HEROES_ERROR,
    payload: { error },
  };
};
