import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from './Header';
import TopTabNavigation from '../navigation/TopTabNavigation';
import ButtonAddReward from '../components/ButtonAddReward';
import ModalGiveReward from './ModalGiveReward';
import {useDispatch} from 'react-redux';
import {getAllRewards} from '../store/actions/RewardsActions';

const Screen = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRewards());
  }, [dispatch]);
  return (
    <>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <TopTabNavigation />
      <ButtonAddReward open={setIsShown} />
      <View>
        <ModalGiveReward isShown={isShown} close={setIsShown} />
      </View>
    </>
  );
};

export default Screen;
