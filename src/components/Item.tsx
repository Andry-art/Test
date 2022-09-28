import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import IconSource from '../../assets/profile.png';
import moment from 'moment';

interface Props {
  reworded: string;
  rewordedBy: string;
  date: Date;
  reason: string;
}

const Item: FC<Props> = ({reworded, rewordedBy, date, reason}) => {
  const title = `${reworded} rewarded by ${rewordedBy}`;
  const dateNow = new Date();
  const dateMonthBefore = new Date().setMonth(dateNow.getMonth() - 1);
  const DatesBetweenMonth = moment(date).isBetween(
    moment(dateMonthBefore).format('yy-M-D'),
    moment(dateNow).format('yy-M-D'),
  );
  const data = DatesBetweenMonth
    ? moment(date).fromNow()
    : moment(date).format('MMM D, YYYY');

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={IconSource} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{reason}</Text>
        <Text style={styles.rewardBy}>{title}</Text>
        <Text style={styles.date}>{data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 20,
  },
  icon: {
    tintColor: '#9FADBA',
    width: 30,
    height: 30,
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#DFE6EC',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '70%',
    marginLeft: 20,
  },
  rewardBy: {
    fontSize: 12,
    marginTop: 10,
    color: '#CFCCCB',
  },
  date: {
    fontSize: 12,
    color: '#CFCCCB',
  },
  description: {
    fontSize: 16,
  },
});

export default Item;
