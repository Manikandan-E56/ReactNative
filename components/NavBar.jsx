import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../Context/Context';

export default function NavBar() {
  const navigation = useNavigation();

  const { image } = useContext(AppContext);

  const points = 100;

  return (
    <View className="mb-4 flex flex-row items-center justify-between">
      <TouchableOpacity activeOpacity={0.8}>
        <View className="flex-row items-center justify-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 shadow-sm">
          <MaterialCommunityIcons name="fire-circle" size={22} color="orange" />

          <Text className="ml-2 text-lg font-bold text-gray-700">{points}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          source={{ uri: image || 'https://i.pravatar.cc/150?img=12' }}
          className="h-12 w-12 rounded-full border-2 border-indigo-100"
        />
        <View className="absolute right-0 top-0 h-3 w-3 items-center justify-center rounded-full bg-white">
          <View className="h-2 w-2 rounded-full bg-indigo-500" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

{
  /* <View className="mb-8 flex flex-row items-center justify-between">
          <TouchableOpacity activeOpacity={0.8}>
            <View className="flex-row items-center justify-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 shadow-sm">
              <MaterialCommunityIcons name="fire-circle" size={22} color="orange" />

              <Text className="ml-2 text-lg font-bold text-gray-700">{points}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Tabs', { screen: 'Profile' })}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
              className="h-12 w-12 rounded-full border-2 border-indigo-100"
            />
            <View className="absolute right-0 top-0 h-3 w-3 items-center justify-center rounded-full bg-white">
              <View className="h-2 w-2 rounded-full bg-indigo-500" />
            </View>
          </TouchableOpacity>
        </View> */
}
