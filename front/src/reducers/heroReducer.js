import { ACTION_TYPES } from '../actions/actionTypes';

const initState = {
  heroes: [],
  error: null,
  isFetching: false,
};

export const heroReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_HEROES_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_HEROES_SUCCESS: {
      // const { values } = action;
      const { heroes } = state;
      const {
        payload: { heroes: newHeroes },
      } = action;
      return {
        ...state,
        isFetching: false,
        heroes: [...heroes, ...newHeroes],
      };
    }
    case ACTION_TYPES.GET_HEROES_ERROR: {
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
