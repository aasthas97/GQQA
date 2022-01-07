import React from 'react';
import {View, Text} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

const UserHome = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: '20%', marginLeft: '10%'}}>
        <Text style={{color: 'black', fontWeight: '500', fontSize: 35}}>
          Welcome!
        </Text>
      </View>
      <View style={{marginTop: '10%', marginLeft: '8%', marginRight: '8%'}}>
        <Card
          mode="elevated"
          elevation={5}
          accessible={true}
          onPress={() => {
            navigation.navigate('Dimension');
          }}
          style={{
            backgroundColor: '#eae9e9',
            marginTop: 20,
            paddingVertical: 15,
          }}>
          <Card.Title title="Dimension Analysis" titleStyle={{fontSize: 25}} />
          <Card.Content>
            <Paragraph style={{fontSize: 15, fontWeight: '500'}}>
              Get grain length, breadth, area and perimeter with a single click.
            </Paragraph>
          </Card.Content>
        </Card>

        <Card
          mode="elevated"
          elevation={5}
          accessible={true}
          onPress={() => {
            navigation.navigate('Assessment');
          }}
          style={{
            backgroundColor: '#eae9e9',
            marginTop: 40,
            paddingVertical: 15,
          }}>
          <Card.Title title="Quality Analysis" titleStyle={{fontSize: 25}} />
          <Card.Content>
            <Paragraph style={{fontSize: 15, fontWeight: '500'}}>
              ML-based, automated grain quality assessment.
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default UserHome;
