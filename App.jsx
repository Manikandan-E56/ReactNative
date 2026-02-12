import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Auth/Login';
import SignUp from './Auth/SignUp';

import Home from './Pages/Home';
import Content from './Pages/Learning/Content';
import Discover from './Pages/Learning/Discover';
import TabNavigator from './Pages/TabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f3f4f6" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Content" component={Content} />
          <Stack.Screen name="Discover" component={Discover} />

          <Stack.Screen name="Tabs" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
