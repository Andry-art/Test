import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import IconSource from '../../assets/profile.png';
import {userInfoSelector} from '../store/selectors/RewardsSelectors';

const Header = () => {
  const userInfo = useSelector(userInfoSelector);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.iconContainer}>
          <Image source={IconSource} style={styles.icon} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{userInfo.name}</Text>
        <View style={styles.text}>
          <Text style={styles.title}>My Rewards</Text>
          <Text style={styles.amount}>{userInfo.myrewards}$</Text>
          <Text>/</Text>
          <Text style={styles.titleGive}>Give</Text>
          <Text style={styles.amount}>{userInfo.give}$</Text>
        </View>
        <View style={styles.text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 40,
    paddingTop: 10,
    padding: 5,
    backgroundColor: '#F6F2ED',
  },
  iconContainer: {
    width: 90,
    height: 90,
    backgroundColor: '#DFE6EC',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '50%',
    height: 90,
    justifyContent: 'center',
    marginLeft: 20,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
  },
  titleGive: {
    fontSize: 14,
    marginLeft: 5,
  },
  amount: {
    fontSize: 14,
    marginHorizontal: 4,
    fontWeight: '800',
  },
  icon: {
    tintColor: '#9FADBA',
  },
  name: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: '800',
  },
});

export default Header;
