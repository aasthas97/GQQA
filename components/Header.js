import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import GlobalStyle from '../utils/Style';
import Icon from 'react-native-vector-icons/Feather';

const Header = ({signedIn, logOutFunc, headerHeight}) => {
  return (
    <View style={[GlobalStyle.header, {height: headerHeight}]}>
      <Image
        source={require('../assets/grain-logo.jpg')}
        style={LocalStyle.img}
      />
      {signedIn ? (
        <Icon.Button
          name="log-out"
          backgroundColor="#048BA8"
          size={25}
          onPress={logOutFunc}></Icon.Button>
      ) : null}
    </View>
  );
};

Header.defaultProps = {
  headerHeight: '12%',
};

const LocalStyle = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: '#F4B942',
    fontWeight: 'bold',
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Header;
