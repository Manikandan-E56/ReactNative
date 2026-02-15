import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, ActivityIndicator } from 'react-native';
import { useContext } from 'react';

import Login from './Auth/Login';
import SignUp from './Auth/SignUp';

import Home from './Pages/Home';
import Content from './Pages/Learning/Content';
import Discover from './Pages/Learning/Discover';
import TestContent from './Pages/Test/TestContent';
import Level from './Pages/Test/Level';
import TabNavigator from './Pages/TabNavigator';
import Profile from './Pages/Profile';
import Sections from './Pages/Test/Sections';
import Questions from './Pages/Test/Questions';
import Score from './Pages/Test/Score';
import QuantsLearning from './Pages/Learning/QuantsLearning';
import Reasoning from './Pages/Learning/Reasoning';
import { AppContextProvider, AppContext } from './Context/Context';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { User, loading } = useContext(AppContext);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-50">
        <ActivityIndicator size="large" color="#4f46e5" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {User ? (
          // Authenticated Stack
          <>
            <Stack.Screen name="Tabs" component={TabNavigator} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Content" component={Content} />
            <Stack.Screen name="Discover" component={Discover} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="TestContent" component={TestContent} />
            <Stack.Screen name="Level" component={Level} />
            <Stack.Screen name="Sections" component={Sections} />
            <Stack.Screen name="Questions" component={Questions} />
            <Stack.Screen name="Score" component={Score} />
            <Stack.Screen name="QuantsLearning" component={QuantsLearning} />
            <Stack.Screen name="Reasoning" component={Reasoning} />
          </>
        ) : (
          // Guest Stack
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppContextProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#f3f4f6" />
        <AppNavigator />
      </SafeAreaProvider>
    </AppContextProvider>
  );
}
