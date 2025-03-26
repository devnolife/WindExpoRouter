import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ExpoRoot } from 'expo-router';

export default function App() {
  // This is needed for Expo Router to work properly
  return <ExpoRoot />;
} 