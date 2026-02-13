import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import NavBar from 'components/NavBar';
import { easy, medium, hard } from 'Data/TestSeires';

export default function Level({ route }) {
  const navigation = useNavigation();
  const { title, description, data } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-6 pb-4 pt-2">
        <NavBar />
        {/* Header */}
        <View className="h-10"></View>
        <View className="mb-8 mt-4 flex-row items-center justify-between">
          <View>
            <Text className="text-4xl font-bold text-slate-900">{title}</Text>
            <Text className="mt-1 text-base text-slate-500">{description}</Text>
          </View>
        </View>

        <View className="h-5" />
        {/* Difficulty Cards */}
        <View className="mb-10 space-y-6 ">
          {/* Easy Card */}
          <TouchableOpacity
            className="relative mb-4 overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ elevation: 2 }}
            onPress={() => navigation.navigate('Sections',{title: 'Easy', description: 'Easy Level', data: easy})}>
            <View className="absolute bottom-0 left-0 top-0 w-2 rounded-l-3xl bg-emerald-400" />

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center space-x-6">
                <View className="mr-2 h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
                  <MaterialCommunityIcons name="face-man-profile" size={32} color="#34d399" />
                </View>
                <View>
                  <Text className="text-xl font-bold text-slate-900">Easy</Text>
                  <View className="mt-2 h-1.5 w-32 rounded-full bg-slate-100">
                    <View className="h-full w-4/5 rounded-full bg-emerald-400" />
                  </View>
                </View>
              </View>

              <View className="items-end">
                <View className="rounded-full bg-emerald-50 px-3 py-1">
                  <Text className="text-xs font-bold text-emerald-500">INTRODUCTORY</Text>
                </View>
                <Text className="mt-2 text-sm font-medium text-slate-500">17 / 20 levels</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Medium Card */}
          <TouchableOpacity
            className="relative mb-4 overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
            style={{ elevation: 2 }}
            onPress={() => navigation.navigate('Sections',{title: 'Medium', description: 'Medium Level', data: medium})}>
            <View className="absolute bottom-0 left-0 top-0 w-2 rounded-l-3xl bg-amber-400" />

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center space-x-6">
                <View className="mr-2 h-16 w-16 items-center justify-center rounded-2xl bg-amber-50">
                  <MaterialCommunityIcons name="chart-timeline-variant" size={32} color="#fbbf24" />
                </View>
                <View>
                  <Text className="text-xl font-bold text-slate-900">Medium</Text>
                  <View className="mt-2 h-1.5 w-32 rounded-full bg-slate-100">
                    <View className="h-full w-2/5 rounded-full bg-amber-400" />
                  </View>
                </View>
              </View>

              <View className="items-end">
                <View className="rounded-full bg-amber-50 px-3 py-1">
                  <Text className="text-xs font-bold text-amber-500">INTERMEDIATE</Text>
                </View>
                <Text className="mt-2 text-sm font-medium text-slate-500">8 / 20 levels</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Hard Card */}
          <TouchableOpacity
            className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm "
            style={{ elevation: 2 }}
            onPress={() => navigation.navigate('Sections',{title: 'Hard', description: 'Hard Level', data: hard})}>
            <View className="absolute bottom-0 left-0 top-0 w-2 rounded-l-3xl bg-rose-400" />

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center space-x-6">
                <View className="mr-2 h-16 w-16 items-center justify-center rounded-2xl bg-rose-50">
                  <MaterialCommunityIcons name="dumbbell" size={32} color="#fb7185" />
                </View>
                <View>
                  <Text className="text-xl font-bold text-slate-900">Hard</Text>
                  <View className="mt-2 h-1.5 w-32 rounded-full bg-slate-100">
                    <View className="h-full w-1/12 rounded-full bg-rose-400" />
                  </View>
                </View>
              </View>

              <View className="items-end">
                <View className="rounded-full bg-rose-50 px-3 py-1">
                  <Text className="text-xs font-bold text-rose-500">EXPERT</Text>
                </View>
                <Text className="mt-2 text-sm font-medium text-slate-500">2 / 20 levels</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Pro Tip Section */}
        <View className="mt-8 rounded-3xl bg-indigo-50 p-6">
          <View className="flex-row items-start space-x-4">
            <MaterialCommunityIcons name="lightbulb-on" size={28} color="#6366f1" />
            <View className="flex-1">
              <Text className="text-lg font-bold text-indigo-600">Pro Tip</Text>
              <Text className="mt-2 text-base leading-6 text-slate-600">
                Complete all <Text className="font-bold text-slate-800">Medium</Text> levels to
                unlock the <Text className="font-bold text-rose-500">Legendary</Text> mode.
              </Text>
            </View>
          </View>
        </View>

        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
}
