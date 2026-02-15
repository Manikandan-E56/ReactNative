import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
  AntDesign,
  FontAwesome,
  Octicons,
} from '@expo/vector-icons';
import NavBar from '../../components/NavBar';




const getIcon = (lib, icon, color, size = 24) => {
  switch (lib) {
    case 'Ionicons':
      return <Ionicons name={icon} size={size} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons name={icon} size={size} color={color} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={icon} size={size} color={color} />;
    case 'Foundation':
      return <Foundation name={icon} size={size} color={color} />;
    case 'AntDesign':
      return <AntDesign name={icon} size={size} color={color} />;
    case 'FontAwesome':
      return <FontAwesome name={icon} size={size} color={color} />;
    case 'Octicons':
      return <Octicons name={icon} size={size} color={color} />;
    default:
      return <MaterialIcons name="error" size={size} color={color} />;
  }
};

export default function Discover({ route, navigation }) {
  const { title, description, data,Material,screen } = route.params || {};
  const navigate = useNavigation();
  
  const topicData = data || [];
  const MaterialData = Material || [];
  const pageTitle = title || 'Discover';
  const pageScreen = screen || 'QuantsLearning';
  const pageDescription = description || 'Explore Topics';

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="flex-1 px-6 pt-4">
        <NavBar />
        {/* Header */}
        <View className="mb-6">
          <Text className="text-4xl font-bold text-slate-900">{pageTitle}</Text>
          <Text className="text-lg text-gray-500">{pageDescription}</Text>
        </View>

        {/* List of Topics */}
        <View className="gap-4">
          {topicData.length > 0 ? (
            topicData.map((item) => (
              <TouchableOpacity
                key={item.id}
                className={`flex-row items-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm active:opacity-70`}
                onPress={() => navigate.navigate(pageScreen, { title: item.name, data: MaterialData.find(x => x.id === item.id) })} // Placeholder for topic navigation
              >
                <View
                  className={`h-12 w-12 items-center justify-center rounded-full ${item.bgClass || 'bg-gray-100'}`}>
                  {getIcon(item.lib, item.icon, item.color)}
                </View>

                <View className="ml-4 flex-1">
                  <Text className="text-lg font-semibold text-slate-800">{item.name}</Text>
                </View>

                <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
              </TouchableOpacity>
            ))
          ) : (
            <Text className="text-gray-400">No topics validation available.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
