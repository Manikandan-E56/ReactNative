import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const QuestionCard = ({ question, index, total, selectedAnswer, onSelectAnswer }) => {
  return (
    <View className="mb-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <View className="mb-4 flex-row items-center">
        <View className="rounded-lg bg-blue-50 px-3 py-1">
          <Text className="text-xs font-bold text-blue-600">
            QUESTION {String(index + 1).padStart(2, '0')}
          </Text>
        </View>
      </View>

      <Text className="mb-6 text-xl font-bold leading-tight text-gray-900">
        {question.question}
      </Text>

      <View className="space-y-3">
        {question.options.map((option, idx) => {
          const optionLabel = String.fromCharCode(65 + idx); // A, B, C, D
          const isSelected = selectedAnswer === option;
          
          return (
            <TouchableOpacity
              key={idx}
              className={`mb-3 flex-row items-center rounded-2xl border p-4 ${
                isSelected
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white'
              }`}
              activeOpacity={0.7}
              onPress={() => onSelectAnswer(question.id, option)}>
              <View
                className={`mr-4 flex h-10 w-10 items-center justify-center rounded-xl border ${
                  isSelected
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-100 bg-gray-50'
                }`}>
                <Text className={`font-bold ${isSelected ? 'text-white' : 'text-gray-700'}`}>
                  {optionLabel}
                </Text>
              </View>
              <Text
                className={`flex-1 text-base font-medium ${
                  isSelected ? 'text-blue-700' : 'text-gray-700'
                }`}>
                {option}
              </Text>
              {isSelected && (
                <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default function Questions({ route }) {
  const { title, questions } = route.params || { title: 'Test', questions: [] };
  const navigation = useNavigation();
  
  // State to track user answers - format: { questionId: selectedOption }
  const [userAnswers, setUserAnswers] = useState({});

  const handleSelectAnswer = (questionId, selectedOption) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    questions.forEach(question => {
      const userAnswer = userAnswers[question.id];
      
      if (!userAnswer) {
        // No answer selected
        skipped++;
      } else if (userAnswer === question.UserAnswer) {
        // Correct answer
        correct++;
      } else {
        // Wrong answer
        wrong++;
      }
    });

    return { correct, wrong, skipped };
  };

  const handleSubmit = () => {
    const { correct, wrong, skipped } = calculateResults();
    
    navigation.navigate('Score', {
      correctAnswers: correct,
      wrongAnswers: wrong,
      skippedAnswers: skipped,
      totalQuestions: questions.length
    });
  };

  // Calculate answered questions for progress
  const answeredCount = Object.keys(userAnswers).length;
  const progress = questions.length > 0 ? (answeredCount / questions.length) * 100 : 0;

  const renderHeader = () => (
    <View className="px-6 pb-6 pt-2">
      <View className="mb-6 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()} className="-ml-2 p-2">
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
      </View>

      <Text className="mb-2 text-4xl font-extrabold text-slate-900">{title}</Text>

      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-sm font-bold tracking-wider text-gray-500">PROGRESS</Text>
        <Text className="text-sm font-bold text-blue-500">
          {answeredCount}/{questions?.length || 0}
        </Text>
      </View>

      <View className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <View
          className="h-full rounded-full bg-blue-500"
          style={{ width: `${progress}%` }}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <FlatList
        data={questions}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <View className="px-6">
            <QuestionCard
              question={item}
              index={index}
              total={questions?.length || 0}
              selectedAnswer={userAnswers[item.id]}
              onSelectAnswer={handleSelectAnswer}
            />
          </View>
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
      
      <TouchableOpacity
        className="mx-6 mb-4 flex-row items-center justify-between rounded-2xl bg-blue-500 p-4"
        onPress={handleSubmit}>
        <Text className="text-base font-bold text-white">
          Submit ({answeredCount}/{questions.length})
        </Text>
        <Ionicons name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}