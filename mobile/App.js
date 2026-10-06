import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import AskQuestionScreen from './src/screens/AskQuestionScreen';
import QuestionDetailScreen from './src/screens/QuestionDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'LocalHelp' }} />
          <Stack.Screen name="AskQuestion" component={AskQuestionScreen} options={{ title: 'Ask the Community' }} />
          <Stack.Screen name="QuestionDetail" component={QuestionDetailScreen} options={{ title: 'Question' }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
