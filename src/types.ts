export type TRewardsInfo = {
  id: number;
  reworded: string;
  rewordedBy: string;
  date: Date;
  reason: string;
};

export type TUserInfo = {
  name: string;
  myrewards: number;
  give: number;
};

export type TNewReward = {
  rewordedTo: string;
  amount: number;
  message: string;
  data: Date;
};
