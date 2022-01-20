import React, {useContext} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Card, Paragraph, Button} from 'react-native-paper';
import globalStyle from '../utils/Style';
import {AuthContext} from '../navigation/AuthProvider';

const UserHome = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <ScrollView style={globalStyle.container}>
      <View
        style={{
          backgroundColor: 'white',
          height: '15%',
          flexDirection: 'row-reverse',
        }}>
        <Button
          color="grey"
          dark={false}
          icon="logout-variant"
          mode="text"
          accessibilityLabel="Sign out"
          style={{
            marginTop: '8%',
            marginRight: '5%',
            backgroundColor: 'white',
          }}
          labelStyle={{fontSize: 30}}
          onPress={() => logout()}
        />
      </View>
      <View style={{marginTop: '8%', marginLeft: '10%'}}>
        <Text style={{color: 'black', fontWeight: '500', fontSize: 35}}>
          Welcome!
        </Text>
      </View>
      <View style={{marginTop: '5%', marginLeft: '8%', marginRight: '8%'}}>
        <Card
          mode="elevated"
          elevation={5}
          accessible={true}
          onPress={() => {
            navigation.navigate('Dimension');
          }}
          style={styles.card}>
          <Card.Title title="Dimension Analysis" titleStyle={{fontSize: 25}} />
          <Card.Content>
            <Paragraph style={styles.cardContent}>
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
          style={styles.card}>
          <Card.Title title="Quality Analysis" titleStyle={{fontSize: 25}} />
          <Card.Content>
            <Paragraph style={styles.cardContent}>
              ML-based, automated grain quality assessment.
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eae9e9',
    marginTop: 40,
    paddingVertical: 15,
  },
  cardContent: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default UserHome;
