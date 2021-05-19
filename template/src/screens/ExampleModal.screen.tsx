import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const ExampleModal: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Example Modal!</Text>
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
