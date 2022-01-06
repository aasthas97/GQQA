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
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Table style={{marginTop: 20}}>
        <Row
          data={['Grain', 'Length', 'Breadth', 'Perimeter', 'Area']}
          flexArr={[1.5, 2, 2, 2, 2]}
          textStyle={{
            textAlign: 'center',
            padding: 5,
            paddingBottom: 10,
            color: 'black',
          }}
        />
        <Rows
          data={tableData}
          flexArr={[1.5, 2, 2, 2, 2]}
          style={styles.row}
          textStyle={styles.text}
        />
      </Table>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {height: 28},
  text: {textAlign: 'center'},
});
