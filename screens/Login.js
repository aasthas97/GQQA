import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import globalStyle from '../utils/Style';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  return (
    <ScrollView style={globalStyle.container}>
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
          marginTop: '10%',
          marginLeft: '10%',
          marginRight: '10%',
        }}>
        <TextInput
          placeholder="Username"
          onChangeText={value => setUsername(value)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
          style={styles.textInput}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          login(username, password);
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
  textInput: {
    borderWidth: 4,
    borderColor: '#eae9e9',
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 10,
    fontSize: 15,
  },
  button: {
    marginTop: '15%',
    marginLeft: '50%',
    marginRight: '10%',
    backgroundColor: '#eae9e9',
    borderRadius: 10,
    paddingVertical: 10,
  },
});
export default LoginScreen;
