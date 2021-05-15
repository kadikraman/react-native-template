import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const HomeTabSecondPage = () => {
  return (
    <View style={styles.container}>
      <Text>Second Page</Text>
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
