import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Scan, X, Flashlight, FlashlightOff, RotateCcw, Image as ImageIcon } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';

export default function ScanScreen() {
  const [flashMode, setFlashMode] = useState(false);
  const scannerAnimation = useSharedValue(0);

  React.useEffect(() => {
    scannerAnimation.value = withRepeat(
      withTiming(1, { duration: 2000, easing: Easing.linear }),
      -1,
      true
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: 0.7 - scannerAnimation.value * 0.5,
      transform: [
        { translateY: scannerAnimation.value * 200 },
      ],
    };
  });

  const toggleFlash = () => {
    setFlashMode(!flashMode);
  };

  const handleScan = () => {
    alert('Scan functionality would be triggered here.');
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      <View className="flex-1">
        <View className="flex-1 bg-gray-900">
          <View className="flex-1 bg-transparent">
            <View className="flex-row justify-between items-center p-4">
              <TouchableOpacity className="bg-black/30 p-2 rounded-full">
                <X size={24} color="white" />
              </TouchableOpacity>
              <Text className="text-white font-bold text-lg">Scan Code</Text>
              <TouchableOpacity className="bg-black/30 p-2 rounded-full" onPress={toggleFlash}>
                {flashMode ? (
                  <FlashlightOff size={24} color="white" />
                ) : (
                  <Flashlight size={24} color="white" />
                )}
              </TouchableOpacity>
            </View>

            {/* Scanner Area */}
            <View className="flex-1 justify-center items-center px-8">
              <View className="w-full aspect-square">
                <View className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white" />
                <View className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-white" />
                <View className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-white" />
                <View className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white" />
                
                <Animated.View 
                  className="absolute left-0 right-0 h-1.5 bg-[#6C5CE7]"
                  style={animatedStyles}
                />
              </View>
              
              <Text className="text-white text-center mt-4">
                Position the QR code within the frame to scan
              </Text>
            </View>

            {/* Footer Controls */}
            <View className="bg-black/50 rounded-t-3xl pt-6 pb-10 px-6">
              <TouchableOpacity 
                className="bg-[#6C5CE7] py-3 px-6 rounded-full mb-6 flex-row justify-center items-center"
                onPress={handleScan}
              >
                <Scan size={20} color="white" />
                <Text className="text-white font-bold ml-2">Scan Now</Text>
              </TouchableOpacity>
              
              <View className="flex-row justify-around">
                <TouchableOpacity className="items-center">
                  <View className="bg-white/20 p-3 rounded-full mb-1">
                    <RotateCcw size={22} color="white" />
                  </View>
                  <Text className="text-white/80 text-xs">Flip</Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="items-center">
                  <View className="bg-white/20 p-3 rounded-full mb-1">
                    <Scan size={22} color="white" />
                  </View>
                  <Text className="text-white/80 text-xs">Auto</Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="items-center">
                  <View className="bg-white/20 p-3 rounded-full mb-1">
                    <ImageIcon size={22} color="white" />
                  </View>
                  <Text className="text-white/80 text-xs">Gallery</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
} 