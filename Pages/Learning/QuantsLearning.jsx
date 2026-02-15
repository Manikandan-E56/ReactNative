import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import NavBar from 'components/NavBar'

export default function QuantsLearning({ route }) {
  const { title, data } = route.params || {};
  const [expandedSections, setExpandedSections] = useState({});

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

  const getIconAndColor = (title) => {
    const lowerTitle = title?.toLowerCase() || '';
    if (lowerTitle.includes('formula')) return { icon: 'calculator', color: '#8b5cf6' };
    if (lowerTitle.includes('type')) return { icon: 'list', color: '#3b82f6' };
    if (lowerTitle.includes('rule')) return { icon: 'checkmark-circle', color: '#10b981' };
    if (lowerTitle.includes('trick') || lowerTitle.includes('shortcut')) return { icon: 'flash', color: '#f59e0b' };
    if (lowerTitle.includes('pattern') || lowerTitle.includes('cyclic')) return { icon: 'infinite', color: '#ec4899' };
    if (lowerTitle.includes('example')) return { icon: 'bulb', color: '#eab308' };
    if (lowerTitle.includes('practice') || lowerTitle.includes('tip')) return { icon: 'fitness', color: '#06b6d4' };
    if (lowerTitle.includes('mistake') || lowerTitle.includes('avoid')) return { icon: 'alert-circle', color: '#ef4444' };
    if (lowerTitle.includes('strategy')) return { icon: 'trophy', color: '#f97316' };
    if (lowerTitle.includes('reference')) return { icon: 'bookmark', color: '#6366f1' };
    if (lowerTitle.includes('property') || lowerTitle.includes('properties')) return { icon: 'settings', color: '#14b8a6' };
    if (lowerTitle.includes('test')) return { icon: 'flask', color: '#a855f7' };
    if (lowerTitle.includes('series')) return { icon: 'git-branch', color: '#3b82f6' };
    if (lowerTitle.includes('set')) return { icon: 'albums', color: '#8b5cf6' };
    return { icon: 'document-text', color: '#6366f1' };
  };

  // Universal renderer for any nested content
  const renderContent = (content, depth = 0) => {
    if (!content) return null;

    // String
    if (typeof content === 'string') {
      return (
        <Text className={`text-gray-700 ${depth === 0 ? 'text-base' : 'text-sm'} leading-6 mb-2`}>
          {content}
        </Text>
      );
    }

    // Array
    if (Array.isArray(content)) {
      return content.map((item, idx) => (
        <View key={idx} className="mb-2">
          {typeof item === 'string' ? (
            <View className="flex-row items-start">
              <View className="bg-indigo-500 rounded-full w-1.5 h-1.5 mt-2 mr-3" />
              <Text className="text-gray-700 text-sm flex-1 leading-5">{item}</Text>
            </View>
          ) : (
            <View className={depth > 0 ? 'ml-4' : ''}>
              {renderContent(item, depth + 1)}
            </View>
          )}
        </View>
      ));
    }

    // Object
    if (typeof content === 'object') {
      return Object.keys(content).map((key, idx) => {
        const value = content[key];
        
        // Skip metadata keys
        if (['id', 'difficulty'].includes(key)) return null;

        // Handle special keys with custom rendering
        if (key === 'name' || key === 'title') {
          return (
            <Text key={idx} className="text-gray-900 font-bold text-base mb-2">
              {value}
            </Text>
          );
        }

        if (key === 'definition' || key === 'description') {
          return (
            <Text key={idx} className="text-gray-700 text-base leading-6 mb-3">
              {value}
            </Text>
          );
        }

        if (key === 'example') {
          return (
            <View key={idx} className="bg-blue-50 rounded-xl p-4 mb-3 border border-blue-100">
              <View className="flex-row items-center mb-2">
                <View className="bg-blue-500 rounded-lg px-2 py-1">
                  <Text className="text-white text-xs font-bold">EXAMPLE</Text>
                </View>
              </View>
              <Text className="text-gray-700 font-mono text-sm">{value}</Text>
            </View>
          );
        }

        if (key === 'formula') {
          return (
            <View key={idx} className="bg-white rounded-xl p-4 shadow-sm mb-2 border border-purple-100">
              <Text className="text-purple-600 font-mono text-base font-semibold">
                {value}
              </Text>
            </View>
          );
        }

        if (key === 'note') {
          return (
            <Text key={idx} className="text-orange-700 text-sm mt-2 italic">
              💡 {value}
            </Text>
          );
        }

        // Generic key-value rendering
        return (
          <View key={idx} className="mb-3">
            <Text className="text-gray-900 font-semibold text-sm mb-1 capitalize">
              {key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').trim()}
            </Text>
            <View className={depth > 0 ? 'ml-3' : ''}>
              {renderContent(value, depth + 1)}
            </View>
          </View>
        );
      });
    }

    return null;
  };

  // Render individual items (subtopics, formulas, etc.)
  const renderItems = (items, type = 'default') => {
    if (!items || !Array.isArray(items)) return null;

    return items.map((item, idx) => {
      const bgColor = {
        subtopics: 'bg-blue-50 border-blue-200',
        formulas: 'bg-purple-50 border-purple-200',
        rules: 'bg-green-50 border-green-200',
        patterns: 'bg-orange-50 border-orange-200',
        tricks: 'bg-yellow-50 border-yellow-200',
        properties: 'bg-teal-50 border-teal-200',
        examples: 'bg-indigo-50 border-indigo-200',
        tips: 'bg-cyan-50 border-cyan-200',
        mistakes: 'bg-red-50 border-red-200',
        strategies: 'bg-amber-50 border-amber-200',
        series: 'bg-blue-50 border-blue-200',
        tests: 'bg-purple-50 border-purple-200',
        default: 'bg-gray-50 border-gray-200'
      }[type] || 'bg-gray-50 border-gray-200';

      return (
        <View key={idx} className="mb-4">
          <View className={`${bgColor} rounded-2xl p-5 border`}>
            {/* Title/Name */}
            {(item.name || item.title) && (
              <View className="flex-row items-center mb-3">
                <View className="bg-white rounded-xl p-2 mr-3 shadow-sm">
                  <Ionicons name="bookmark" size={18} color="#6366f1" />
                </View>
                <Text className="text-gray-900 text-lg font-bold flex-1">
                  {item.name || item.title}
                </Text>
              </View>
            )}

            {/* Divisor (for rules) */}
            {item.divisor && (
              <View className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl w-12 h-12 items-center justify-center mb-3 shadow-md">
                <Text className="text-white font-bold text-lg">{item.divisor}</Text>
              </View>
            )}

            {/* Base (for patterns) */}
            {item.base !== undefined && (
              <View className="flex-row items-center mb-3">
                <View className="bg-orange-500 rounded-lg px-3 py-1.5 mr-2">
                  <Text className="text-white font-bold">Base: {item.base}</Text>
                </View>
                {item.cyclicity && (
                  <View className="bg-white rounded-lg px-4 py-2 border border-orange-200">
                    <Text className="text-orange-700 font-semibold text-xm">
                      Cycle: {item.cyclicity}
                    </Text>
                  </View>
                )}
              </View>
            )}

            {/* Cycle (for patterns) */}
            {item.cycle && (
              <View className="bg-white rounded-xl p-3 mb-2 shadow-sm">
                <Text className="text-gray-700 font-mono text-xm">
                  {Array.isArray(item.cycle) ? item.cycle.join(' → ') : item.cycle}
                </Text>
              </View>
            )}

            {/* Render all other properties */}
            {renderContent(item)}
          </View>
        </View>
      );
    });
  };

  // Main section renderer
  const renderSection = (section, index) => {
    if (!section) return null;

    const sectionTitle = section.title || section.name || `Section ${index + 1}`;
    const iconData = getIconAndColor(sectionTitle);
    
    // Check if section has expandable content
    const expandableKeys = ['subtopics', 'formulas', 'rules', 'patterns', 'tricks', 'items', 
                           'properties', 'examples', 'tips', 'mistakes', 'strategies', 
                           'series', 'perfectSquareTests', 'perfectCubeTests', 'sets'];
    const hasExpandableContent = expandableKeys.some(key => section[key]);

    // Simple section (no expandable content)
    if (!hasExpandableContent) {
      return (
        <View key={index} className="mb-4">
          <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <View className="flex-row items-center mb-4">
              <View className="rounded-xl p-3 mr-3" style={{ backgroundColor: `${iconData.color}20` }}>
                <Ionicons name={iconData.icon} size={24} color={iconData.color} />
              </View>
              <Text className="text-gray-900 text-xl font-bold flex-1">{sectionTitle}</Text>
            </View>
            
            {section.content && (
              <Text className="text-gray-700 text-base leading-7 mb-3">{section.content}</Text>
            )}
            
            {section.description && (
              <Text className="text-gray-600 text-base leading-6 mb-3">{section.description}</Text>
            )}
            
            {section.importance && (
              <View className="mt-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                <View className="flex-row items-start">
                  <Ionicons name="information-circle" size={20} color="#6366f1" />
                  <Text className="text-indigo-800 text-sm ml-2 flex-1 leading-5">
                    {section.importance}
                  </Text>
                </View>
              </View>
            )}

            {/* Render any other properties */}
            {Object.keys(section).map((key) => {
              if (['id', 'title', 'name', 'content', 'description', 'importance'].includes(key)) {
                return null;
              }
              return (
                <View key={key} className="mt-3">
                  {renderContent({ [key]: section[key] })}
                </View>
              );
            })}
          </View>
        </View>
      );
    }

    // Expandable section
    return (
      <View key={index} className="mb-4">
        <TouchableOpacity 
          onPress={() => toggleSection(index)}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          activeOpacity={0.7}
        >
          <View className="p-5 flex-row items-center justify-between">
            <View className="flex-row items-center flex-1">
              <View className="rounded-xl p-3 mr-3" style={{ backgroundColor: `${iconData.color}20` }}>
                <Ionicons name={iconData.icon} size={24} color={iconData.color} />
              </View>
              <Text className="text-gray-900 text-lg font-bold flex-1">{sectionTitle}</Text>
            </View>
            <View className="bg-gray-100 rounded-full p-2">
              <Ionicons 
                name={expandedSections[index] ? "chevron-up" : "chevron-down"} 
                size={20} 
                color="#6b7280" 
              />
            </View>
          </View>
          
          {expandedSections[index] && (
            <View className="px-5 pb-5 border-t border-gray-100 pt-4">
              {section.description && (
                <Text className="text-gray-600 text-base mb-4 leading-6">
                  {section.description}
                </Text>
              )}
              
              {/* Render specific content types */}
              {section.subtopics && renderItems(section.subtopics, 'subtopics')}
              {section.formulas && section.formulas.map((category, idx) => (
                <View key={idx} className="mb-4">
                  {category.category && (
                    <View className="flex-row items-center mb-3">
                      <View className="h-1 w-8 bg-purple-500 rounded-full mr-2" />
                      <Text className="text-purple-700 font-bold text-base">
                        {category.category}
                      </Text>
                    </View>
                  )}
                  {renderItems(category.items, 'formulas')}
                </View>
              ))}
              {section.rules && renderItems(section.rules, 'rules')}
              {section.patterns && renderItems(section.patterns, 'patterns')}
              {section.tricks && renderItems(section.tricks, 'tricks')}
              {section.items && renderItems(section.items, 'default')}
              {section.properties && renderItems(section.properties, 'properties')}
              {section.examples && renderItems(section.examples, 'examples')}
              {section.tips && renderItems(section.tips, 'tips')}
              {section.mistakes && renderItems(section.mistakes, 'mistakes')}
              {section.strategies && renderItems(section.strategies, 'strategies')}
              {section.series && renderItems(section.series, 'series')}
              {section.perfectSquareTests && renderItems(section.perfectSquareTests, 'tests')}
              {section.perfectCubeTests && renderItems(section.perfectCubeTests, 'tests')}
              {section.sets && renderItems(section.sets, 'default')}
              
              {/* Render howToUse if present */}
              {section.howToUse && (
                <View className="bg-blue-50 p-4 rounded-xl mt-3 border border-blue-100">
                  <Text className="text-sm font-semibold text-blue-800 mb-2">
                    How to Use:
                  </Text>
                  <Text className="text-sm text-blue-700 leading-5">
                    {section.howToUse}
                  </Text>
                </View>
              )}
              
              {/* Render any other unlisted properties */}
              {Object.keys(section).map((key) => {
                const renderedKeys = ['id', 'title', 'name', 'description', 'subtopics', 'formulas', 
                                     'rules', 'patterns', 'tricks', 'items', 'properties', 'examples', 
                                     'tips', 'mistakes', 'strategies', 'series', 'perfectSquareTests', 
                                     'perfectCubeTests', 'sets', 'howToUse'];
                if (renderedKeys.includes(key)) return null;
                
                return (
                  <View key={key} className="mt-3">
                    <Text className="text-gray-900 font-bold text-base mb-2 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').trim()}
                    </Text>
                    {renderContent(section[key])}
                  </View>
                );
              })}
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-1 pt-4">
        <View className="px-5 ">
        <NavBar/>
        </View>
        
      
      <View className="bg-indigo-600 px-5 pt-4 pb-6 shadow-lg">
        <Text className="text-white text-3xl font-bold mb-2">
          {title || data.topic || 'Learning'}
        </Text>
        {data.description && (
          <Text className="text-indigo-100 text-base leading-6 mt-2">
            {data.description}
          </Text>
        )}
        
        {/* Stats */}
        <View className="flex-row mt-4 space-x-3 gap-2">
          <View className="bg-white/20 rounded-xl px-6 py-2 backdrop-blur">
            <Text className="text-white text-xm font-semibold">
              {data.sections?.length || 0} Sections
            </Text>
          </View>
          <View className="bg-white/20 rounded-xl px-6 py-2 backdrop-blur">
            <Text className="text-white text-xm font-semibold">
              Complete Guide
            </Text>
          </View>
        </View>
      </View>

      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 20 }}
      >
        {/* Render all sections */}
        {data.sections && data.sections.map((section, index) => 
          renderSection(section, index)
        )}

        {/* Quick Reference */}
        {data.quickReference && (
          <View className="mb-6">
            <View className="bg-indigo-400 rounded-3xl p-6 shadow-2xl">
              <View className="flex-row items-center mb-4">
                <View className="bg-white/20 rounded-xl p-3 mr-3">
                  <Ionicons name="bookmark" size={24} color="white" />
                </View>
                <Text className="text-white text-2xl font-bold">Quick Reference</Text>
              </View>
              
              {renderContent(data.quickReference)}
            </View>
          </View>
        )}

        {/* Exam Strategy if exists */}
        {data.sections?.find(s => s.title?.toLowerCase().includes('exam')) && null}

        <View className="h-8" />
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}