import React from 'react';
import {ListRenderItemInfo, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Item from '../components/Item';
import {myRewardsSelector} from '../store/selectors/RewardsSelectors';
import {TRewardsInfo} from '../types';
import {useSelector} from 'react-redux';

const renderItem = ({item}: ListRenderItemInfo<TRewardsInfo>) => (
  <Item
    reworded={item.reworded}
    rewordedBy={item.rewordedBy}
    date={item.date}
    reason={item.reason}
  />
);

const MyRewards = () => {
  const myRewords = useSelector(myRewardsSelector);
  return (
    <FlatList
      data={myRewords}
      keyExtractor={item => String(item.id)}
      renderItem={renderItem}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default MyRewards;
