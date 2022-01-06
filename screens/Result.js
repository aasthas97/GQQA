import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../components/Header';
import GlobalStyle from '../utils/Style';

const ResultScreen = ({route, navigation}) => {
  const logOut = () => {
    console.log('Signing out..');
    navigation.navigate('SignIn');
  };

  const grainCount = route.params['grain count'];
  const thousandGW =
    route.params['thousand gw'] == -1
      ? route.params['thousand gw']
      : route.params['thousand gw'].toFixed(2);
  const categoryPercent = route.params['labels'];
  // const outputImage = route.params['image'];
  // console.log(route.params);

  return (
    <View style={GlobalStyle.container}>
      <Header signedIn={true} logOutFunc={logOut} />
      <View style={GlobalStyle.body}>
        <Text style={GlobalStyle.headingText}>Assessment Result</Text>
        <View style={{marginTop: 20}}>
          <Text style={styles.bodyText}>Grain Count: {grainCount}</Text>
          <Text style={styles.bodyText}>
            Thousand Grain Weight: {thousandGW}
          </Text>
        </View>
        <View style={styles.resultList}>
          <Text style={styles.bodyHeading}>Classification</Text>
          <FlatList
            data={categoryPercent}
            renderItem={({item}) => (
              <View>
                <Text style={styles.bodyText}>
                  {item.category}: {item.percentage}%
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyHeading: {
    fontSize: 26,
    color: 'black',
    fontWeight: '400',
    fontFamily: 'monospace',
  },
  bodyText: {
    fontSize: 18,
    color: 'black',
    lineHeight: 30,
    fontWeight: '400',
  },

  resultList: {
    marginVertical: 20,
  },
});

export default ResultScreen;
