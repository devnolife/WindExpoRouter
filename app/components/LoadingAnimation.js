import React from 'react';
import { View, Text } from 'react-native';
import AnimatedLottieView from './LottieView';

/**
 * A loading animation component using Lottie
 * @param {Object} props - Component props
 * @param {string} props.text - Optional text to display below the animation
 * @param {Object} props.style - Additional styles for the container
 */
export default function LoadingAnimation({ text, style }) {
  return (
    <View className="items-center justify-center" style={style}>
      <AnimatedLottieView
        source={require('../../assets/animations/loading.json')}
        style={{ width: 200, height: 200 }}
        loop
        autoPlay
      />
      {text && <Text className="mt-4 text-center text-base font-medium">{text}</Text>}
    </View>
  );
} 