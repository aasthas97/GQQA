import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';
import GlobalStyle from '../utils/Style';

const UserHome = ({navigation}) => {
  function goToAssessment() {
    navigation.navigate('Assessment');
  }

  function logOut() {
    // console.log('Signing out..');
    navigation.navigate('SignIn');
  }

  return (
    <View style={GlobalStyle.container}>
      <Header signedIn={true} logOutFunc={logOut} />
      <View style={[GlobalStyle.body, {width: '90%', alignItems: 'center'}]}>
        <Text style={GlobalStyle.headingText}>HOME</Text>

        <CustomButton
          onPress={() => {}}
          displayText={'DEMO'}
          buttonWidth="90%"
          buttonHeight="8%"
        />
        <CustomButton
          onPress={goToAssessment}
          displayText={'ASSESSMENT'}
          buttonWidth="90%"
          buttonHeight="8%"
        />
      </View>
      {/* <Footer /> */}
    </View>
  );
};

export default UserHome;
