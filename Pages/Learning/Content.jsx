import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import BackButton from '../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import Aptitude from '../../Data/Aptitude';
import Reasoning from '../../Data/Reasoning';
import Grammar from '../../Data/Verbal';
import NavBar from 'components/NavBar';
import {ReasoningStudyMaterial,AptitudeStudyMaterial} from '../../Data/AptitudeStudy';

const subjects = [
  {
    id: 1,
    title: 'Quantitative Aptitude',
    subtitle: 'Math & problem solving',
    icon: 'calculator-variant-outline',
    IconComponent: MaterialCommunityIcons,
    color: '#3B82F6', // Blue
    bg: 'bg-blue-100',
    iconColor: '#2563EB',
    progress: 0.2,
    progressColor: 'bg-blue-500',
    data: Aptitude,
    Material:AptitudeStudyMaterial,
    screen:"QuantsLearning",
  },
  {
    id: 2,
    title: 'Reasoning',
    subtitle: 'Logical patterns & analysis',
    icon: 'extension-puzzle',
    IconComponent: Ionicons,
    color: '#F97316', // Orange
    bg: 'bg-orange-100',
    iconColor: '#EA580C',
    progress: 0.4,
    progressColor: 'bg-orange-500',
    data: Reasoning,
    Material:ReasoningStudyMaterial,
    screen:"Reasoning",
  },
  {
    id: 3,
    title: 'Grammar',
    subtitle: 'Rules & verbal ability',
    icon: 'text-outline',
    IconComponent: Ionicons,
    color: '#10B981', // Green
    bg: 'bg-green-100',
    iconColor: '#059669',
    progress: 0.6,
    progressColor: 'bg-emerald-500',
    data: Grammar,
  },
];

export default function Content() {
  const navigation = useNavigation();
  const points = 100;
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <BackButton />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="flex-1 px-6 pt-2">
        {/* Header */}
        
        <NavBar/>

        {/* Hero Section */}
        <View className="mb-20 items-center justify-center">
          {/* Illustration Placeholder */}
          <View className="mb-6 h-36 w-36 items-center justify-center ">
            <View className="relative h-24 w-24 items-center justify-center rounded-full bg-indigo-50">
              <MaterialCommunityIcons name="head-cog" size={60} color="#6366F1" />
              <View className="absolute -right-2 -top-2 rounded-full bg-yellow-400 p-1">
                <Ionicons name="bulb" size={16} color="white" />
              </View>
              <View className="absolute -bottom-2 -left-2 rounded-full bg-blue-500 p-1">
                <Ionicons name="settings-outline" size={16} color="white" />
              </View>
            </View>
          </View>

          <Text className="mb-2 text-center text-3xl font-bold text-slate-900">
            Ready to Learn?
          </Text>
          <Text className="text-center text-lg text-gray-500">
            Choose your subject and start practicing
          </Text>
        </View>

        {/* Subject Cards */}
        <View className="gap-8">
          {subjects.map((card) => (
            <TouchableOpacity
              key={card.id}
              className="flex-row items-center rounded-3xl border border-gray-50 bg-white p-4 shadow-sm"
              style={{
                elevation: 2, // Android shadow
                shadowColor: '#000', // iOS shadow
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
              }}
              onPress={() =>
                navigation.navigate('Discover', {
                  title: card.title,
                  description: card.subtitle,
                  data: card.data,
                  Material:card.Material,
                  screen:card.screen,
                })
              }>
              {/* Icon */}
              <View className={`h-14 w-14 items-center justify-center rounded-full ${card.bg}`}>
                <card.IconComponent name={card.icon} size={24} color={card.iconColor} />
              </View>

              {/* Content */}
              <View className="ml-4 flex-1">
                <Text className="text-lg font-bold text-slate-900">{card.title}</Text>
                <Text className="mb-2 text-xs text-gray-400">{card.subtitle}</Text>

                {/* Progress Bar */}
                <View className="h-1.5 w-24 rounded-full bg-gray-100">
                  <View
                    className={`h-full rounded-full ${card.progressColor}`}
                    style={{ width: `${card.progress * 100}%` }}
                  />
                </View>
              </View>

              {/* Arrow */}
              <Ionicons name="chevron-forward" size={20} color="#E5E7EB" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
