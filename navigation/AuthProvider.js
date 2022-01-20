import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (username, password) => {
          try {
            await auth().signInWithEmailAndPassword(username, password);
          } catch (e) {
            Alert.alert(e);
          }
        },
        register: async (username, password) => {
          try {
            await auth().createUserWithEmailAndPassword(username, password);
          } catch (e) {
            // console.log(e);
            Alert.alert(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            Alert.alert(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
