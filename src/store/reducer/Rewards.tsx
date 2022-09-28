import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {
  setAllRewardsSuccsess,
  addRewardSuccsess,
} from '../actions/RewardsActions';
import {TNewReward, TRewardsInfo, TUserInfo} from '../../types';

interface IRegistration {
  listOfRewards: Array<TRewardsInfo>;
  userInfo: TUserInfo;
}

const initialState: IRegistration = {
  listOfRewards: [],
  userInfo: {name: '', myrewards: 0, give: 0},
};

const Rewards = createReducer<IRegistration>(initialState, builder => {
  builder
    .addCase(
      setAllRewardsSuccsess,
      (
        state,
        action: PayloadAction<{
          feeds: Array<TRewardsInfo>;
          profile: TUserInfo;
        }>,
      ) => {
        state.listOfRewards = action.payload.feeds;
        state.userInfo = action.payload.profile;
      },
    )
    .addCase(addRewardSuccsess, (state, action: PayloadAction<TNewReward>) => {
      const id = state.listOfRewards[0].id + 1;
      const newReward = {
        id,
        reworded: action.payload.rewordedTo,
        rewordedBy: state.userInfo.name,
        date: action.payload.data,
        reason: action.payload.message,
      };
      state.listOfRewards = [newReward, ...state.listOfRewards];
      state.userInfo.give = state.userInfo.give + action.payload.amount;
    });
});

export default Rewards;
