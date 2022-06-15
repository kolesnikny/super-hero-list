import { takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from '../actions/actionTypes';
import { getHeroSaga } from './heroSagas';

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_HEROES_REQUEST, getHeroSaga);
}

export default rootSaga;
