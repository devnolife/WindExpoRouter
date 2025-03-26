import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { BarChart2, PieChart, TrendingUp, Filter, ArrowUpRight } from 'lucide-react-native';

export default function StatsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FC]">
      <ScrollView className="flex-1 px-4 pt-4">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-xl font-bold text-[#1A1A2E]">Financial Statistics</Text>
          <TouchableOpacity className="bg-white p-2 rounded-full shadow-sm">
            <Filter size={20} color="#4A6FD4" />
          </TouchableOpacity>
        </View>

        {/* Overview Card */}
        <View className="bg-white rounded-2xl shadow-sm p-5 mb-6 border border-[#F0F0F5]">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-base font-bold text-[#1A1A2E]">Monthly Overview</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-sm font-medium text-[#4A6FD4] mr-1">Details</Text>
              <ArrowUpRight size={14} color="#4A6FD4" />
            </TouchableOpacity>
          </View>
          
          <View className="h-40 flex-row items-center justify-center mb-4">
            <BarChart2 size={100} color="#4A6FD4" />
          </View>
          
          <View className="flex-row justify-between">
            <View className="items-center">
              <Text className="text-[#7B84A3] text-xs mb-1">Income</Text>
              <Text className="text-[#1A1A2E] font-bold">$1,240</Text>
              <View className="flex-row items-center mt-1">
                <TrendingUp size={14} color="#36B37E" />
                <Text className="text-xs text-[#36B37E] ml-1">+12%</Text>
              </View>
            </View>
            
            <View className="items-center">
              <Text className="text-[#7B84A3] text-xs mb-1">Expenses</Text>
              <Text className="text-[#1A1A2E] font-bold">$551</Text>
              <View className="flex-row items-center mt-1">
                <TrendingUp size={14} color="#36B37E" />
                <Text className="text-xs text-[#36B37E] ml-1">-8%</Text>
              </View>
            </View>
            
            <View className="items-center">
              <Text className="text-[#7B84A3] text-xs mb-1">Savings</Text>
              <Text className="text-[#1A1A2E] font-bold">$689</Text>
              <View className="flex-row items-center mt-1">
                <TrendingUp size={14} color="#36B37E" />
                <Text className="text-xs text-[#36B37E] ml-1">+23%</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Spending Categories */}
        <View className="bg-white rounded-2xl shadow-sm p-5 mb-6 border border-[#F0F0F5]">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-base font-bold text-[#1A1A2E]">Spending Categories</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-sm font-medium text-[#4A6FD4] mr-1">See All</Text>
              <ArrowUpRight size={14} color="#4A6FD4" />
            </TouchableOpacity>
          </View>
          
          <View className="h-40 flex-row items-center justify-center mb-4">
            <PieChart size={100} color="#4A6FD4" />
          </View>
          
          <View className="space-y-3">
            <CategoryItem 
              name="Food & Drinks" 
              amount="$210.00" 
              percentage={38} 
              color="#4A6FD4" 
            />
            <CategoryItem 
              name="Shopping" 
              amount="$140.00" 
              percentage={25} 
              color="#FF6B6B" 
            />
            <CategoryItem 
              name="Transport" 
              amount="$95.00" 
              percentage={17} 
              color="#FFAB4A" 
            />
            <CategoryItem 
              name="Entertainment" 
              amount="$65.00" 
              percentage={12} 
              color="#36B37E" 
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoryItem({ name, amount, percentage, color }) {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center">
        <View 
          style={{ backgroundColor: color }} 
          className="w-3 h-3 rounded-full mr-2" 
        />
        <Text className="text-[#1A1A2E]">{name}</Text>
      </View>
      <View className="flex-row items-center">
        <Text className="text-[#1A1A2E] font-medium mr-2">{amount}</Text>
        <Text className="text-[#7B84A3] text-xs">{percentage}%</Text>
      </View>
    </View>
  );
} 