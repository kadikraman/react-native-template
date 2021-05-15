import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Greeting } from '~src/components/Greeting';
import {
  useHomeNavigation,
  useRootNavigation,
} from '~src/hooks/useTypedNavigation';

export const HomeTabFirstPage = () => {
  const homeNavigation = useHomeNavigation();
  const rootNavigation = useRootNavigation();
  return (
    <View style={styles.container}>
      <Greeting />
      <View style={styles.bottomSpace}>
        <Button
          title="Open Second Page"
          onPress={() => homeNavigation.navigate('SecondPage')}
        />
      </View>
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
  bottomSpace: {
    marginBottom: 10,
  },
});
