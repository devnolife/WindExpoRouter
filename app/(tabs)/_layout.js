import { Tabs } from "expo-router";
import { CreditCard, BarChart2, User, Info, Scan } from "lucide-react-native";
import { BlurView } from "expo-blur";
import { View, StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3674B5",
        tabBarInactiveTintColor: "#A0A0B9",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          elevation: 0,
          height: 85,
          paddingBottom: 10,
          paddingTop: 10,
          position: 'absolute',
          left: 15,
          right: 15,
          borderRadius: 20,
          shadowColor: "#3674B5",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        tabBarItemStyle: {
          marginHorizontal: 5,
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <CreditCard size={24} color={focused ? "#3674B5" : "#A0A0B9"} strokeWidth={focused ? 2.5 : 1.5} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Statistics",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <BarChart2 size={24} color={focused ? "#12CDD4" : "#A0A0B9"} strokeWidth={focused ? 2.5 : 1.5} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color }) => (
            <View style={styles.scanButton}>
              <Scan size={28} color="#FFFFFF" />
            </View>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 5,
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <User size={24} color={focused ? "#FF7A60" : "#A0A0B9"} strokeWidth={focused ? 2.5 : 1.5} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "Info",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Info size={24} color={focused ? "#FFCA28" : "#A0A0B9"} strokeWidth={focused ? 2.5 : 1.5} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 8,
    borderRadius: 10,
  },
  scanButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0D92F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: "#9747FF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    transform: [{scale: 1.1}],
  }
}); 