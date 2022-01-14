import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import globalStyle from '../utils/Style';

export default DimensionResult = ({route}) => {
  const lengths = route.params['Length'];
  const breadths = route.params['Breadth'];
  const areas = route.params['Area'];
  const perimeters = route.params['Perimeter'];
  let tableData = [];

  for (let i = 0; i < lengths.length; i++) {
    let rowData = [i + 1, lengths[i], breadths[i], areas[i], perimeters[i]];
    tableData.push(rowData);
  }

  return (
    <ScrollView style={globalStyle.container}>
      <Table style={{marginTop: '20%'}}>
        <Row
          data={['Grain', 'Length', 'Breadth', 'Perimeter', 'Area']}
          flexArr={[1.5, 2, 2, 2, 2]}
          textStyle={globalStyle.tableHeader}
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
