import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import NavBar from 'components/NavBar';
import { useNavigation } from '@react-navigation/native';


const StatusIndicator = ({ status, progress }) => {
  if (status === 'COMPLETED') {
    return (
      <View className="h-10 w-10 items-center justify-center rounded-full border-2 border-green-500">
        <Ionicons name="checkmark" size={20} color="#22c55e" />
      </View>
    );
  } else if (status === 'LOCKED') {
    return (
      <View className="h-10 w-10 items-center justify-center">
        <MaterialCommunityIcons name="lock" size={24} color="#bdc3c7" />
      </View>
    );
  } else if (status === 'IN_PROGRESS') {
    return (
      <View className="h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500">
        <Text className="text-[10px] font-bold text-blue-600">{progress}%</Text>
      </View>
    );
  } else {
    // READY
    return (
      <View className="h-10 w-10 items-center justify-center rounded-full border-2 border-slate-200">
        <Text className="text-[10px] font-bold text-slate-400">0%</Text>
      </View>
    );
  }
};

const SessionCard = ({ item, navigation, data }) => {
  const isLocked = item.status === 'LOCKED';

  return (
    <TouchableOpacity
      className={`mx-6 mb-4 flex-row items-center justify-between border-b border-gray-100 py-6 ${isLocked ? 'opacity-50' : ''}`}
      disabled={isLocked}
      onPress={() => navigation.navigate('Questions', { title: item.title, questions: item.question })}>
      <View className="flex-row items-center space-x-4">
        <View
          className={`h-3 w-3 rounded-full ${
            item.status === 'IN_PROGRESS'
              ? 'bg-blue-500'
              : item.status === 'READY'
                ? 'bg-blue-500'
                : item.status === 'COMPLETED'
                  ? 'bg-green-500'
                  : 'bg-blue-400'
          }`}
        />
        <View className="ml-4">
          <Text className={`text-xl font-bold ${isLocked ? 'text-gray-400' : 'text-gray-800'}`}>
            {item.title}
          </Text>
          {/* <Text className="mt-1 text-xs font-semibold tracking-wider text-blue-400">
            {item.status === 'IN_PROGRESS'
              ? 'IN PROGRESS'
              : item.status === 'READY'
                ? 'READY TO START'
                : item.status === 'COMPLETED'
                  ? 'COMPLETED'
                  : 'LOCKED'}
          </Text> */}
        </View>
      </View>

      {/* <StatusIndicator status={item.status} progress={item.progress} /> */}
    </TouchableOpacity>
  );
};

export default function Sections({ route }) {
  const { title, description, data } = route.params;
  
  const navigation = useNavigation();
  const renderHeader = () => (
    <View className="px-6 pb-4 pt-2">
      <NavBar />
      <View className="mt-4">
        <Text className="text-4xl font-extrabold text-slate-900">{title}</Text>
        <Text className="mt-2 text-base font-medium text-slate-500">
          Keep track of your learning progress
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SessionCard item={item} navigation={navigation} data={data} />}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
