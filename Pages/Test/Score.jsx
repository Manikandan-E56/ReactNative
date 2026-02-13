import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Svg, { Circle } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// Reusable Stat Card Component
const StatCard = ({ label, value, color, bgColor, icon }) => (
  <View className={`flex-1 items-center justify-center rounded-2xl p-4 ${bgColor} mx-1`}>
    <View className={`mb-2 h-10 w-10 items-center justify-center rounded-full bg-white`}>
      <Ionicons name={icon} size={20} color={color} />
    </View>
    <Text className="text-2xl font-bold text-gray-800">{value}</Text>
    <Text className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</Text>
  </View>
);

export default function Score({ route }) {
  const { correctAnswers, wrongAnswers, skippedAnswers, totalQuestions } = route.params;
  const navigation = useNavigation();

  // Calculate percentage
  const total = totalQuestions || correctAnswers + wrongAnswers + skippedAnswers || 1;
  const percentage = Math.round((correctAnswers / total) * 100);

  // Animation values
  const progress = useSharedValue(0);

  // Circular Progress Config
  const size = 200;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  // Prevent going back to Score page
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Navigate to Home and remove Score from history
        navigation.reset({
          index: 0,
          routes: [{ name: 'Tabs', params: { screen: 'Home' } }],
        });
        return true;
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => backHandler.remove();
    }, [navigation])
  );

  useEffect(() => {
    // Animate progress on mount
    progress.value = withTiming(percentage / 100, {
      duration: 1500,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = circumference * (1 - progress.value);
    return {
      strokeDashoffset,
    };
  });

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false} className='px-6 py-4 pt-16'>
          
        {/* Header */}
        <View className="px-6 pb-2 pt-4">
          <Text className="text-center text-xl font-bold text-gray-800">Test Analysis</Text>
        </View>

        {/* Score Circle Section */}
        <View className="items-center justify-center py-10">
          <View className="relative items-center justify-center">
            {/* Background Circle */}
            <Svg width={size} height={size}>
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#e5e7eb"
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Progress Circle */}
              <AnimatedCircle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#3b82f6" // Blue-500
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={`${circumference} ${circumference}`}
                animatedProps={animatedProps}
                strokeLinecap="round"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
            </Svg>

            <View className="absolute items-center justify-center">
              <Text className="text-5xl font-extrabold text-gray-900">{percentage}%</Text>
              <Text className="mt-1 text-sm font-medium uppercase tracking-widest text-gray-500">
                Score
              </Text>
            </View>
          </View>

          <View className="mt-6 items-center px-10">
            <Text className="text-center text-2xl font-bold text-gray-900">
              {percentage >= 80
                ? 'Excellent Job! 🌟'
                : percentage >= 50
                  ? 'Good Effort! 👍'
                  : 'Keep Practicing! 💪'}
            </Text>
            <Text className="mt-2 text-center text-gray-500">
              {percentage >= 80
                ? 'You have mastered this topic well.'
                : percentage >= 50
                  ? 'You are on the right track, keep going.'
                  : "Don't give up, review the materials and try again."}
            </Text>
          </View>
        </View>

        {/* Stats Grid */}
        <View className="px-6">
          <View className="mb-4 flex-row justify-between">
            <StatCard
              label="Correct"
              value={correctAnswers}
              color="#22c55e"
              bgColor="bg-green-50"
              icon="checkmark-circle"
            />
            <StatCard
              label="Wrong"
              value={wrongAnswers}
              color="#ef4444"
              bgColor="bg-red-50"
              icon="close-circle"
            />
            <StatCard
              label="Skipped"
              value={skippedAnswers}
              color="#f59e0b"
              bgColor="bg-orange-50"
              icon="alert-circle"
            />
          </View>
        </View>

        {/* Action Buttons */}
        <View className="mt-6 space-y-4 px-6 py-4">
          <TouchableOpacity
            className="w-full flex-row items-center justify-center rounded-2xl bg-blue-500 py-4 shadow-sm shadow-blue-200 mb-6"
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [
                  { name: 'Tabs', params: { screen: 'Home' } },
                  { name: 'TestContent' }
                ],
              });
            }}
          >
            <Text className="mr-4 text-xl font-bold text-white">Learn & Review</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            className="w-full flex-row items-center justify-center rounded-2xl border border-gray-200 bg-white py-4"
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Tabs', params: { screen: 'Home' } }],
              });
            }}
          >
            <Ionicons name="home" size={20} color="#4b5563" />
            <Text className="ml-2 text-base font-bold text-gray-700">Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
