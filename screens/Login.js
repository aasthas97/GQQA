import React from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
import GlobalStyle from '../utils/Style';

const LoginScreen = ({navigation}) => {
  const loginAuthenticate = (username, password) => {
    if (username == '' || password == '') {
      Alert.alert('Please fill all fields');
    } else if (username == 'indosaw' && password == 'indosaw') {
      navigation.push('Home');
    } else {
      Alert.alert('Incorrect username or password');
    }
  };

  return (
    <View style={GlobalStyle.container}>
      <ScrollView style={{width: '100%'}}>
        <Header signedIn={false} headerHeight={'16%'} />
        <Text style={GlobalStyle.headingText}>
          Grain Quality and Quantity Analyzer
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            textAlign: 'center',
            marginTop: '5%',
          }}>
          Login
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Form onClick={loginAuthenticate} />
        </KeyboardAvoidingView>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

export default LoginScreen;
