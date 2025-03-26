import { View, Text, TouchableOpacity } from 'react-native';

export function BillItem({ icon, name, dueDate, amount, bgColor, iconColor }) {
  return (
    <View className="flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-[#F0F0F5] mb-2">
      <View className="flex-row items-center gap-3">
        <View className={`w-10 h-10 rounded-full ${bgColor} items-center justify-center ${iconColor}`}>
          {icon}
        </View>
        <View>
          <Text className="font-medium text-[#1A1A2E]">{name}</Text>
          <Text className="text-xs text-[#7B84A3]">Due {dueDate}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="font-semibold text-[#1A1A2E]">{amount}</Text>
        <TouchableOpacity>
          <Text className="text-xs font-medium text-[#4A6FD4]">Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 