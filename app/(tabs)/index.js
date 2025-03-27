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
          colors={['#3674B5', '#578FCA', '#D1F8EF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View className="px-6 pt-16 pb-2">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="relative mr-4">
                  <TouchableOpacity
                    onPress={() => router.push('/profile')}
                    className="w-14 h-14 rounded-full overflow-hidden shadow-sm border border-white"
                  >
                    <View className="w-full h-full bg-primary items-center justify-center">
                      <Text className="text-white font-semibold text-lg">AJ</Text>
                    </View>
                  </TouchableOpacity>
                  <View className="absolute -bottom-3 right-1 bg-[#FBD288] px-2 py-0.5 rounded-full border border-white">
                    <Text className="text-xs font-bold text-primary">Gold</Text>
                  </View>
                </View>
                <View>
                  <View className="flex-row items-center">
                    <Text className="text-2xl font-bold text-white">{greeting}</Text>
                    <Text className="ml-1 text-xl">{emoji}</Text>
                  </View>
                  <Text className="text-white/80 text-base font-medium">Alex Johnson</Text>
                </View>
              </View>
              <View>
                <LottieView
                  source={require('../../assets/animations/dashboard-animation.json')}
                  style={{ width: 150, height: 100 }}
                  autoPlay
                  loop
                />
              </View>
            </View>
          </View>
          
          <View className="items-center justify-center w-full -mt-6">
            <LottieView
              source={require('../../assets/animations/payment-animation.json')}
              style={{ width: '100%', height: 270 }}
              autoPlay
              loop
              speed={0.8}
            />
          </View>
        </LinearGradient>

        <View className="px-4 -mt-12">
          <View className="mb-6">
            <View className="bg-primary rounded-3xl p-5">
              <View className="flex-row justify-between items-center mb-1">
                <Text className="text-white/80 text-sm font-medium">Current Balance</Text>
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

              <Text className="text-2xl font-bold text-white mb-3">
                {showBalance ? "Rp.689.000" : "••••••"}
              </Text>
              <Text className="text-white text-sm font-bold pb-3">Quick Access</Text>
              <View className="flex-row justify-between gap-2 mb-2">
                <TouchableOpacity
                  onPress={() => router.push('/send')}
                  className="flex-1 bg-[#578FCA] rounded-xl items-center p-2.5"
                >
                  <Send size={18} color="#ffffff" />
                  <Text className="text-white text-xs font-medium mt-1">Send</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => router.push('/withdraw')}
                  className="flex-1 bg-[#FF6B6B] rounded-xl items-center p-2.5"
                >
                  <TrendingDown size={18} color="#ffffff" />
                  <Text className="text-white text-xs font-medium mt-1">Withdraw</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => router.push('/top-up')}
                  className="flex-1 bg-[#36B37E] rounded-xl items-center p-2.5"
                >
                  <Plus size={18} color="#ffffff" />
                  <Text className="text-white text-xs font-medium mt-1">Top Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => router.push('/split-bill')}
                  className="flex-1 bg-[#FFAB4A] rounded-xl items-center p-2.5"
                >
                  <Users size={18} color="#ffffff" />
                  <Text className="text-white text-xs font-medium mt-1">Split Bill</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="mb-6 bg-[#fcfcfc] mx-[-16px] px-4 pt-3 pb-6 rounded-t-[30px] shadow-sm">
            <View className="flex items-center justify-center mb-4">
              <View className="w-10 h-1.5 bg-gray-300 rounded-full" />
            </View>

            <View className="flex-row flex-wrap justify-between">
              {/* Electricity */}
              <TouchableOpacity 
                className="w-[24%] items-center mb-6"
                onPress={() => router.push('/payments/electricity')}
              >
                <View className="w-16 h-16 bg-[#FFE0B2] rounded-full items-center justify-center mb-2">
                  <BarChart2 size={24} color="#FF9800" />
                </View>
                <Text className="text-xs font-semibold text-primary text-center">Electricity</Text>
              </TouchableOpacity>

              {/* Investment */}
              <TouchableOpacity 
                className="w-[24%] items-center mb-6"
                onPress={() => router.push('/payments/investment')}
              >
                <View className="w-16 h-16 bg-[#BBDEFB] rounded-full items-center justify-center mb-2">
                  <TrendingUp size={24} color="#2196F3" />
                </View>
                <Text className="text-xs font-semibold text-primary text-center">Investment</Text>
              </TouchableOpacity>

              {/* Internet */}
              <TouchableOpacity 
                className="w-[24%] items-center mb-6"
                onPress={() => router.push('/payments/internet')}
              >
                <View className="w-16 h-16 bg-[#C8E6C9] rounded-full items-center justify-center mb-2">
                  <Wallet size={24} color="#4CAF50" />
                </View>
                <Text className="text-xs font-semibold text-primary text-center">Internet</Text>
              </TouchableOpacity>

              {/* Education */}
              <TouchableOpacity 
                className="w-[24%] items-center mb-6"
                onPress={() => router.push('/payments/education')}
              >
                <View className="w-16 h-16 bg-[#D1C4E9] rounded-full items-center justify-center mb-2">
                  <Play size={24} color="#673AB7" />
                </View>
                <Text className="text-xs font-semibold text-primary text-center">Education</Text>
              </TouchableOpacity>

              {/* Donations */}
              <TouchableOpacity 
                className="w-[24%] items-center mb-6"
                onPress={() => router.push('/payments/donations')}
              >
                <View className="w-16 h-16 bg-[#FFCDD2] rounded-full items-center justify-center mb-2">
                  <Users size={24} color="#F44336" />
                </View>
                <Text className="text-xs font-semibold text-primary text-center">Donations</Text>
              </TouchableOpacity>

              {/* Games */}
              <TouchableOpacity 
                className="w-[24%] items-center mb-6"
                onPress={() => router.push('/payments/games')}
              >
                <View className="w-16 h-16 bg-[#E1BEE7] rounded-full items-center justify-center mb-2">
                  <Sparkles size={24} color="#9C27B0" />
                </View>
                <Text className="text-xs font-semibold text-primary text-center">Games</Text>
              </TouchableOpacity>

              {/* EMoney */}
              <TouchableOpacity 
                className="w-[24%] items-center mb-6"
                onPress={() => router.push('/payments/emoney')}
              >
                <View className="w-16 h-16 bg-[#B3E5FC] rounded-full items-center justify-center mb-2">
                  <CreditCard size={24} color="#03A9F4" />
                </View>
                <Text className="text-xs font-semibold text-primary text-center">EMoney</Text>
              </TouchableOpacity>

              {/* More */}
              <TouchableOpacity 
                className="w-[24%] items-center mb-6"
                onPress={() => router.push('/payments/more')}
              >
                <View className="w-16 h-16 bg-[#DCEDC8] rounded-full items-center justify-center mb-2">
                  <Plus size={24} color="#8BC34A" />
                </View>
                <Text className="text-xs font-semibold text-primary text-center">More</Text>
              </TouchableOpacity>
            </View>


            <TouchableOpacity 
              className="bg-gradient-to-r from-[#3674B5] to-[#5790CB] mt-2 p-4 rounded-2xl"
              onPress={() => router.push('/payments')}
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <View className="w-12 h-12 bg-white/20 rounded-full items-center justify-center mr-3">
                    <Sparkles size={22} color="#ffffff" />
                  </View>
                  <View>
                    <Text className="font-bold text-white text-base">Explore All Payments</Text>
                    <Text className="text-xs text-white/80">Quick and secure payment options</Text>
                  </View>
                </View>
                <ArrowUpRight size={22} color="#ffffff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
} 