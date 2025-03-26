import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { CreditCard, Plus, Eye, EyeOff, Settings, Smartphone, Globe } from 'lucide-react-native';

export default function CardsScreen() {
  const [showCardDetails, setShowCardDetails] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FC]">
      <ScrollView className="flex-1 px-4 pt-4">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-xl font-bold text-[#1A1A2E]">Your Cards</Text>
          <TouchableOpacity 
            onPress={() => {}}
            className="bg-[#4A6FD4] p-2 rounded-full"
          >
            <Plus size={20} color="white" />
          </TouchableOpacity>
        </View>
        
        {/* Primary Card */}
        <View className="mb-6">
          <Text className="text-[#7B84A3] font-medium mb-3">Primary Card</Text>
          <View className="bg-gradient-to-r from-[#4A6FD4] to-[#133E87] rounded-2xl p-5 shadow-md">
            <View className="flex-row justify-between items-center mb-6">
              <CreditCard size={30} color="white" />
              <TouchableOpacity onPress={() => setShowCardDetails(!showCardDetails)}>
                {showCardDetails ? 
                  <EyeOff size={20} color="white" /> : 
                  <Eye size={20} color="white" />
                }
              </TouchableOpacity>
            </View>
            
            <Text className="text-white/80 text-xs mb-1 font-medium">Card Number</Text>
            <Text className="text-white font-bold text-lg mb-4">
              {showCardDetails ? "5412 7534 8901 2345" : "•••• •••• •••• 2345"}
            </Text>
            
            <View className="flex-row justify-between">
              <View>
                <Text className="text-white/80 text-xs mb-1 font-medium">Card Holder</Text>
                <Text className="text-white">Alex Johnson</Text>
              </View>
              <View>
                <Text className="text-white/80 text-xs mb-1 font-medium">Expires</Text>
                <Text className="text-white">{showCardDetails ? "09/24" : "••/••"}</Text>
              </View>
              <View>
                <Text className="text-white/80 text-xs mb-1 font-medium">CVV</Text>
                <Text className="text-white">{showCardDetails ? "123" : "•••"}</Text>
              </View>
            </View>
          </View>
          
          <View className="flex-row justify-between mt-3">
            <CardAction 
              icon={<Smartphone size={18} color="#4A6FD4" />}
              label="Mobile Payment"
            />
            <CardAction 
              icon={<Globe size={18} color="#4A6FD4" />}
              label="Online Payment"
            />
            <CardAction 
              icon={<Settings size={18} color="#4A6FD4" />}
              label="Card Settings"
            />
          </View>
        </View>
        
        {/* Other Cards */}
        <View className="mb-6">
          <Text className="text-[#7B84A3] font-medium mb-3">Other Cards</Text>
          
          <OtherCard 
            color="bg-[#FF6B6B]"
            name="Business Card"
            last4="8765"
            balance="$3,450.00"
          />
          
          <OtherCard 
            color="bg-[#36B37E]"
            name="Savings Card"
            last4="4321"
            balance="$12,280.50"
          />
        </View>
        
        {/* Add New Card Button */}
        <TouchableOpacity className="flex-row items-center justify-center py-4 bg-white rounded-2xl border border-dashed border-[#4A6FD4] mb-6">
          <Plus size={20} color="#4A6FD4" />
          <Text className="text-[#4A6FD4] font-medium ml-2">Add New Card</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function CardAction({ icon, label }) {
  return (
    <TouchableOpacity className="items-center">
      <View className="bg-white p-2 rounded-full shadow-sm mb-1">
        {icon}
      </View>
      <Text className="text-xs text-[#7B84A3]">{label}</Text>
    </TouchableOpacity>
  );
}

function OtherCard({ color, name, last4, balance }) {
  return (
    <View className="bg-white rounded-2xl p-4 shadow-sm border border-[#F0F0F5] flex-row justify-between items-center mb-3">
      <View className="flex-row items-center">
        <View className={`${color} w-10 h-10 rounded-full items-center justify-center`}>
          <CreditCard size={18} color="white" />
        </View>
        <View className="ml-3">
          <Text className="font-medium text-[#1A1A2E]">{name}</Text>
          <Text className="text-xs text-[#7B84A3]">•••• {last4}</Text>
        </View>
      </View>
      <View>
        <Text className="font-bold text-[#1A1A2E]">{balance}</Text>
      </View>
    </View>
  );
} 