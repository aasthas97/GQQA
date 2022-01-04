import React from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import GlobalStyle from '../utils/Style';

const Footer = () => {
  const url = 'mailto:it@indosaw.com';
  return (
    <View style={[GlobalStyle.bgcolor, styles.footer]}>
      <Text style={{color: '#2F2F2F'}} onPress={() => Linking.openURL(url)}>
        For help, contact it@indosaw.com
      </Text>
      <Text style={{color: '#2F2F2F'}}>Last Updated: December 23, 2021</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: '10%',
    paddingTop: 15,
    paddingLeft: 20,
    // marginBottom: 10,
  },
});

export default Footer;
