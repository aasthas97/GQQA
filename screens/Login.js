import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: '50%', marginLeft: '10%'}}>
        <Text style={{color: 'black', fontWeight: '700', fontSize: 40}}>
          Login
        </Text>
        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
          Please sign in to continue
        </Text>
      </View>
      <View
        style={{
          // borderWidth: 2,
          marginTop: '10%',
          marginLeft: '10%',
          marginRight: '10%',
        }}>
        <TextInput
          placeholder="Username"
          onChangeText={value => setUsername(value)}
          style={{
            borderWidth: 4,
            borderColor: '#eae9e9',
            borderRadius: 10,
            marginVertical: 10,
            paddingLeft: 10,
            fontSize: 15,
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
          style={{
            borderWidth: 4,
            borderColor: '#eae9e9',
            borderRadius: 10,
            marginVertical: 10,
            paddingLeft: 10,
            fontSize: 15,
          }}
        />
      </View>
      <Pressable
        style={{
          marginTop: '15%',
          marginLeft: '50%',
          marginRight: '10%',
          backgroundColor: '#eae9e9',
          borderRadius: 10,
          paddingVertical: 10,
        }}
        onPress={() => {
          loginAuthenticate(username, password);
        }}>
        <Text
          style={{
            color: '#2e2e2e',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
          }}>
          LOGIN
        </Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    margin: 1,
  },
});
export default LoginScreen;
