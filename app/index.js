import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />
      <Text className="text-xl font-bold text-blue-600">Home Screen</Text>
      <Text className="text-gray-600 mt-2">Welcome to the Home Page</Text>
    </View>
  );
} 