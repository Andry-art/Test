import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import Feed from '../screen/Feed';
import MyRewards from '../screen/MyRewards';

const TopTabs = createMaterialTopTabNavigator();

const MyTabBar = ({state, descriptors, navigation}: MaterialTopTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: {key: string; name: any}, index: any) => {
        const {options} = descriptors[route?.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              key: route.key,
              name: route.name,
              merge: true,
            });
          }
        };
        let active;
        let inActive;

        if (state.index === 0) {
          active = styles.feedFocuse;
          inActive = styles.myRewardsnotFocuse;
        }
        if (state.index === 1) {
          active = styles.myRewardsFocuse;
          inActive = styles.feedNotFocuse;
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={isFocused ? active : inActive}>
            <Animated.Text
              style={isFocused ? styles.textActive : styles.textInActive}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TopTabNavigation = () => {
  return (
    <TopTabs.Navigator tabBar={props => <MyTabBar {...props} />}>
      <TopTabs.Screen name={'Feed'} component={Feed} />
      <TopTabs.Screen name={'My Rewards'} component={MyRewards} />
    </TopTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  feedFocuse: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myRewardsnotFocuse: {
    flex: 1,
    backgroundColor: '#E4E1DF',
    height: 50,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedNotFocuse: {
    flex: 1,
    backgroundColor: '#E4E1DF',
    height: 50,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myRewardsFocuse: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textActive: {
    color: '#C1B2A2',
    fontSize: 16,
  },
  textInActive: {
    color: '#000000',
    fontSize: 16,
  },

  container: {
    flexDirection: 'row',
    backgroundColor: '#F6F2ED',
  },
});

export default TopTabNavigation;
