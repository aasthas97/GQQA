import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import GlobalStyle from '../utils/Style';
import CustomButton from './CustomButton';

const Form = ({onClick}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{marginTop: '6%', alignItems: 'center'}}>
      <Text style={GlobalStyle.bodyText}>Username</Text>
      <TextInput
        style={GlobalStyle.input}
        placeholder="Username"
        onChangeText={value => setUsername(value)}
      />
      <Text style={GlobalStyle.bodyText}>Password</Text>
      <TextInput
        style={GlobalStyle.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />

      <CustomButton
        onPress={() => onClick(username, password)}
        displayText={'LOGIN'}
        buttonWidth="30%"
        buttonHeight="15%"
        bgColor="#048BA8"
        textColor="white"
        margin={14}
      />
    </View>
  );
};

export default Form;
