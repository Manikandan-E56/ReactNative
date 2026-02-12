import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const points = 100;

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="flex-1 px-6 pt-14">
        {/* Top Header: Search & Profile */}
        <View className="mb-8 flex flex-row items-center justify-between">
          {/* <View className="mr-4 flex-1 flex-row items-center rounded-2xl bg-white px-4 py-3 shadow-sm">
            <Ionicons name="search-outline" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search courses, tests..."
              className="ml-2 flex-1 text-base text-gray-700"
              placeholderTextColor="#9CA3AF"
            />
          </View> */}
          <TouchableOpacity activeOpacity={0.8}>
            <View className="flex-row items-center justify-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 shadow-sm">
              <MaterialCommunityIcons name="fire-circle" size={22} color="orange" />

              <Text className="ml-2 text-lg font-bold text-gray-700">{points}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
              className="h-12 w-12 rounded-full border-2 border-indigo-100"
            />
            <View className="absolute right-0 top-0 h-3 w-3 items-center justify-center rounded-full bg-white">
              <View className="h-2 w-2 rounded-full bg-indigo-500" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View className="mb-10 items-center justify-center">
          <View className="mb-6 h-32 w-32 items-center justify-center rounded-full border-4 border-indigo-100 bg-indigo-50 shadow-sm">
            <View className="h-24 w-24 items-center justify-center rounded-full bg-indigo-100">
              <Ionicons name="bulb" size={50} color="#F59E0B" />
            </View>
          </View>
          <Text className="mb-2 text-center text-3xl font-bold text-gray-900">
            Expand Your Mind
          </Text>
          <Text className="text-center text-gray-500">Ready to continue your journey?</Text>
        </View>

        {/* Action Cards */}
        <View className="mb-8 gap-4">
          {/* Learning Card */}
          <TouchableOpacity
            className="flex-row items-center rounded-3xl bg-white p-5 shadow-sm"
            onPress={() => navigation.navigate('Content')}>
            <View className="h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50">
              <Ionicons name="book" size={28} color="#6366F1" />
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold text-gray-900">Learning</Text>
              <Text className="text-sm text-gray-500">
                Master new concepts with curated modules.
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#D1D5DB" />
          </TouchableOpacity>

          {/* Test Card */}
          <TouchableOpacity className="flex-row items-center rounded-3xl bg-white p-5 shadow-sm">
            <View className="h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
              <MaterialCommunityIcons name="clipboard-check" size={28} color="#10B981" />
            </View>
            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold text-gray-900">Test</Text>
              <Text className="text-sm text-gray-500">
                Challenge yourself and track your progress.
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#D1D5DB" />
          </TouchableOpacity>
        </View>

        {/* Daily Progress */}
        <View className="mb-4">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-800">Daily Progress</Text>
            <TouchableOpacity>
              <Text className="text-xs font-bold text-indigo-500">VIEW ALL</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row gap-4">
            <View className="flex-1 rounded-3xl bg-white p-5 shadow-sm">
              <Text className="mb-1 text-xs font-medium text-gray-400">Time Spent</Text>
              <Text className="text-2xl font-bold text-gray-900">2.4h</Text>
            </View>
            <View className="flex-1 rounded-3xl bg-white p-5 shadow-sm">
              <Text className="mb-1 text-xs font-medium text-gray-400">Completed</Text>
              <Text className="text-2xl font-bold text-emerald-500">12</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
