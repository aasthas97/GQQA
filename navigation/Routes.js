import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserHome from '../screens/UserHome';
import LoginScreen from '../screens/Login';
import Dimension from '../screens/Dimension';
import ResultScreen from '../screens/Result';
import Assessment from '../screens/Assessment';
import DimensionResult from '../screens/DimensionResult';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

const AuthStack = createStackNavigator();

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const {user, setUser} = useContext(AuthContext);

  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
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
        <AuthStack.Screen
          name="DimensionResult"
          component={DimensionResult}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
