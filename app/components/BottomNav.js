import { View, TouchableOpacity, Text } from 'react-native';
import { Link } from 'expo-router';
import { Home, PieChart, CreditCard, Settings } from 'lucide-react-native';

export function BottomNav() {
  return (
    <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#F0F0F5] px-6 py-3">
      <View className="flex-row justify-between items-center">
        <Link href="/" asChild>
          <TouchableOpacity className="items-center">
            <Home size={24} color="#4A6FD4" />
            <Text className="text-xs mt-1 text-[#4A6FD4]">Home</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/stats" asChild>
          <TouchableOpacity className="items-center">
            <PieChart size={24} color="#7B84A3" />
            <Text className="text-xs mt-1 text-[#7B84A3]">Stats</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/cards" asChild>
          <TouchableOpacity className="items-center">
            <CreditCard size={24} color="#7B84A3" />
            <Text className="text-xs mt-1 text-[#7B84A3]">Cards</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/profile" asChild>
          <TouchableOpacity className="items-center">
            <Settings size={24} color="#7B84A3" />
            <Text className="text-xs mt-1 text-[#7B84A3]">Profile</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
} 