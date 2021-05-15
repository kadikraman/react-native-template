import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeTabFirstPage } from './HomeTabFirstPage.screen';
import { HomeTabSecondPage } from './HomeTabSecondPage.screen';
import { HomeStackParamList } from '~src/types';

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeTabNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator initialRouteName="FirstPage">
      <HomeStack.Screen name="FirstPage" component={HomeTabFirstPage} />
      <HomeStack.Screen name="SecondPage" component={HomeTabSecondPage} />
    </HomeStack.Navigator>
  );
};
