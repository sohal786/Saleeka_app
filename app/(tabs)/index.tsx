import React from 'react';
import { View, StyleSheet } from 'react-native';
import CameraScreen from '../../components/CameraScreen'; // Adjust the import path if necessary

const Index = () => {
  return (
    <View style={styles.container}>
      <CameraScreen />
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

export default Index;
