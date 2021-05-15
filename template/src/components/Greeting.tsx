import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Greeting = () => {
  return <Text style={styles.text}>Hello!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
});
