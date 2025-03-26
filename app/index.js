import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import {
  CreditCard,
  Eye,
  EyeOff,
  BarChart2,
  Wallet,
  Users,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Coffee,
  ShoppingBag,
  Banknote,
  Receipt,
  ArrowUpRight,
  Zap,
  Plus,
  Send
} from 'lucide-react-native';

import { TransactionItem } from './components/TransactionItem';
import { QuickActionButton } from './components/QuickActionButton';
import { BillItem } from './components/BillItem';

export default function HomePage() {
  const router = useRouter();
  const [showBalance, setShowBalance] = useState(true);
  const [greeting, setGreeting] = useState('Hey');
  const [emoji, setEmoji] = useState('👋');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good morning');
      setEmoji('☀️');
    } else if (hour < 18) {
      setGreeting('Good afternoon');
      setEmoji('🌤️');
    } else {
      setGreeting('Good evening');
      setEmoji('🌙');
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#F8F9FC]">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="bg-white px-6 pt-6 pb-6">
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => router.push('/profile')}
              className="w-10 h-10 rounded-full overflow-hidden shadow-sm mr-3 border border-[#F0F0F5]"
            >
              <View className="w-full h-full bg-[#4A6FD4] items-center justify-center">
                <Text className="text-white font-medium text-sm">AJ</Text>
              </View>
            </TouchableOpacity>
            <View className="flex-1">
              <View className="flex-row items-center">
                <Text className="text-lg font-semibold text-[#1A1A2E]">{greeting}</Text>
                <Text className="ml-1">{emoji}</Text>
              </View>
              <Text className="text-[#7B84A3] text-xs font-medium">Alex Johnson</Text>
            </View>
          </View>
        </View>

        <View className="px-4">
          {/* Balance Card */}
          <View className="mt-6 mb-6">
            <View className="bg-[#4A6FD4] rounded-3xl p-6">
              <View className="flex-row justify-between items-center mb-2">
                <Text className="text-white/80 text-sm font-medium">Total Balance</Text>
                <TouchableOpacity
                  onPress={() => setShowBalance(!showBalance)}
                  className="bg-white/20 p-1.5 rounded-full"
                >
                  {showBalance ? 
                    <Eye size={16} color="white" /> : 
                    <EyeOff size={16} color="white" />
                  }
                </TouchableOpacity>
              </View>

              <Text className="text-3xl font-bold text-white mb-4">
                {showBalance ? "$689.00" : "••••••"}
              </Text>

              <View className="flex-row gap-4 mb-4">
                <View className="flex-1 bg-white/15 rounded-xl p-3">
                  <View className="flex-row items-center gap-2 mb-1">
                    <TrendingUp size={16} color="white" />
                    <Text className="text-xs font-medium text-white">Income</Text>
                  </View>
                  <Text className="text-lg font-bold text-white">$1,240.00</Text>
                </View>

                <View className="flex-1 bg-white/15 rounded-xl p-3">
                  <View className="flex-row items-center gap-2 mb-1">
                    <TrendingDown size={16} color="white" />
                    <Text className="text-xs font-medium text-white">Expenses</Text>
                  </View>
                  <Text className="text-lg font-bold text-white">$551.00</Text>
                </View>
              </View>

              <View className="flex-row justify-between gap-3">
                <TouchableOpacity
                  onPress={() => router.push('/send')}
                  className="flex-1 py-3 bg-white rounded-xl flex-row items-center justify-center gap-2"
                >
                  <Send size={16} color="#133E87" />
                  <Text className="text-[#133E87] font-medium">Send</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => router.push('/top-up')}
                  className="flex-1 py-3 bg-white/20 rounded-xl flex-row items-center justify-center gap-2"
                >
                  <Plus size={16} color="white" />
                  <Text className="text-white font-medium">Top Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-base font-bold text-[#1A1A2E]">Quick Actions</Text>
            </View>

            <View className="flex-row justify-between">
              <QuickActionButton
                icon={<CreditCard size={20} color="#4A6FD4" />}
                label="Pay"
                color="bg-[#E8F0FB]"
                iconColor="text-[#4A6FD4]"
                onPress={() => router.push('/pay')}
              />
              <QuickActionButton
                icon={<Users size={20} color="#FFAB4A" />}
                label="Split"
                color="bg-[#FFF4E3]"
                iconColor="text-[#FFAB4A]"
                onPress={() => router.push('/split-bill')}
              />
              <QuickActionButton
                icon={<BarChart2 size={20} color="#36B37E" />}
                label="Budget"
                color="bg-[#E5F8ED]"
                iconColor="text-[#36B37E]"
                onPress={() => router.push('/budget')}
              />
              <QuickActionButton
                icon={<Wallet size={20} color="#FF6B6B" />}
                label="Goals"
                color="bg-[#FFEBEE]"
                iconColor="text-[#FF6B6B]"
                onPress={() => router.push('/goals')}
              />
            </View>
          </View>

          {/* Financial Insights */}
          <View className="mb-6">
            <View className="bg-white rounded-3xl p-5 shadow-sm border border-[#F0F0F5]">
              <View className="flex-row gap-4">
                <View className="w-12 h-12 rounded-full bg-[#E8F0FB] items-center justify-center">
                  <Sparkles size={24} color="#4A6FD4" />
                </View>

                <View className="flex-1">
                  <Text className="font-bold text-base text-[#1A1A2E] mb-1">Financial Tip</Text>
                  <Text className="text-sm text-[#7B84A3] mb-3">
                    Try the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings.
                  </Text>
                  <TouchableOpacity className="bg-[#E8F0FB] px-3 py-1.5 rounded-lg self-start">
                    <Text className="text-xs font-medium text-[#4A6FD4]">Learn More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* Recent Transactions */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-base font-bold text-[#1A1A2E]">Recent Transactions</Text>
              <TouchableOpacity
                onPress={() => router.push('/expenses')}
                className="flex-row items-center"
              >
                <Text className="text-sm font-medium text-[#4A6FD4] mr-1">See All</Text>
                <ArrowUpRight size={16} color="#4A6FD4" />
              </TouchableOpacity>
            </View>

            <View>
              <TransactionItem
                icon={<Coffee size={20} color="white" />}
                bgColor="bg-[#4A6FD4]"
                name="Starbucks"
                date="Today, 10:30 AM"
                amount="-$4.50"
                isExpense={true}
                onPress={() => router.push('/expenses/details')}
              />

              <TransactionItem
                icon={<ShoppingBag size={20} color="white" />}
                bgColor="bg-[#FF6B6B]"
                name="Zara"
                date="Yesterday"
                amount="-$79.99"
                isExpense={true}
                onPress={() => router.push('/expenses/details')}
              />

              <TransactionItem
                icon={<Banknote size={20} color="white" />}
                bgColor="bg-[#36B37E]"
                name="Freelance Work"
                date="Mar 24"
                amount="+$250.00"
                isExpense={false}
                onPress={() => router.push('/expenses/details')}
              />
            </View>
          </View>

          {/* Upcoming Bills */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-base font-bold text-[#1A1A2E]">Upcoming Bills</Text>
              <TouchableOpacity className="flex-row items-center">
                <Text className="text-sm font-medium text-[#4A6FD4] mr-1">View All</Text>
                <ArrowUpRight size={16} color="#4A6FD4" />
              </TouchableOpacity>
            </View>

            <View>
              <BillItem
                icon={<Zap size={20} color="#FFAB4A" />}
                name="Electricity Bill"
                dueDate="Apr 15"
                amount="$45.00"
                bgColor="bg-[#FFF4E3]"
                iconColor="text-[#FFAB4A]"
              />

              <BillItem
                icon={<Receipt size={20} color="#FF6B6B" />}
                name="Rent Payment"
                dueDate="Apr 01"
                amount="$750.00"
                bgColor="bg-[#FFEBEE]"
                iconColor="text-[#FF6B6B]"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 