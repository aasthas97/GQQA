import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

export default DimensionResult = ({route}) => {
  const lengths = route.params['Length'];
  const breadths = route.params['Breadth'];
  const areas = route.params['Area'];
  const perimeters = route.params['Perimeter'];
  let tableData = [];

  for (let i = 1; i < lengths.length; i++) {
    let rowData = [i, lengths[i], breadths[i], areas[i], perimeters[i]];
    tableData.push(rowData);
  }

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Table style={{marginTop: '20%'}}>
        <Row
          data={['Grain', 'Length', 'Breadth', 'Perimeter', 'Area']}
          flexArr={[1.5, 2, 2, 2, 2]}
          textStyle={{
            textAlign: 'center',
            padding: 5,
            paddingBottom: 10,
            color: 'black',
            fontWeight: '600',
          }}
        />
        {tableData.map((rowData, index) => (
          <Row
            key={index}
            data={rowData}
            flexArr={[1.5, 2, 2, 2, 2]}
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
