import { useNavigation } from '@react-navigation/native';
import {
  HomeStackParamList,
  MainTabsParamList,
  RootStackParamList,
} from '../types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

export const useRootNavigation = () =>
  useNavigation<StackNavigationProp<RootStackParamList>>();

export const useMainTabsNavigation = () =>
  useNavigation<BottomTabNavigationProp<MainTabsParamList>>();

export const useHomeNavigation = () =>
  useNavigation<StackNavigationProp<HomeStackParamList>>();
