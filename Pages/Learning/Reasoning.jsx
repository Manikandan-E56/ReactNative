import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import NavBar from 'components/NavBar'

export default function Reasoning({ route }) {
  const { title, data } = route.params || {};
  const [expandedSections, setExpandedSections] = useState({});
  const [completedChallenges, setCompletedChallenges] = useState({});
  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (!data) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <View className="flex-1 items-center justify-center">
          <Ionicons name="document-text-outline" size={64} color="#6366f1" />
          <Text className="text-gray-400 mt-4 text-lg">No content available</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Detect format type
  const isInteractiveFormat = () => {
    return !!(data.learningStyle || data.welcome || data.learningPath || data.quickStart);
  };

  // ============================================
  // INTERACTIVE FORMAT RENDERERS
  // ============================================

  // Render Welcome Section
  const renderWelcome = () => {
    if (!data.welcome) return null;
    
    return (
      <View className="mb-6">
        <View className="bg-purple-600 rounded-3xl p-6 shadow-lg">
          <View className="bg-purple-700 rounded-2xl p-4 mb-4">
            <Text className="text-white text-3xl font-bold mb-3">🎉 {data.welcome.message}</Text>
          </View>
          <Text className="text-white text-base leading-7 mb-4">{data.welcome.whatToExpect}</Text>
          
          <View className="flex-row flex-wrap gap-2 mt-4">
            <View className="bg-purple-800 rounded-xl px-4 py-2">
              <Text className="text-white font-semibold text-sm">{data.welcome.difficultyLevel}</Text>
            </View>
            <View className="bg-purple-800 rounded-xl px-4 py-2">
              <Text className="text-white font-semibold text-sm">⏱️ {data.welcome.estimatedTime}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  // Render Quick Start Challenge
  const renderQuickStart = () => {
    if (!data.quickStart) return null;
    
    return (
      <View className="mb-6">
        <View className="bg-white rounded-3xl p-6 shadow-xl border-4 border-indigo-200">
          <View className="bg-indigo-100 rounded-2xl p-4 mb-4">
            <View className="flex-row items-center">
              <View className="bg-indigo-500 rounded-full p-3 mr-3">
                <Ionicons name="flash" size={24} color="white" />
              </View>
              <Text className="text-gray-900 text-xl font-bold flex-1">{data.quickStart.title}</Text>
            </View>
          </View>
          
          <Text className="text-gray-700 text-lg font-semibold mb-3">{data.quickStart.challenge}</Text>
          
          <View className="space-y-2 mb-4">
            {data.quickStart.options?.map((option, idx) => (
              <TouchableOpacity 
                key={idx}
                className="bg-indigo-50 rounded-xl p-4 border-2 border-indigo-300"
                activeOpacity={0.7}
              >
                <Text className="text-gray-800 font-medium">{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          {completedChallenges.quickStart && (
            <View className="bg-green-100 rounded-xl p-4 border-2 border-green-400">
              <View className="flex-row items-center mb-2">
                <Ionicons name="checkmark-circle" size={24} color="#10b981" />
                <Text className="text-green-800 font-bold ml-2">Answer: {data.quickStart.answer}</Text>
              </View>
              <Text className="text-gray-700 text-sm leading-6">{data.quickStart.explanation}</Text>
            </View>
          )}
          
          {!completedChallenges.quickStart && (
            <TouchableOpacity 
              className="bg-indigo-600 rounded-xl p-4 items-center shadow-md"
              onPress={() => setCompletedChallenges(prev => ({...prev, quickStart: true}))}
            >
              <Text className="text-white font-bold text-base">Show Answer</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  // Render Core Idea
  const renderCoreIdea = () => {
    if (!data.coreIdea) return null;
    
    return (
      <View className="mb-6">
        <View className="bg-blue-600 rounded-3xl p-6 shadow-xl">
          <View className="bg-blue-700 rounded-2xl p-4 mb-4">
            <View className="flex-row items-center">
              <Text className="text-4xl mr-3">💡</Text>
              <Text className="text-white text-2xl font-bold flex-1">{data.coreIdea.title}</Text>
            </View>
          </View>
          
          <Text className="text-white text-lg leading-7 mb-4">{data.coreIdea.concept}</Text>
          
          {data.coreIdea.realLifeExample && (
            <View className="bg-blue-700 rounded-2xl p-4 border-2 border-blue-500">
              <Text className="text-white font-bold mb-2">{data.coreIdea.realLifeExample.scenario}</Text>
              <Text className="text-blue-100 text-sm leading-6">{data.coreIdea.realLifeExample.example1}</Text>
            </View>
          )}
          
          {data.coreIdea.keyTakeaway && (
            <View className="mt-4 bg-yellow-400 rounded-2xl p-4 shadow-md">
              <Text className="text-gray-900 font-bold text-base">⭐ {data.coreIdea.keyTakeaway}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  // Render Learning Path (Levels)
  const renderLearningPath = () => {
    if (!data.learningPath) return null;
    
    return data.learningPath.map((level, idx) => (
      <View key={idx} className="mb-6">
        <TouchableOpacity
          onPress={() => toggleSection(`level-${idx}`)}
          className="bg-white rounded-3xl shadow-lg border-3 border-purple-300 overflow-hidden"
          activeOpacity={0.8}
        >
          {/* Level Header */}
          <View className="bg-purple-600 p-5">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <View className="bg-purple-700 rounded-lg px-3 py-1 mb-2 self-start">
                  <Text className="text-white text-xs font-bold">LEVEL {level.level}</Text>
                </View>
                <Text className="text-white text-xl font-bold mb-2">{level.title}</Text>
                <View className="bg-purple-800 rounded-full px-3 py-1 self-start">
                  <Text className="text-white text-sm">🏅 {level.badge}</Text>
                </View>
              </View>
              <View className="bg-purple-700 rounded-full p-2">
                <Ionicons 
                  name={expandedSections[`level-${idx}`] ? "chevron-up" : "chevron-down"} 
                  size={28} 
                  color="white" 
                />
              </View>
            </View>
          </View>
          
          {expandedSections[`level-${idx}`] && (
            <View className="p-5 bg-gray-50">
              {/* Mini Challenge */}
              {level.miniChallenge && (
                <View className="bg-yellow-100 rounded-2xl p-4 mb-4 border-3 border-yellow-300">
                  <View className="bg-yellow-200 rounded-xl p-3 mb-3">
                    <Text className="text-gray-900 font-bold">🎯 {level.miniChallenge.question}</Text>
                  </View>
                  <Text className="text-gray-700 text-lg mb-2">{level.miniChallenge.puzzle}</Text>
                  <Text className="text-orange-600 text-sm italic mb-3">{level.miniChallenge.hint}</Text>
                  
                  {completedChallenges[`level-${idx}-mini`] && (
                    <View className="bg-green-100 rounded-xl p-3 border-2 border-green-400">
                      <Text className="text-green-800 font-bold">✅ {level.miniChallenge.answer}</Text>
                    </View>
                  )}
                  
                  {!completedChallenges[`level-${idx}-mini`] && (
                    <TouchableOpacity 
                      className="bg-yellow-500 rounded-xl p-3 items-center shadow-md"
                      onPress={() => setCompletedChallenges(prev => ({...prev, [`level-${idx}-mini`]: true}))}
                    >
                      <Text className="text-white font-bold">Show Answer</Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
              
              {/* Relationships/Patterns */}
              {level.relationships?.map((rel, relIdx) => (
                <View key={relIdx} className="mb-4">
                  <View className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-blue-200">
                    {/* Relationship Header */}
                    <View className="bg-blue-500 p-4">
                      <Text className="text-white text-lg font-bold mb-1">{rel.type}</Text>
                      <Text className="text-blue-100 text-sm">{rel.easyToRemember}</Text>
                    </View>
                    
                    {/* Relationship Content */}
                    <View className="p-4">
                      <View className="bg-blue-50 rounded-xl p-3 mb-3">
                        <Text className="text-blue-900 text-xs font-bold mb-2">EXAMPLES</Text>
                        <View className="flex-row flex-wrap gap-2">
                          {rel.examples?.map((ex, exIdx) => (
                            <View key={exIdx} className="bg-blue-100 rounded-lg px-3 py-2 border border-blue-300">
                              <Text className="text-blue-900 font-mono text-sm">{ex}</Text>
                            </View>
                          ))}
                        </View>
                      </View>
                      
                      {rel.memoryTrick && (
                        <View className="bg-purple-50 rounded-xl p-3 mb-3 border border-purple-200">
                          <Text className="text-purple-900 text-xs font-bold mb-1">💡 MEMORY TRICK</Text>
                          <Text className="text-purple-800 text-sm">{rel.memoryTrick}</Text>
                        </View>
                      )}

                      {rel.trickToRemember && (
                        <View className="bg-purple-50 rounded-xl p-3 mb-3 border border-purple-200">
                          <Text className="text-purple-900 text-xs font-bold mb-1">💡 TRICK</Text>
                          <Text className="text-purple-800 text-sm">{rel.trickToRemember}</Text>
                        </View>
                      )}
                      
                      {rel.quickPractice && (
                        <View className="bg-amber-50 rounded-xl p-3 border-2 border-amber-300">
                          <View className="bg-amber-100 rounded-lg p-2 mb-2">
                            <Text className="text-gray-800 font-semibold">✏️ Quick Practice:</Text>
                          </View>
                          <Text className="text-gray-700 mb-2">{rel.quickPractice.question}</Text>
                          
                          {completedChallenges[`level-${idx}-rel-${relIdx}`] && (
                            <View className="bg-green-100 rounded-lg p-3 mt-2 border border-green-300">
                              <Text className="text-green-800 font-bold mb-1">✅ Answer: {rel.quickPractice.answer}</Text>
                              <Text className="text-gray-600 text-xs">{rel.quickPractice.oneLineTip}</Text>
                            </View>
                          )}
                          
                          {!completedChallenges[`level-${idx}-rel-${relIdx}`] && (
                            <TouchableOpacity 
                              className="bg-amber-500 rounded-lg p-3 items-center mt-2 shadow-sm"
                              onPress={() => setCompletedChallenges(prev => ({...prev, [`level-${idx}-rel-${relIdx}`]: true}))}
                            >
                              <Text className="text-white font-semibold">Show Answer</Text>
                            </TouchableOpacity>
                          )}
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              ))}

              {/* Patterns (for number/letter levels) */}
              {level.patterns?.map((pattern, patIdx) => (
                <View key={patIdx} className="mb-4">
                  <View className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-indigo-200">
                    <View className="bg-indigo-500 p-4">
                      <Text className="text-white font-bold text-lg">{pattern.pattern}</Text>
                    </View>
                    
                    <View className="p-4">
                      <Text className="text-gray-700 mb-3 text-base">{pattern.rule}</Text>
                      
                      <View className="bg-indigo-50 rounded-xl p-3 mb-3 border border-indigo-200">
                        <Text className="text-indigo-900 text-xs font-bold mb-2">EXAMPLES</Text>
                        {pattern.examples?.map((ex, exIdx) => (
                          <Text key={exIdx} className="text-gray-700 text-sm mb-1">• {ex}</Text>
                        ))}
                      </View>

                      {pattern.memorize && (
                        <View className="bg-yellow-50 rounded-xl p-3 mb-3 border border-yellow-200">
                          <Text className="text-yellow-900 text-xs font-bold mb-1">📝 MEMORIZE</Text>
                          <Text className="text-gray-700 text-sm">{pattern.memorize}</Text>
                        </View>
                      )}
                      
                      {pattern.practice && (
                        <View className="bg-green-50 rounded-xl p-3 border-2 border-green-300">
                          <Text className="text-gray-800 font-semibold mb-2">{pattern.practice.question}</Text>
                          {completedChallenges[`level-${idx}-pat-${patIdx}`] ? (
                            <View className="bg-green-100 rounded-lg p-2">
                              <Text className="text-green-700 font-bold">✅ {pattern.practice.answer}</Text>
                              <Text className="text-gray-600 text-xs mt-1">{pattern.practice.solution}</Text>
                            </View>
                          ) : (
                            <TouchableOpacity 
                              className="bg-green-600 rounded-lg p-3 items-center mt-2 shadow-sm"
                              onPress={() => setCompletedChallenges(prev => ({...prev, [`level-${idx}-pat-${patIdx}`]: true}))}
                            >
                              <Text className="text-white font-semibold">Solve</Text>
                            </TouchableOpacity>
                          )}
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              ))}
              
              {/* Level Complete */}
              {level.levelComplete && (
                <View className="bg-green-500 rounded-2xl p-5 mt-4 shadow-lg">
                  <View className="bg-green-600 rounded-xl p-3 mb-3">
                    <Text className="text-white text-xl font-bold">{level.levelComplete.message}</Text>
                  </View>
                  <View className="bg-green-600 rounded-xl p-3">
                    <Text className="text-white text-sm font-semibold">
                      🎯 Skills: {level.levelComplete.skillsUnlocked?.join(', ')}
                    </Text>
                  </View>
                  {level.levelComplete.nextLevel && (
                    <View className="bg-white rounded-xl p-3 mt-3">
                      <Text className="text-green-700 font-bold">{level.levelComplete.nextLevel}</Text>
                    </View>
                  )}
                </View>
              )}
            </View>
          )}
        </TouchableOpacity>
      </View>
    ));
  };

  // ============================================
  // TRADITIONAL FORMAT RENDERERS
  // ============================================

  const renderSubtopics = (subtopics) => (
    <View className="mt-3">
      {subtopics.map((subtopic, idx) => (
        <View key={idx} className="mb-4">
          <View className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-blue-200">
            <View className="bg-blue-500 px-4 py-3">
              <Text className="text-white font-bold text-lg">{subtopic.name || subtopic.title}</Text>
            </View>
            
            <View className="p-4">
              {subtopic.definition && (
                <Text className="text-gray-700 text-base leading-6 mb-3">{subtopic.definition}</Text>
              )}
              
              {subtopic.description && (
                <Text className="text-gray-700 text-base leading-6 mb-3">{subtopic.description}</Text>
              )}
              
              {subtopic.example && (
                <View className="bg-blue-50 rounded-xl p-3 mb-3 border-2 border-blue-200">
                  <Text className="text-xs font-semibold text-blue-800 mb-1">EXAMPLE</Text>
                  <Text className="text-blue-900 text-sm font-mono">{subtopic.example}</Text>
                </View>
              )}

              {subtopic.formula && (
                <View className="bg-purple-50 rounded-xl p-3 mb-3 border-2 border-purple-200">
                  <Text className="text-purple-700 font-mono text-sm font-bold">{subtopic.formula}</Text>
                </View>
              )}

              {subtopic.notation && (
                <View className="bg-gray-50 rounded-lg p-2 mb-2">
                  <Text className="text-gray-600 text-sm italic">📝 {subtopic.notation}</Text>
                </View>
              )}
              
              {subtopic.properties && (
                <View className="mt-3">
                  <View className="bg-green-50 rounded-lg p-2 mb-2">
                    <Text className="text-gray-800 font-semibold text-sm">Properties:</Text>
                  </View>
                  {subtopic.properties.map((prop, i) => (
                    <View key={i} className="flex-row items-start mb-1">
                      <View className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3" />
                      <Text className="text-gray-700 text-sm flex-1">{prop}</Text>
                    </View>
                  ))}
                </View>
              )}

              {subtopic.types && (
                <View className="mt-3">
                  <View className="bg-blue-50 rounded-lg p-2 mb-2">
                    <Text className="text-gray-800 font-semibold text-sm">Types:</Text>
                  </View>
                  {subtopic.types.map((type, i) => (
                    <View key={i} className="flex-row items-start mb-1">
                      <View className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3" />
                      <Text className="text-gray-700 text-sm flex-1">{type}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderFormulas = (formulas) => (
    <View className="mt-3">
      {formulas.map((category, idx) => (
        <View key={idx} className="mb-4">
          <View className="bg-white rounded-2xl p-4 shadow-md border-l-4 border-purple-500">
            {category.category && (
              <View className="bg-purple-50 rounded-lg px-3 py-2 mb-3">
                <Text className="text-purple-700 font-bold text-base uppercase tracking-wide">
                  {category.category}
                </Text>
              </View>
            )}
            {category.items?.map((item, i) => (
              <View key={i} className="mb-4 pb-4 border-b border-gray-100 last:border-b-0">
                <Text className="text-gray-800 font-semibold mb-2">{item.name || item.title}</Text>
                
                {item.formula && (
                  <View className="bg-purple-50 rounded-xl p-3 mb-2 border border-purple-200">
                    <Text className="text-purple-700 font-mono text-base font-bold">{item.formula}</Text>
                  </View>
                )}
                
                {item.example && (
                  <View className="flex-row items-start mt-2">
                    <Ionicons name="bulb" size={16} color="#f59e0b" />
                    <Text className="text-gray-600 text-sm ml-2 flex-1">{item.example}</Text>
                  </View>
                )}

                {item.note && (
                  <View className="bg-orange-50 rounded-lg p-2 mt-2 border border-orange-200">
                    <Text className="text-orange-600 text-xs italic">💡 {item.note}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );

  const renderExamples = (examples) => (
    <View className="mt-3">
      {examples.map((example, idx) => (
        <View key={idx} className="mb-5">
          <View className="bg-white rounded-2xl shadow-md overflow-hidden border-3 border-amber-300">
            <View className="bg-amber-100 px-4 py-3 border-b-2 border-amber-300">
              <View className="flex-row items-center mb-2">
                <View className="bg-amber-500 rounded-lg px-3 py-1">
                  <Text className="text-white font-bold text-xs">Q{idx + 1}</Text>
                </View>
              </View>
              <Text className="text-gray-800 font-semibold text-base leading-6">{example.question}</Text>
            </View>
            
            <View className="p-4 bg-white">
              <View className="bg-green-50 rounded-lg px-3 py-2 mb-3 border border-green-200">
                <View className="flex-row items-center">
                  <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                  <Text className="text-green-700 font-bold ml-2">Solution</Text>
                </View>
              </View>
              <Text className="text-gray-700 leading-6 text-sm whitespace-pre-line">{example.solution}</Text>
            </View>
            
            <View className="bg-green-100 px-4 py-3 border-t-2 border-green-300">
              <View className="flex-row items-center">
                <Text className="text-green-800 font-bold mr-2">Answer:</Text>
                <Text className="text-green-600 font-bold text-base">{example.answer}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderTricks = (tricks) => (
    <View className="mt-3">
      {tricks.map((trick, idx) => (
        <View key={idx} className="mb-4">
          <View className="bg-white rounded-2xl shadow-lg border-3 border-yellow-300 overflow-hidden">
            <View className="bg-yellow-400 p-4">
              <View className="flex-row items-start">
                <View className="bg-yellow-500 rounded-full p-2 mr-3">
                  <Ionicons name="flash" size={18} color="white" />
                </View>
                <Text className="text-gray-900 font-bold text-base flex-1">{trick.name || trick.title}</Text>
              </View>
            </View>
            
            <View className="p-4">
              {trick.method && (
                <View className="bg-yellow-50 rounded-xl p-3 mb-3 border border-yellow-200">
                  <Text className="text-xs font-semibold text-yellow-800 mb-1">METHOD</Text>
                  <Text className="text-gray-700 text-sm leading-5">{trick.method}</Text>
                </View>
              )}

              {trick.approach && (
                <View className="bg-yellow-50 rounded-xl p-3 mb-3 border border-yellow-200">
                  <Text className="text-xs font-semibold text-yellow-800 mb-1">APPROACH</Text>
                  <Text className="text-gray-700 text-sm leading-5">{trick.approach}</Text>
                </View>
              )}
              
              {trick.example && (
                <View className="bg-orange-50 rounded-xl p-3 border-2 border-orange-300">
                  <Text className="text-xs font-semibold text-orange-800 mb-1">EXAMPLE</Text>
                  <Text className="text-orange-900 text-sm font-mono">{trick.example}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderMistakes = (mistakes) => (
    <View className="mt-3">
      {mistakes.map((mistake, idx) => (
        <View key={idx} className="mb-4">
          <View className="bg-white rounded-2xl shadow-md border-l-4 border-red-500 overflow-hidden">
            <View className="p-4">
              <View className="flex-row items-start mb-3">
                <View className="bg-red-100 rounded-full p-2 mr-3">
                  <Ionicons name="close-circle" size={20} color="#dc2626" />
                </View>
                <Text className="text-red-900 font-bold flex-1 text-base">{mistake.mistake}</Text>
              </View>
              
              <View className="bg-green-50 rounded-xl p-3 border-2 border-green-400 ml-11">
                <View className="flex-row items-start">
                  <Ionicons name="checkmark-circle" size={16} color="#16a34a" />
                  <Text className="text-green-800 text-sm ml-2 flex-1 leading-5">{mistake.correction}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderTips = (tips) => (
    <View className="bg-white rounded-2xl shadow-md p-4 mt-3 border-2 border-teal-200">
      {tips.map((tip, idx) => (
        <View key={idx} className="flex-row items-start mb-3 pb-3 border-b border-gray-100 last:border-b-0">
          <View className="bg-teal-500 rounded-full w-6 h-6 items-center justify-center mr-3 mt-0.5">
            <Text className="text-white font-bold text-xs">{idx + 1}</Text>
          </View>
          <Text className="text-gray-700 flex-1 leading-6">{tip}</Text>
        </View>
      ))}
    </View>
  );

  const renderStrategies = (strategies) => (
    <View className="mt-3">
      {strategies.map((strategy, idx) => (
        <View key={idx} className="mb-4">
          <View className="bg-white rounded-2xl p-4 shadow-md border-l-4 border-indigo-500">
            <Text className="text-indigo-700 font-bold text-base mb-2">{strategy.name || strategy.title}</Text>
            {strategy.approach && (
              <Text className="text-gray-700 text-sm mb-2">{strategy.approach}</Text>
            )}
            {strategy.example && (
              <View className="bg-indigo-50 rounded-xl p-3 mt-2 border border-indigo-200">
                <Text className="text-indigo-900 text-sm">{strategy.example}</Text>
              </View>
            )}
            {strategy.solution && (
              <View className="bg-green-50 rounded-xl p-3 mt-2 border border-green-200">
                <Text className="text-gray-700 text-sm">{strategy.solution}</Text>
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );

  const renderExamTips = (examTips) => (
    <View className="mt-3">
      {examTips.map((tip, idx) => (
        <View key={idx} className="bg-indigo-50 rounded-xl p-4 border-2 border-indigo-200 mb-3">
          <View className="flex-row items-start">
            <Ionicons name="star" size={18} color="#6366f1" />
            <Text className="text-gray-700 ml-3 flex-1 leading-6">{tip}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderRules = (rules) => (
    <View className="mt-3">
      {rules.map((rule, idx) => (
        <View key={idx} className="bg-green-50 p-3 rounded-lg mb-2 border-2 border-green-300">
          <View className="flex-row items-start">
            {rule.divisor && (
              <View className="bg-green-600 rounded-full w-8 h-8 items-center justify-center mr-3">
                <Text className="text-white font-bold text-xs">{rule.divisor}</Text>
              </View>
            )}
            <View className="flex-1">
              <Text className="text-sm font-semibold text-gray-800">{rule.rule || rule.description || rule.name}</Text>
              {rule.example && (
                <Text className="text-xs text-gray-600 mt-1">Example: {rule.example}</Text>
              )}
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderPatterns = (patterns) => (
    <View className="mt-3">
      {patterns.map((pattern, idx) => (
        <View key={idx} className="bg-orange-50 p-3 rounded-lg mb-2 border-2 border-orange-300">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-base font-bold text-gray-800">
              {pattern.name || (pattern.base !== undefined ? `Base: ${pattern.base}` : `Pattern ${idx + 1}`)}
            </Text>
            {pattern.cyclicity && (
              <View className="bg-orange-500 rounded-full px-3 py-1">
                <Text className="text-white text-xs font-semibold">Cycle: {pattern.cyclicity}</Text>
              </View>
            )}
          </View>
          {pattern.cycle && (
            <Text className="text-sm text-gray-700 mb-1">
              Pattern: {Array.isArray(pattern.cycle) ? pattern.cycle.join(' → ') : pattern.cycle}
            </Text>
          )}
          {pattern.example && (
            <Text className="text-xs text-gray-600 mt-1">{pattern.example}</Text>
          )}
          {pattern.note && (
            <View className="bg-orange-100 rounded-lg p-2 mt-2 border border-orange-300">
              <Text className="text-xs text-orange-700 italic">💡 {pattern.note}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );

  const renderSets = (sets) => (
    <View className="mt-3">
      {sets.map((set, idx) => (
        <View key={idx} className="bg-gray-50 rounded-xl p-4 mb-3 border-2 border-gray-300">
          <View className="bg-gray-200 rounded-lg px-3 py-1 mb-2 self-start">
            <Text className="text-gray-800 font-bold text-sm">{set.name}</Text>
          </View>
          <Text className="text-gray-700 text-sm font-mono leading-6">{set.values}</Text>
        </View>
      ))}
    </View>
  );

  const renderSeries = (series) => (
    <View className="mt-3">
      {series.map((item, idx) => (
        <View key={idx} className="bg-blue-50 rounded-xl p-4 mb-3 border-2 border-blue-300">
          <View className="bg-blue-500 rounded-lg px-3 py-1 mb-2 self-start">
            <Text className="text-white font-bold text-sm">{item.type || item.name}</Text>
          </View>
          {item.sequence && (
            <Text className="text-gray-700 text-sm mb-1">Sequence: {item.sequence}</Text>
          )}
          {item.nthTerm && (
            <Text className="text-gray-700 text-sm mb-1">nth Term: {item.nthTerm}</Text>
          )}
          {item.sum && (
            <Text className="text-gray-700 text-sm">Sum: {item.sum}</Text>
          )}
        </View>
      ))}
    </View>
  );

  const renderTraditionalContent = (section) => {
    return (
      <View>
        {section.content && (
          <Text className="text-gray-700 text-base leading-7 mb-3">{section.content}</Text>
        )}
        {section.description && (
          <Text className="text-gray-600 text-base leading-6 mb-3">{section.description}</Text>
        )}
        {section.subtopics && renderSubtopics(section.subtopics)}
        {section.formulas && renderFormulas(section.formulas)}
        {section.rules && renderRules(section.rules)}
        {section.patterns && renderPatterns(section.patterns)}
        {section.tricks && renderTricks(section.tricks)}
        {section.examples && renderExamples(section.examples)}
        {section.mistakes && renderMistakes(section.mistakes)}
        {section.tips && renderTips(section.tips)}
        {section.strategies && renderStrategies(section.strategies)}
        {section.examTips && renderExamTips(section.examTips)}
        {section.sets && renderSets(section.sets)}
        {section.series && renderSeries(section.series)}
        
        {section.properties && Array.isArray(section.properties) && (
          <View className="mt-3">
            {section.properties.map((prop, idx) => (
              <View key={idx} className="flex-row items-start mb-2">
                <View className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3" />
                <Text className="text-gray-700 text-sm flex-1 leading-5">{prop}</Text>
              </View>
            ))}
          </View>
        )}

        {section.howToUse && (
          <View className="bg-blue-50 p-4 rounded-xl mt-3 border-2 border-blue-200">
            <View className="bg-blue-500 rounded-lg px-3 py-1 mb-2 self-start">
              <Text className="text-white font-semibold text-xs">HOW TO USE</Text>
            </View>
            <Text className="text-blue-700 leading-5">{section.howToUse}</Text>
          </View>
        )}

        {section.importance && (
          <View className="bg-indigo-50 p-4 rounded-xl mt-3 border-2 border-indigo-200">
            <View className="flex-row items-start">
              <Ionicons name="information-circle" size={20} color="#6366f1" />
              <Text className="text-indigo-800 text-sm ml-2 flex-1 leading-5">{section.importance}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  const getSectionStyle = (section, index) => {
    const title = (section.title || '').toLowerCase();
    if (title.includes('introduction') || index === 0) return 'hero';
    if (title.includes('example') || title.includes('solved')) return 'example';
    if (title.includes('trick') || title.includes('shortcut')) return 'trick';
    if (title.includes('mistake') || title.includes('avoid')) return 'warning';
    if (title.includes('tip') || title.includes('practice')) return 'tips';
    if (title.includes('strategy') || title.includes('exam')) return 'strategy';
    return 'default';
  };

  const renderTraditionalSection = (section, index) => {
    const sectionTitle = section.title || section.name || `Section ${index + 1}`;
    const style = getSectionStyle(section, index);

    // HERO STYLE
    if (style === 'hero') {
      return (
        <View key={index} className="mb-6">
          <View className="bg-purple-600 rounded-3xl p-6 shadow-xl">
            <View className="bg-purple-700 rounded-2xl p-4 mb-3">
              <View className="flex-row items-center">
                <View className="bg-purple-800 rounded-full p-3 mr-3">
                  <Ionicons name="rocket" size={28} color="white" />
                </View>
                <Text className="text-white text-2xl font-bold flex-1">{sectionTitle}</Text>
              </View>
            </View>
            
            <View className="bg-purple-700 rounded-xl p-4">
              {renderTraditionalContent(section)}
            </View>
          </View>
        </View>
      );
    }

    // EXAMPLE STYLE
    if (style === 'example') {
      return (
        <View key={index} className="mb-6">
          <View className="bg-amber-500 rounded-2xl p-4 mb-4 shadow-lg">
            <View className="flex-row items-center">
              <Ionicons name="bulb" size={28} color="white" />
              <Text className="text-white text-xl font-bold ml-3">{sectionTitle}</Text>
            </View>
          </View>
          {renderTraditionalContent(section)}
        </View>
      );
    }

    // TRICK STYLE
    if (style === 'trick') {
      return (
        <View key={index} className="mb-6">
          <View className="bg-yellow-400 rounded-2xl p-4 mb-4 shadow-lg">
            <View className="flex-row items-center">
              <Ionicons name="flash" size={28} color="#78350f" />
              <Text className="text-gray-900 text-xl font-bold ml-3">{sectionTitle}</Text>
            </View>
          </View>
          {renderTraditionalContent(section)}
        </View>
      );
    }

    // WARNING STYLE
    if (style === 'warning') {
      return (
        <View key={index} className="mb-6">
          <View className="bg-red-100 rounded-2xl p-4 mb-4 border-3 border-red-400">
            <View className="flex-row items-center">
              <Ionicons name="warning" size={28} color="#dc2626" />
              <Text className="text-red-900 text-xl font-bold ml-3">{sectionTitle}</Text>
            </View>
          </View>
          {renderTraditionalContent(section)}
        </View>
      );
    }

    // TIPS STYLE
    if (style === 'tips') {
      return (
        <View key={index} className="mb-6">
          <View className="bg-teal-500 rounded-2xl p-4 mb-4 shadow-lg">
            <View className="flex-row items-center">
              <Ionicons name="checkmark-done" size={28} color="white" />
              <Text className="text-white text-xl font-bold ml-3">{sectionTitle}</Text>
            </View>
          </View>
          {renderTraditionalContent(section)}
        </View>
      );
    }

    // STRATEGY STYLE
    if (style === 'strategy') {
      return (
        <View key={index} className="mb-6">
          <View className="bg-indigo-600 rounded-3xl p-6 shadow-2xl">
            <View className="bg-indigo-700 rounded-2xl p-4 mb-4">
              <View className="flex-row items-center">
                <View className="bg-indigo-800 rounded-xl p-3 mr-3">
                  <Ionicons name="trophy" size={28} color="white" />
                </View>
                <Text className="text-white text-2xl font-bold flex-1">{sectionTitle}</Text>
              </View>
            </View>
            <View className="bg-indigo-700 rounded-xl p-4">
              {renderTraditionalContent(section)}
            </View>
          </View>
        </View>
      );
    }

    // DEFAULT EXPANDABLE STYLE
    return (
      <View key={index} className="mb-4">
        <TouchableOpacity 
          onPress={() => toggleSection(index)}
          className="bg-white rounded-2xl shadow-sm border-2 border-gray-200"
          activeOpacity={0.7}
        >
          <View className="p-4 flex-row items-center justify-between">
            <View className="flex-row items-center flex-1">
              <View className="bg-indigo-100 rounded-xl p-2 mr-3">
                <Ionicons name="document-text" size={22} color="#6366f1" />
              </View>
              <Text className="text-gray-900 text-base font-bold flex-1">{sectionTitle}</Text>
            </View>
            <View className="bg-gray-100 rounded-full p-2">
              <Ionicons 
                name={expandedSections[index] ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="#6b7280" 
              />
            </View>
          </View>
          
          {expandedSections[index] && (
            <View className="px-4 pb-4 border-t-2 border-gray-200 pt-4">
              {renderTraditionalContent(section)}
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  // ============================================
  // MAIN RENDER
  // ============================================

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 pt-4">
        <View className="px-5">
          <NavBar />
        </View>
        
        {/* Header */}
        {isInteractiveFormat() ? (
          <View className="bg-purple-600 px-5 pt-6 pb-8 shadow-xl">
            <View className="bg-purple-700 rounded-2xl p-4">
              <Text className="text-white text-3xl font-bold mb-2">
                {title || data.topic || 'Learning'}
              </Text>
              {data.tagline && (
                <Text className="text-purple-100 text-base mt-2">{data.tagline}</Text>
              )}
            </View>
          </View>
        ) : (
          <View className="bg-indigo-600 px-5 pt-6 pb-8 shadow-xl">
            <View className="bg-indigo-700 rounded-2xl p-4">
              <Text className="text-white text-3xl font-bold mb-2">
                {title || data.topic || 'Learning'}
              </Text>
              {data.description && (
                <Text className="text-indigo-100 text-base leading-6 mt-2">{data.description}</Text>
              )}
            </View>
          </View>
        )}

        <ScrollView 
          className="flex-1" 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 20 }}
        >
          {isInteractiveFormat() ? (
            // INTERACTIVE LEARNING
            <>
              {renderWelcome()}
              {renderQuickStart()}
              {renderCoreIdea()}
              {renderLearningPath()}
              
              {/* Master Class */}
              {data.masterClass && (
                <View className="mb-6">
                  <View className="bg-indigo-600 rounded-3xl p-6 shadow-2xl">
                    <View className="bg-indigo-700 rounded-2xl p-4 mb-4">
                      <Text className="text-white text-2xl font-bold">{data.masterClass.title}</Text>
                    </View>
                    {data.masterClass.tricks?.map((trick, idx) => (
                      <View key={idx} className="bg-indigo-700 rounded-xl p-4 mb-3 border-2 border-indigo-500">
                        <Text className="text-white font-bold mb-2">{trick.trick}</Text>
                        <Text className="text-indigo-100 text-sm mb-2">{trick.method}</Text>
                        {trick.why && (
                          <Text className="text-indigo-200 text-xs italic">{trick.why}</Text>
                        )}
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {/* Common Traps */}
              {data.commonTraps && (
                <View className="mb-6">
                  <View className="bg-red-500 rounded-3xl p-6 shadow-2xl">
                    <View className="bg-red-600 rounded-2xl p-4 mb-4">
                      <Text className="text-white text-2xl font-bold">{data.commonTraps.title}</Text>
                    </View>
                    {data.commonTraps.traps?.map((trap, idx) => (
                      <View key={idx} className="bg-red-600 rounded-xl p-4 mb-3 border-2 border-red-400">
                        <Text className="text-white font-bold mb-2">{trap.trap}</Text>
                        <View className="bg-red-700 rounded-lg p-2 mb-2">
                          <Text className="text-red-100 text-sm">❌ {trap.wrong}</Text>
                        </View>
                        <View className="bg-green-600 rounded-lg p-2 mb-2">
                          <Text className="text-white text-sm">✅ {trap.right}</Text>
                        </View>
                        {trap.remember && (
                          <Text className="text-red-100 text-xs italic">💡 {trap.remember}</Text>
                        )}
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {/* Practice Challenge */}
              {data.practiceChallenge && (
                <View className="mb-6">
                  <View className="bg-orange-500 rounded-3xl p-6 shadow-2xl">
                    <View className="bg-orange-600 rounded-2xl p-4 mb-4">
                      <Text className="text-white text-2xl font-bold">{data.practiceChallenge.title}</Text>
                      <Text className="text-orange-100 text-sm mt-2">{data.practiceChallenge.instruction}</Text>
                    </View>
                    {/* Render practice questions */}
                  </View>
                </View>
              )}
              
              {/* Motivational Close */}
              {data.motivationalClose && (
                <View className="mb-6">
                  <View className="bg-green-500 rounded-3xl p-6 shadow-2xl">
                    <View className="bg-green-600 rounded-2xl p-4 mb-4">
                      <Text className="text-white text-2xl font-bold mb-3">{data.motivationalClose.message}</Text>
                    </View>
                    <View className="bg-green-600 rounded-xl p-4 mb-3 border-2 border-green-400">
                      <Text className="text-white text-lg italic mb-2">"{data.motivationalClose.quote}"</Text>
                    </View>
                    <View className="bg-white rounded-xl p-4">
                      <Text className="text-gray-700 leading-7">{data.motivationalClose.finalWords}</Text>
                    </View>
                  </View>
                </View>
              )}
            </>
          ) : (
            // TRADITIONAL LEARNING
            <>
              {data.sections?.map((section, index) => 
                renderTraditionalSection(section, index)
              )}
              
              {/* Quick Reference */}
              {data.quickReference && (
                <View className="mb-6">
                  <View className="bg-blue-600 rounded-3xl p-6 shadow-2xl">
                    <View className="bg-blue-700 rounded-2xl p-4 mb-4">
                      <View className="flex-row items-center">
                        <View className="bg-blue-800 rounded-xl p-3 mr-3">
                          <Ionicons name="bookmark" size={28} color="white" />
                        </View>
                        <Text className="text-white text-2xl font-bold">Quick Reference</Text>
                      </View>
                    </View>
                    
                    {Object.keys(data.quickReference).map((key, idx) => {
                      const value = data.quickReference[key];
                      
                      return (
                        <View key={idx} className="mb-4">
                          <View className="bg-blue-500 rounded-lg px-3 py-2 mb-3">
                            <Text className="text-white font-bold text-lg capitalize">
                              {key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')}
                            </Text>
                          </View>
                          <View className="bg-blue-700 rounded-xl p-4 border-2 border-blue-500">
                            {Array.isArray(value) ? (
                              value.map((item, i) => (
                                <View key={i} className="flex-row items-start mb-2 last:mb-0">
                                  <View className="bg-blue-400 rounded-full w-2 h-2 mt-2 mr-3" />
                                  <Text className="text-white flex-1 text-sm leading-6">{item}</Text>
                                </View>
                              ))
                            ) : (
                              <Text className="text-white text-sm leading-6">{value}</Text>
                            )}
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </View>
              )}
            </>
          )}

          <View className="h-8" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}