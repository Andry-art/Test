import {createAction} from '@reduxjs/toolkit';
import {TNewReward, TRewardsInfo, TUserInfo} from '../../types';

export const getAllRewards = createAction('GET_ALL_REWARDS');

export const setAllRewardsSuccsess = createAction<{
  feeds: Array<TRewardsInfo>;
  profile: TUserInfo;
}>('setAllRewardsSuccsess');

export const addReward = createAction<TNewReward>('ADD_REWARD');
export const addRewardSuccsess = createAction<TNewReward>('addRewardSuccsess');
