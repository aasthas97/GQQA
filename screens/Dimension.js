import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import GlobalStyle from '../utils/Style';

const Dimension = ({navigation}) => {
  const [dpi, setDpi] = useState(72);
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  function chooseFromGallery() {
    launchImageLibrary({noData: true}, response => {
      if (response) {
        setImage(response);
      }
    });
  }

  function takePhotoFromCamera() {
    launchCamera({noData: true}, response => {
      if (response) {
        setImage(response);
      }
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setLoading(false);
    }, 1000);
  });

  function checkForm() {
    if (typeof image !== 'undefined') {
      submitForm();
    } else if (typeof image === 'undefined') {
      alert('Please select an image');
    }
  }

  const submitForm = async () => {
    setLoading(true);
    const data = new FormData();
    data.append('image', {
      name: image['assets'][0]['fileName'],
      type: image['assets'][0]['type'],
      uri:
        Platform.OS === 'ios'
          ? image['assets'][0]['uri'].replace('file://', '')
          : image['assets'][0]['uri'],
    });

    data.append('dpi', dpi);

    const requestOptions = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
      }),
      body: data,
    };

    try {
      const response = await fetch(
        'http://10.0.2.2:8000/dimension/',
        requestOptions,
      );
      const json = await response.json();
      alert(json);
      onRefresh();
      //   navigation.navigate('Result', json);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Header
          signedIn={true}
          logOutFunc={() => {
            navigation.navigate('SignIn');
          }}
        />
        <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            color: '#2F2F2F',
            fontFamily: 'monospace',
            textAlign: 'center',
          }}>
          DIMENSION ANALYSIS
        </Text>
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <Text style={styles.bodyText}>DPI*</Text>

          <TextInput
            style={GlobalStyle.input}
            placeholder="DPI"
            keyboardType="numeric"
            onChangeText={value => setDpi(value)}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: '20%',
            alignItems: 'center',
            marginTop: 16,
            marginBottom: 8,
          }}>
          <Text style={styles.bodyText}>Image*</Text>
          <CustomButton
            onPress={chooseFromGallery}
            displayText={'CHOOSE FROM GALLERY'}
            buttonWidth="70%"
            buttonHeight="28%"
            margin={9}
          />

          <CustomButton
            onPress={takePhotoFromCamera}
            displayText={'UPLOAD FROM CAMERA'}
            buttonWidth="70%"
            buttonHeight="28%"
            margin={9}
          />
        </View>

        <View style={{alignItems: 'center', marginVertical: 15}}>
          {loading === false ? (
            <CustomButton
              onPress={checkForm}
              displayText={'SUBMIT'}
              buttonWidth="60%"
              buttonHeight="25%"
            />
          ) : (
            <ActivityIndicator size={'large'} />
          )}
        </View>
        <View style={{marginTop: 8}}>
          <Text style={GlobalStyle.headingText}></Text>
        </View>
        <View style={{marginTop: 8}}>
          <Text style={GlobalStyle.headingText}></Text>
        </View>
        <View style={{marginTop: 8}}>
          <Text style={GlobalStyle.headingText}></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '90%',
    flexDirection: 'column',
    alignItems: 'center',
  },

  bodyText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default Dimension;
