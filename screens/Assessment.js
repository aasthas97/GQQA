import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import GlobalStyle from '../utils/Style';

const Assessment = ({navigation}) => {
  const [dpi, setDpi] = useState();
  const [cluster, setCluster] = useState(0);
  const [weight, setWeight] = useState(-1);
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  function chooseFromGallery() {
    launchImageLibrary({noData: true}, response => {
      if (response) {
        // console.log(response);
        setImage(response);
      }
    });
  }

  function takePhotoFromCamera() {
    launchCamera({noData: true}, response => {
      if (response) {
        // console.log(response);
        setImage(response);
      }
    });
  }

  function logOut() {
    navigation.navigate('SignIn');
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setLoading(false);
      console.log(dpi);
    }, 1000);
  });

  function checkForm() {
    // console.log('check form', loading);
    if (typeof image !== 'undefined' && typeof dpi !== 'undefined') {
      submitForm();
    } else if (typeof image === 'undefined') {
      alert('Please select an image');
    } else if (typeof dpi === 'undefined') {
      alert('DPI cannot be empty');
    }
  }

  const submitForm = async () => {
    setLoading(true);
    // console.log('submit form', loading);
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
    data.append('weight', weight);
    data.append('cluster', cluster ? 1 : 0);

    const requestOptions = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
      }),
      body: data,
    };

    try {
      const response = await fetch('http://10.0.2.2:8000/', requestOptions);
      const json = await response.json();
      // console.log(json);
      navigation.navigate('Result', json);
    } catch (error) {
      alert(error);
    }
  };

  return (
    // <View style={GlobalStyle.container}>
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Header signedIn={true} logOutFunc={logOut} />

        <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            marginBottom: 5,
            color: '#2F2F2F',
            fontFamily: 'monospace',
            textAlign: 'center',
          }}>
          ASSESSMENT
        </Text>
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <Text style={styles.bodyText}>DPI*</Text>
          <TextInput
            style={GlobalStyle.input}
            placeholder="DPI"
            keyboardType="numeric"
            onChangeText={value => setDpi(value)}
          />
          <View
            style={{
              width: '100%',
              height: '20%',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Text style={styles.bodyText}>Image*</Text>
            <CustomButton
              onPress={chooseFromGallery}
              displayText={'CHOOSE FROM GALLERY'}
              buttonWidth="60%"
              buttonHeight="65%"
              margin={7}
            />

            <CustomButton
              onPress={takePhotoFromCamera}
              displayText={'UPLOAD FROM CAMERA'}
              buttonWidth="60%"
              buttonHeight="65%"
              margin={7}
            />
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 16}}>
          <Text style={styles.bodyText}>Detect clusters?</Text>
          <CheckBox
            disabled={false}
            value={cluster}
            onValueChange={val => setCluster(val)}
            style={{textAlign: 'center'}}
          />
        </View>

        <View style={{alignItems: 'center', marginTop: 16}}>
          <Text style={styles.bodyText}>Weight</Text>
          <TextInput
            style={GlobalStyle.input}
            placeholder="Sample weight (-1 if unknown)"
            keyboardType="decimal-pad"
            onChangeText={value => setWeight(value)}
          />
        </View>

        <View style={{alignItems: 'center', marginTop: 16}}>
          {/* <CustomButton
            // onPress={submitForm}
            onPress={checkForm}
            displayText={'SUBMIT'}
            buttonWidth="40%"
            buttonHeight="25%"
          /> */}
          {loading === false ? (
            <CustomButton
              // onPress={submitForm}
              onPress={checkForm}
              displayText={'SUBMIT'}
              buttonWidth="40%"
              buttonHeight="25%"
            />
          ) : (
            <ActivityIndicator size={'large'} />
          )}
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

export default Assessment;
