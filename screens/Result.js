import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Table, Row} from 'react-native-table-component';

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
    <ScrollView style={{backgroundColor: 'white'}}>
      <Table style={{marginTop: '15%'}}>
        <Row
          data={['Grain Count', 'Thousand Grain Weight']}
          flexArr={[1, 2]}
          textStyle={{
            textAlign: 'center',
            padding: 5,
            paddingBottom: 10,
            color: 'black',
            fontWeight: '600',
          }}
          style={{
            backgroundColor: '#eae9e9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
          }}
        />
        <Row
          data={[grainCount, thousandGW]}
          flexArr={[1, 1.5]}
          textStyle={{
            textAlign: 'center',
            padding: 5,
            paddingBottom: 10,
            color: 'black',
            fontWeight: '600',
          }}
        />
      </Table>
      <Table style={{marginTop: 40}}>
        <Row
          data={['Grain', 'Classification']}
          flexArr={[1.5, 2]}
          textStyle={{
            textAlign: 'center',
            padding: 5,
            paddingBottom: 10,
            color: 'black',
            fontWeight: '600',
          }}
          style={{
            backgroundColor: '#eae9e9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
          }}
        />
        {tableData.map((rowData, index) => (
          <Row
            key={index}
            data={rowData}
            flexArr={[1.5, 2]}
            style={[styles.row, index % 2 && {backgroundColor: '#eae9e9'}]}
            textStyle={styles.text}
          />
        ))}
      </Table>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {height: 32},
  text: {textAlign: 'center', fontWeight: '400', color: 'black'},
});

export default ResultScreen;
