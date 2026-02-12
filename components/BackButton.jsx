import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-gesture-handler';

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="absolute left-10 top-28 z-50 h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm"
      style={{
        elevation: 4, // Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      }}
      onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={20} color="#4542e6ff" />
      
    </TouchableOpacity>
  );
}
