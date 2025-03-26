import { Tabs } from 'expo-router';
import { Home, PieChart, CreditCard, User } from 'lucide-react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4A6FD4',
        tabBarInactiveTintColor: '#7B84A3',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          borderTopColor: '#F0F0F5',
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
        },
        headerStyle: {
          backgroundColor: '#ffffff',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: '#F0F0F5',
        },
        headerTintColor: '#1A1A2E',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Statistics',
          tabBarLabel: 'Stats',
          tabBarIcon: ({ color, size }) => <PieChart size={size} color={color} />,
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: 'Cards',
          tabBarLabel: 'Cards',
          tabBarIcon: ({ color, size }) => <CreditCard size={size} color={color} />,
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          headerShown: true,
        }}
      />
    </Tabs>
  );
} 