import React, {useState, useCallback} from 'react';
import {View, Text, RefreshControl, ScrollView} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button, HelperText, TextInput} from 'react-native-paper';

const Dimension = ({navigation}) => {
  const [dpi, setDpi] = useState(72);
  const [image, setImage] = useState();
  const [isLoading, setLoading] = useState(false);
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
      onRefresh();
      navigation.navigate('DimensionResult', json);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{backgroundColor: 'white'}}>
      <Text
        style={{
          marginTop: '20%',
          marginLeft: '10%',
          color: 'black',
          fontWeight: '500',
          fontSize: 35,
        }}>
        Dimension Analysis
      </Text>
      <View style={{marginTop: '10%', marginHorizontal: '10%'}}>
        <TextInput
          mode="flat"
          label="DPI (required)"
          keyboardType="numeric"
          activeUnderlineColor="black"
          onChangeText={value => setDpi(value)}
          style={{
            marginVertical: 10,
            paddingLeft: 10,
            fontSize: 15,
            backgroundColor: '#eae9e9',
          }}
        />
        <Text
          style={{
            marginTop: '15%',
            fontSize: 22,
            fontWeight: '500',
            color: 'black',
          }}>
          Image
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '7%',
            height: 70,
          }}>
          <Button
            icon="camera"
            mode="contained"
            color="#eae9e9"
            accessibilityLabel="Take photo from camera"
            style={{paddingVertical: 8, justifyContent: 'center'}}
            labelStyle={{fontSize: 15}}
            onPress={takePhotoFromCamera}>
            Camera
          </Button>
          <Button
            icon="google-photos"
            mode="contained"
            color="#eae9e9"
            accessibilityLabel="Choose photo from gallery"
            style={{paddingVertical: 8, justifyContent: 'center'}}
            labelStyle={{fontSize: 15}}
            onPress={chooseFromGallery}>
            Gallery
          </Button>
        </View>
        <Button
          icon="arrow-right-circle-outline"
          loading={isLoading == true ? true : false}
          labelStyle={{fontSize: 50, color: 'black'}}
          style={{marginTop: '30%', marginLeft: '80%'}}
          onPress={checkForm}
        />
      </View>
    </ScrollView>
  );
};

export default Dimension;
