import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const HomeTabSecondPage: React.FC = () => {
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
