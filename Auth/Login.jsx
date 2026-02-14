import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';
import { AppContext } from '../Context/Context';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(AppContext);
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    const res = login(email, password);
    if (!res) {
      alert('Invalid credentials');
    }
  };

  return (
    <View className="flex-1 bg-gray-100 p-6 pt-20">
      {/* Header Section */}
      <View className="mb-10 items-center">
        <View className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-blue-100">
          <MaterialCommunityIcons name="head-lightbulb-outline" size={70} color="#2563EB" />
        </View>
        <Text className="mb-2 text-3xl font-bold text-gray-900">Welcome Back 👋</Text>
        <Text className="text-xl text-gray-500">Please enter your details below.</Text>
      </View>

      {/* Login Card */}
      <View className="w-full max-w-sm self-center rounded-3xl bg-white p-8 shadow-md">
        <Text className="mb-6 text-center text-4xl font-bold text-gray-900">Login</Text>

        {/* Email Input */}
        <View className="mb-4">
          <Text className="mb-2 text-xl font-semibold text-gray-700">Email</Text>
          <View className="flex-row items-center rounded-xl border border-gray-100 bg-gray-50 px-2 py-2 focus:border-blue-500">
            <Ionicons name="mail-outline" size={20} color="#9CA3AF" className="mr-1" />
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              className="ml-3 flex-1 text-2xl text-gray-700"
              placeholder="email@example.com"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {/* Password Input */}
        <View className="mb-2">
          <Text className="mb-2 text-xl font-semibold text-gray-700">Password</Text>
          <View className="flex-row items-center rounded-xl border border-gray-100 bg-gray-50 px-2 py-2 focus:border-blue-500">
            <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" className="mr-1" />
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              className="ml-3 flex-1 text-2xl text-gray-700"
              placeholder="••••••••"
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color="#9CA3AF"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity className="mb-6 mt-2">
          <Text className="text-right text-xl font-medium text-blue-600">Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          className="mb-6 flex-row items-center justify-center rounded-xl bg-blue-600 py-3.5 shadow-lg active:bg-blue-700"
          onPress={handleLogin}>
          <Text className="mr-2 text-xl font-bold text-white">LOGIN</Text>
          <Ionicons name="arrow-forward" size={25} color="white" />
        </TouchableOpacity>

        {/* Create Account Link */}
        <View className="flex-row justify-center">
          <Text className="text-xl text-gray-500">Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="text-xl font-bold text-blue-600">Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
