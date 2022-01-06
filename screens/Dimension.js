import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import GlobalStyle from '../utils/Style';

const Dimension = ({navigation}) => {
  return (
    <View style={GlobalStyle.container}>
      <Header
        signedIn={true}
        logOutFunc={() => {
          navigation.navigate('SignIn');
        }}
      />
      <Text
        style={{
          fontSize: 30,
          marginTop: 20,
          marginBottom: 5,
          color: '#2F2F2F',
          fontFamily: 'monospace',
          textAlign: 'center',
        }}>
        DIMENSION ANALYSIS
      </Text>
    </View>
  );
};

export default Dimension;
