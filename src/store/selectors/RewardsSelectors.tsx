import {createDraftSafeSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const allRewards = (state: RootState) => {
  return state.Rewards.listOfRewards;
};

export const userInfoSelector = (state: RootState) => {
  return state.Rewards.userInfo;
};

export const myRewardsSelector = createDraftSafeSelector(
  allRewards,
  userInfoSelector,
  (allRewards, user) => {
    const myRewards = allRewards.filter(item => item.reworded === user.name);
    return myRewards;
  },
);
