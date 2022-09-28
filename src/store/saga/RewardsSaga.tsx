import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeEvery} from 'redux-saga/effects';
import {feeds, profile} from '../../mockData';
import {TNewReward} from '../../types';
import {
  addRewardSuccsess,
  setAllRewardsSuccsess,
} from '../actions/RewardsActions';

//There is preperetion for async requests, should use those generetors for requests to back-end

export function* setAllReawards(): Generator {
  try {
    yield put(setAllRewardsSuccsess({feeds, profile}));
  } catch (error) {
    console.log(error);
  }
}

export function* addRewardSaga(action: PayloadAction<TNewReward>): Generator {
  try {
    yield put(addRewardSuccsess(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* RewardsSaga(): Generator {
  yield takeEvery('GET_ALL_REWARDS', setAllReawards);
  yield takeEvery('ADD_REWARD', addRewardSaga);
}
