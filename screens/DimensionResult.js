import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import globalStyle from '../utils/Style';

export default DimensionResult = ({route}) => {
  const lengths = route.params['df']['Length'];
  const breadths = route.params['df']['Breadth'];
  const perimeters = route.params['df']['Perimeter'];
  const areas = route.params['df']['Area'];
  let tableData = [];

  for (let i = 0; i < lengths.length; i++) {
    let rowData = [i + 1, lengths[i], breadths[i], perimeters[i], areas[i]];
    tableData.push(rowData);
  }

  const avg_length = route.params['average_length'];
  const avg_breadth = route.params['average_breadth'];
  const avg_perimeter = route.params['average_perimeter'];
  const avg_area = route.params['average_area'];
  tableData.push(['Average', avg_length, avg_breadth, avg_perimeter, avg_area]);

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
