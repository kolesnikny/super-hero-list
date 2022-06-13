import { ACTION_TYPES } from '../actions/actionTypes';

const initState = {
  users: [],
  error: null,
  isFetching: false,
};

export const heroReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      return {
        ...state,
        isFetching: false,
      };
    }
    case ACTION_TYPES.CREATE_HERO_SUCCESS: {
      const { values } = action;
      const { heroes } = state;
      return {
        ...state,
        heroes: [...heroes, values],
        isFetching: false,
      };
    }
    case ACTION_TYPES.CREATE_HERO_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default heroReducer;
