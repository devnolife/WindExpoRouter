import { TouchableOpacity, View, Text } from 'react-native';

export function QuickActionButton({ icon, label, color, iconColor, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="items-center bg-white p-3 rounded-2xl shadow-sm border border-[#F0F0F5]"
    >
      <View className={`w-10 h-10 rounded-full ${color} items-center justify-center ${iconColor}`}>
        {icon}
      </View>
      <Text className="text-xs font-medium text-[#1A1A2E] mt-2">{label}</Text>
    </TouchableOpacity>
  );
} 