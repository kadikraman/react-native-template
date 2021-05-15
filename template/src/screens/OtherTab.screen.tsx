import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const OtherTab = () => {
  return (
    <View style={styles.container}>
      <Text>Other Bottom Tab</Text>
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
