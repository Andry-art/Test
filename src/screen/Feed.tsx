import React from 'react';
import {ListRenderItemInfo, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Item from '../components/Item';
import {TRewardsInfo} from '../types';
import {useSelector} from 'react-redux';
import {allRewards} from '../store/selectors/RewardsSelectors';

const renderItem = ({item}: ListRenderItemInfo<TRewardsInfo>) => (
  <Item
    reworded={item.reworded}
    rewordedBy={item.rewordedBy}
    date={item.date}
    reason={item.reason}
  />
);

const Feed = () => {
  const listOfRewards = useSelector(allRewards);

  return (
    <FlatList
      data={listOfRewards}
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

export default Feed;
