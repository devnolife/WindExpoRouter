import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { 
  User, 
  ChevronRight,
  CreditCard,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  Smartphone,
  MapPin
} from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FC]">
      <ScrollView className="flex-1 px-4 pt-4">
        {/* Profile Header */}
        <View className="items-center mb-6">
          <View className="w-20 h-20 rounded-full bg-[#4A6FD4] items-center justify-center mb-3">
            <Text className="text-white text-2xl font-bold">AJ</Text>
          </View>
          <Text className="text-xl font-bold text-[#1A1A2E]">Alex Johnson</Text>
          <Text className="text-[#7B84A3]">alex.johnson@example.com</Text>
          
          <TouchableOpacity className="mt-3 px-4 py-2 bg-white rounded-full shadow-sm">
            <Text className="text-[#4A6FD4] font-medium">Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        {/* Account Settings */}
        <View className="mb-6">
          <Text className="text-[#7B84A3] font-medium mb-3">Account Settings</Text>
          
          <View className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#F0F0F5]">
            <ProfileMenuItem 
              icon={<User size={20} color="#4A6FD4" />}
              title="Personal Information"
              subtitle="Manage your personal details"
            />
            
            <ProfileMenuItem 
              icon={<CreditCard size={20} color="#FF6B6B" />}
              title="Payment Methods"
              subtitle="Manage your cards and accounts"
            />
            
            <ProfileMenuItem 
              icon={<Bell size={20} color="#FFAB4A" />}
              title="Notifications"
              subtitle="Customize your notifications"
            />
          </View>
        </View>
        
        {/* Security */}
        <View className="mb-6">
          <Text className="text-[#7B84A3] font-medium mb-3">Security</Text>
          
          <View className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#F0F0F5]">
            <ProfileMenuItem 
              icon={<Shield size={20} color="#36B37E" />}
              title="Security Settings"
              subtitle="Manage passwords and security"
            />
            
            <ProfileMenuItem 
              icon={<Smartphone size={20} color="#4A6FD4" />}
              title="Connected Devices"
              subtitle="Manage your connected devices"
            />
          </View>
        </View>
        
        {/* More Options */}
        <View className="mb-6">
          <Text className="text-[#7B84A3] font-medium mb-3">More</Text>
          
          <View className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#F0F0F5]">
            <ProfileMenuItem 
              icon={<MapPin size={20} color="#FF6B6B" />}
              title="Address Information"
              subtitle="Manage your addresses"
            />
            
            <ProfileMenuItem 
              icon={<HelpCircle size={20} color="#FFAB4A" />}
              title="Help & Support"
              subtitle="Get help with your account"
            />
          </View>
        </View>
        
        {/* Logout Button */}
        <TouchableOpacity className="flex-row items-center justify-center py-4 bg-white rounded-2xl border border-[#F0F0F5] mb-6">
          <LogOut size={20} color="#FF6B6B" />
          <Text className="text-[#FF6B6B] font-medium ml-2">Logout</Text>
        </TouchableOpacity>
        
        <Text className="text-center text-xs text-[#7B84A3] mb-6">
          App Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function ProfileMenuItem({ icon, title, subtitle }) {
  return (
    <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-[#F0F0F5]">
      <View className="flex-row items-center">
        <View className="w-10 h-10 rounded-full bg-[#F8F9FC] items-center justify-center mr-3">
          {icon}
        </View>
        <View>
          <Text className="font-medium text-[#1A1A2E]">{title}</Text>
          <Text className="text-xs text-[#7B84A3]">{subtitle}</Text>
        </View>
      </View>
      <ChevronRight size={20} color="#7B84A3" />
    </TouchableOpacity>
  );
} 