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
            <View className="flex-row flex-wrap">
              {[
                { 
                  name: 'Electricity', 
                  icon: <BarChart2 size={24} color="#FF9800" />, 
                  bgColor: 'bg-[#FFE0B2]', 
                  borderColor: 'border-[#FFCC80]',
                  route: '/payments/electricity' 
                },
                { 
                  name: 'Investment', 
                  icon: <TrendingUp size={24} color="#2196F3" />, 
                  bgColor: 'bg-[#BBDEFB]', 
                  borderColor: 'border-[#90CAF9]',
                  route: '/payments/investment' 
                },
                { 
                  name: 'Internet', 
                  icon: <Wallet size={24} color="#4CAF50" />, 
                  bgColor: 'bg-[#C8E6C9]', 
                  borderColor: 'border-[#A5D6A7]',
                  route: '/payments/internet' 
                },
                { 
                  name: 'Education', 
                  icon: <Play size={24} color="#673AB7" />, 
                  bgColor: 'bg-[#D1C4E9]', 
                  borderColor: 'border-[#B39DDB]',
                  route: '/payments/education' 
                },
                { 
                  name: 'Donations', 
                  icon: <Users size={24} color="#F44336" />, 
                  bgColor: 'bg-[#FFCDD2]', 
                  borderColor: 'border-[#EF9A9A]',
                  route: '/payments/donations' 
                },
                { 
                  name: 'Games', 
                  icon: <Sparkles size={24} color="#9C27B0" />, 
                  bgColor: 'bg-[#E1BEE7]', 
                  borderColor: 'border-[#CE93D8]',
                  route: '/payments/games' 
                },
                { 
                  name: 'EMoney', 
                  icon: <CreditCard size={24} color="#03A9F4" />, 
                  bgColor: 'bg-[#B3E5FC]', 
                  borderColor: 'border-[#81D4FA]',
                  route: '/payments/emoney' 
                },
                { 
                  name: 'More', 
                  icon: <Plus size={24} color="#8BC34A" />, 
                  bgColor: 'bg-[#DCEDC8]', 
                  borderColor: 'border-[#C5E1A5]',
                  route: '/payments/more' 
                },
              ].map((item, index) => (
                <TouchableOpacity
                  key={item.name}
                  className="w-1/4 px-2 mb-6"
                  onPress={() => router.push(item.route)}
                >
                  <View className="items-center">
                    <View 
                      className={`w-16 h-16 ${item.bgColor} rounded-2xl items-center justify-center 
                      border-2 ${item.borderColor} shadow-md mb-2 overflow-hidden`}
                    >
                      <LinearGradient
                        colors={['rgba(255,255,255,0.8)', 'rgba(255,255,255,0)']}
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 20 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                      />
                      {item.icon}
                    </View>
                    <Text className="text-xs font-semibold text-primary text-center">{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>                                                  
      </ScrollView>
    </View>
  );
} 