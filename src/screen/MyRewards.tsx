import React from 'react';
import {ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Item from '../components/Item';
import {myRewardsSelector} from '../store/selectors/RewardsSelectors';
import {rewardsInfo} from '../types';
import {useSelector} from 'react-redux';

const renderItem = ({item}: ListRenderItemInfo<rewardsInfo>) => (
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
    <View style={styles.container}>
      <FlatList
        data={myRewords}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default MyRewards;
