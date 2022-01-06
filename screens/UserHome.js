import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import GlobalStyle from '../utils/Style';

const UserHome = ({navigation}) => {
  return (
    <View style={GlobalStyle.container}>
      <Header
        signedIn={true}
        logOutFunc={() => {
          navigation.navigate('SignIn');
        }}
      />
      <View style={[GlobalStyle.body, {width: '90%', alignItems: 'center'}]}>
        <Text style={GlobalStyle.headingText}>HOME</Text>

        <CustomButton
          onPress={() => {
            navigation.navigate('Dimension');
          }}
          displayText={'DIMENSION ANALYSIS'}
          buttonWidth="90%"
          buttonHeight="8%"
        />
        <CustomButton
          onPress={() => {
            navigation.navigate('Assessment');
          }}
          displayText={'QUALITY ANALYSIS'}
          buttonWidth="90%"
          buttonHeight="8%"
        />
      </View>
      {/* <Footer /> */}
    </View>
  );
};

export default UserHome;
