import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import {useContext} from 'react';
import { AppContext } from '../Context/Context';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {register} = useContext(AppContext);

  const navigation = useNavigation();

  const handleSignup = () => {
    if(!email || !password || !name || !phone ){
      alert('Please fill all the fields');
      return;
    }
    if(password.length < 8){
      alert('Password must be at least 8 characters long');
      return;
    }
    console.log(name,email,password,phone);
  try{
    const res= register(name,email,password,phone);
    console.log(res);
    if(res){
      navigation.navigate('Tabs');
    }else{
      console.log(res);
    }
  }catch(error){
    console.log(error);
  }
  };

  return (
    <View className="flex-1 bg-gray-100 p-6 pt-10">
      {/* Header Section */}
      <View className="mb-6 items-center">
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
          className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-orange-100">
          <Ionicons name="rocket-outline" size={50} color="#EA580C" />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          className="items-center">
          <Text className="mb-2 text-3xl font-bold text-gray-900">Join us! 🚀</Text>
          <Text className="text-base text-gray-500">Create an account to get started</Text>
        </Animated.View>
      </View>

      {/* SignUp Card */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          className="flex-1 pt-6">
          <View className="w-full max-w-sm self-center rounded-3xl bg-white p-6 shadow-md">
            {/* Full Name */}
            <Animated.View
              entering={FadeInUp.delay(600).duration(1000).springify()}
              className="mb-4">
              <Text className="mb-1 text-lg font-semibold text-gray-700">FULL NAME</Text>
              <View className="flex-row items-center rounded-xl border border-gray-100 bg-gray-50 px-2 py-2 focus:border-blue-500">
                <Ionicons name="person-outline" size={20} color="#9CA3AF" />
                <TextInput
                  value={name}
                  onChangeText={setName}
                  className="ml-3 flex-1 text-xl text-gray-700"
                  placeholder="John Doe"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            </Animated.View>

            {/* Email Address */}
            <Animated.View
              entering={FadeInUp.delay(800).duration(1000).springify()}
              className="mb-4">
              <Text className="mb-1 text-lg font-semibold text-gray-700">EMAIL</Text>
              <View className="flex-row items-center rounded-xl border border-gray-100 bg-gray-50 px-2 py-2 focus:border-blue-500">
                <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="ml-3 flex-1 text-xl text-gray-700"
                  placeholder="example@mail.com"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            </Animated.View>

            {/* Phone Number */}
            <Animated.View
              entering={FadeInUp.delay(1000).duration(1000).springify()}
              className="mb-4">
              <Text className="mb-1 text-lg font-semibold text-gray-700">PHONE NUMBER</Text>
              <View className="flex-row items-center rounded-xl border border-gray-100 bg-gray-50 px-2 py-2 focus:border-blue-500">
                <Ionicons name="call-outline" size={20} color="#9CA3AF" />
                <TextInput
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                  className="ml-3 flex-1 text-xl text-gray-700"
                  placeholder="+1 (555) 000-0000"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            </Animated.View>

            {/* Password */}
            <Animated.View
              entering={FadeInUp.delay(1200).duration(1000).springify()}
              className="mb-6">
              <Text className="mb-1 text-lg font-semibold text-gray-700">PASSWORD</Text>
              <View className="flex-row items-center rounded-xl border border-gray-100 bg-gray-50 px-2 py-2 focus:border-blue-500">
                <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  className="ml-3 flex-1 text-xl text-gray-700"
                  placeholder="Min. 8 characters"
                  placeholderTextColor="#9CA3AF"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color="#9CA3AF"
                  />
                </TouchableOpacity>
              </View>
            </Animated.View>

            {/* Sign Up Button */}
            <Animated.View entering={FadeInUp.delay(1400).duration(1000).springify()}>
              <TouchableOpacity
                className="mb-4 flex-row items-center justify-center rounded-xl bg-blue-600 py-3.5 shadow-lg active:bg-blue-600"
                onPress={handleSignup}>
                <Text className="text-xl font-bold text-white">Sign Up</Text>
              </TouchableOpacity>
            </Animated.View>

            {/* Footer */}
            <Animated.View
              entering={FadeInUp.delay(1600).duration(1000).springify()}
              className="flex-row justify-center">
              <Text className="text-xl text-gray-500">Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text className="text-xl font-bold text-blue-600">Sign In</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
