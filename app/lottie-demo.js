import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import LoadingAnimation from './components/LoadingAnimation';
import AnimatedLottieView from './components/LottieView';

export default function LottieDemo() {
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  };

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <Stack.Screen options={{ title: 'Lottie Demo' }} />
      
      <ScrollView className="flex-1 p-4">
        <Text className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Lottie Animation Demo
        </Text>
        
        {/* Simple loader example */}
        <View className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <Text className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Simple Loading Animation
          </Text>
          <LoadingAnimation text="Loading..." />
        </View>

        {/* Interactive animation example */}
        <View className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <Text className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Interactive Animation
          </Text>
          
          <AnimatedLottieView
            source={require('../assets/animations/loading.json')}
            style={{ width: 200, height: 200, alignSelf: 'center' }}
            loop
            autoPlay={isPlaying}
            speed={speed}
          />
          
          <View className="flex-row justify-center mt-4 space-x-2">
            <TouchableOpacity 
              onPress={togglePlayPause}
              className="bg-blue-500 px-4 py-2 rounded-lg"
            >
              <Text className="text-white font-medium">
                {isPlaying ? 'Pause' : 'Play'}
              </Text>
            </TouchableOpacity>
          </View>
          
          <Text className="text-center mt-4 mb-2 text-gray-800 dark:text-white">
            Animation Speed: {speed}x
          </Text>
          
          <View className="flex-row justify-center space-x-2">
            {[0.5, 1, 1.5, 2].map((s) => (
              <TouchableOpacity 
                key={s} 
                onPress={() => changeSpeed(s)}
                className={`px-3 py-1 rounded-lg ${speed === s ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-700'}`}
              >
                <Text className={`${speed === s ? 'text-white' : 'text-gray-800 dark:text-white'} font-medium`}>
                  {s}x
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <Text className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
          You can find more animations at LottieFiles.com
        </Text>
      </ScrollView>
    </View>
  );
} 