import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserHome from './screens/UserHome';
import LoginScreen from './screens/Login';
import ResultScreen from './screens/Result';
import Assessment from './screens/Assessment';
import Dimension from './screens/Dimension';

const AuthStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="SignIn"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Home"
          component={UserHome}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Dimension"
          component={Dimension}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Assessment"
          component={Assessment}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Result"
          component={ResultScreen}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
