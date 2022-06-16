import * as API from '../api';
import { put } from 'redux-saga/effects';

import * as ActionCreators from '../actions/actionCreators';

export function* getHeroSaga(action) {
  try {
    const {
      data: { data: heroes },
    } = yield API.getAllHeroes(action.payload);
    yield put(ActionCreators.getHeroSuccessAction(heroes));
  } catch (error) {
    yield put(ActionCreators.getHeroErrorAction(error));
  }
}

export function createHeroSaga(action) {}
