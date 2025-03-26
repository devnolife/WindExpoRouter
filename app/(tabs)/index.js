import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import {
  CreditCard,
  Eye,
  EyeOff,
  TrendingDown,
  TrendingUp,
  Send,
  Plus,
  Sparkles,
  ArrowUpRight,
  Wallet,
  Users,
  BarChart2,
  Play
} from 'lucide-react-native';

// Internal component instead of importing from components folder
const QuickActionButton = ({ icon, label, color, iconColor, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className={`items-center ${color} p-3 rounded-xl w-[80px]`}
  >
    <View className="mb-1">{icon}</View>
    <Text className={`text-xs font-medium ${iconColor}`}>{label}</Text>
  </TouchableOpacity>
);

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
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <LinearGradient
          colors={['#4A6FD4', '#7BA3FF', '#F8F9FC']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View className="px-6 pt-20 pb-2">
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
                  <Text className="text-lg font-semibold text-white">{greeting}</Text>
                  <Text className="ml-1">{emoji}</Text>
                </View>
                <Text className="text-white/80 text-xs font-medium">Alex Johnson</Text>
              </View>
              
            </View>
          </View>
          
          {/* Payment Animation */}
          <View className="items-center justify-center w-full">
            <LottieView
              source={require('../../assets/animations/payment-animation.json')}
              style={{ width: '100%', height: 280 }}
              autoPlay
              loop
              speed={0.8}
            />
          </View>
        </LinearGradient>

        <View className="px-4 -mt-12">
          <View className="mb-6">
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

            <View className="space-y-3">
              <View className="bg-white p-4 rounded-xl border border-[#F0F0F5]">
                <View className="flex-row">
                  <View className="w-10 h-10 bg-[#E8F0FB] rounded-full items-center justify-center mr-4">
                    <CreditCard size={18} color="#4A6FD4" />
                  </View>
                  <View className="flex-1">
                    <View className="flex-row justify-between">
                      <Text className="font-semibold text-[#1A1A2E]">Coffee Shop</Text>
                      <Text className="font-semibold text-[#FF6B6B]">-$4.50</Text>
                    </View>
                    <View className="flex-row justify-between mt-1">
                      <Text className="text-xs text-[#7B84A3]">Today, 09:15 AM</Text>
                      <Text className="text-xs text-[#7B84A3]">Coffee</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View className="bg-white p-4 rounded-xl border border-[#F0F0F5]">
                <View className="flex-row">
                  <View className="w-10 h-10 bg-[#FFF4E3] rounded-full items-center justify-center mr-4">
                    <CreditCard size={18} color="#FFAB4A" />
                  </View>
                  <View className="flex-1">
                    <View className="flex-row justify-between">
                      <Text className="font-semibold text-[#1A1A2E]">Grocery Store</Text>
                      <Text className="font-semibold text-[#FF6B6B]">-$32.75</Text>
                    </View>
                    <View className="flex-row justify-between mt-1">
                      <Text className="text-xs text-[#7B84A3]">Yesterday, 18:20 PM</Text>
                      <Text className="text-xs text-[#7B84A3]">Food</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
} 