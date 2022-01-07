import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import GlobalStyle from '../utils/Style';

const ResultScreen = ({route}) => {
  const grainCount = route.params['grain count'];
  const thousandGW =
    route.params['thousand gw'] == -1
      ? route.params['thousand gw']
      : route.params['thousand gw'].toFixed(2);
  const categoryPercent = route.params['percent'];
  const classification = route.params['labels'];
  let tableData = [];

  for (let i = 0; i < classification.length; i++) {
    tableData.push([i, classification[i]]);
  }

  return (
    <ScrollView>
      <Text style={GlobalStyle.headingText}>Assessment Result</Text>
      <View style={{marginTop: 20}}>
        <Text style={styles.bodyText}>Grain Count: {grainCount}</Text>
        <Text style={styles.bodyText}>Thousand Grain Weight: {thousandGW}</Text>
      </View>
      {/* <FlatList
        data={categoryPercent}
        renderItem={({item}) => (
          <View>
            <Text style={styles.bodyText}>
              {item.category}: {item.percentage}%
            </Text>
          </View>
        )}
      /> */}
      <Table style={{marginTop: 20}}>
        <Row
          data={['Grain', 'Classification']}
          flexArr={[1.5, 2]}
          textStyle={{
            textAlign: 'center',
            padding: 5,
            paddingBottom: 10,
            color: 'black',
          }}
        />
        <Rows data={tableData} flexArr={[1.5, 2]} style={{height: 28}} />
      </Table>
    </ScrollView>
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
