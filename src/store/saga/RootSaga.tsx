import {all} from 'redux-saga/effects';
import {RewardsSaga} from './RewardsSaga';

export function* RootSaga(): Generator {
  return yield all([RewardsSaga()]);
}
