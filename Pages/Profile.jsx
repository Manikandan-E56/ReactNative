import React,{useContext} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../Context/Context';

export default function Profile() {
  const navigation = useNavigation();
  const { User, logout } = useContext(AppContext);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }} className="flex-1">
        {/* Header Section - Enters from Top */}
        <Animated.View
          entering={FadeInUp.delay(100).duration(600).springify()}
          className="items-center justify-center pb-6 pt-8">
          <View className="relative">
            <View className="h-28 w-28 rounded-full border-4 border-indigo-50 p-1">
              <Image
                source={{ uri: 'https://i.pravatar.cc/300?img=11' }}
                className="h-full w-full rounded-full"
              />
            </View>
            <View className="absolute bottom-2 right-1 h-5 w-5 rounded-full border-2 border-white bg-emerald-500" />
          </View>

          <Text className="mt-4 text-2xl font-bold text-slate-900">{User?.name || 'Guest'}</Text>
          <Text className="mt-1 text-base font-medium text-slate-500">{User?.phone || ''}</Text>
        </Animated.View>

        {/* Score Card - Fades in Down with delay */}
        <Animated.View
          entering={FadeInDown.delay(200).duration(600).springify()}
          className="mx-auto mb-10 w-1/2 items-center rounded-3xl border border-orange-100/50 bg-orange-50 py-2">
          <View className="flex-row items-center gap-2">
            <MaterialCommunityIcons name="fire" size={24} color="#F97316" />
            <Text className="text-xl font-bold text-orange-900/80">Score: 966</Text>
          </View>
        </Animated.View>

        {/* Menu Section - Staggered List */}
        <View className="mx-6 gap-4">
          <MenuOption
            delay={300}
            icon={<Ionicons name="information-circle" size={24} color="#A855F7" />}
            bg="bg-purple-50"
            label="About"
          />
          <MenuOption
            delay={400}
            icon={<MaterialCommunityIcons name="shield-check" size={22} color="#10B981" />}
            bg="bg-emerald-50"
            label="Privacy & Policy"
          />
          <MenuOption
            delay={500}
            icon={<MaterialCommunityIcons name="phone" size={22} color="#4F46E5" />}
            bg="bg-indigo-50"
            label="Support"
          />
        </View>

        {/* Logout Button */}
        <Animated.View
          entering={FadeInDown.delay(600).duration(600).springify()}
          className="mx-6 mt-12">
          <TouchableOpacity
            className="flex-row items-center justify-center rounded-2xl border border-red-400 py-4 active:bg-red-100"
            onPress={() => {
              logout();
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            }}>
            <Ionicons name="log-out-outline" size={20} color="#EF4444" />
            <Text className="ml-2 font-bold text-red-500">Log Out</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Updated MenuOption to accept a 'delay' prop
function MenuOption({ icon, label, bg, delay }) {
  return (
    <Animated.View entering={FadeInDown.delay(delay).duration(600).springify()}>
      <TouchableOpacity className="flex-row items-center justify-between rounded-2xl border border-slate-50 bg-white p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.5)]">
        <View className="flex-row items-center gap-4">
          <View className={`h-10 w-10 items-center justify-center rounded-xl ${bg}`}>{icon}</View>
          <Text className="text-lg font-semibold text-slate-700">{label}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
      </TouchableOpacity>
    </Animated.View>
  );
}
