import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import LottieView from 'lottie-react-native';

export default function AnimationTest() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Animation Test' }} />
      
      <Text style={styles.title}>Testing Payment Animation</Text>
      
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../assets/animations/payment-animation.json')}
          style={styles.animation}
          autoPlay
          loop
        />
      </View>
      
      <Text style={styles.title}>Testing Loading Animation</Text>
      
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../assets/animations/loading.json')}
          style={styles.animation}
          autoPlay
          loop
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  animationContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  animation: {
    width: '100%',
    height: 200,
  },
}); 