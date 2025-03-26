import { TouchableOpacity, View, Text } from 'react-native';

export function TransactionItem({ icon, bgColor, name, date, amount, isExpense, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-[#F0F0F5] mb-2"
    >
      <View className="flex-row items-center gap-3">
        <View className={`w-10 h-10 rounded-full ${bgColor} items-center justify-center`}>
          {icon}
        </View>
        <View>
          <Text className="font-medium text-[#1A1A2E]">{name}</Text>
          <Text className="text-xs text-[#7B84A3]">{date}</Text>
        </View>
      </View>
      <Text className={`font-semibold ${isExpense ? "text-[#1A1A2E]" : "text-[#36B37E]"}`}>
        {amount}
      </Text>
    </TouchableOpacity>
  );
} 