import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import {
  useHomeNavigation,
  useRootNavigation,
} from '../hooks/useTypedNavigation';

export const HomeTabFirstPage = () => {
  const homeNavigation = useHomeNavigation();
  const rootNavigation = useRootNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Open Second Page"
        onPress={() => homeNavigation.navigate('SecondPage')}
      />
      <Button
        title="Open Modal"
        onPress={() => rootNavigation.navigate('ExampleModal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
