import React, {useState, useCallback} from 'react';
import {View, Text, RefreshControl, ScrollView, Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button, HelperText, TextInput} from 'react-native-paper';
import globalStyle from '../utils/Style';

const Dimension = ({navigation}) => {
  const [dpi, setDpi] = useState(72);
  const [image, setImage] = useState();
  const [isLoading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  function chooseFromGallery() {
    launchImageLibrary({saveToPhotos: false, mediaType: 'photo'}, response => {
      if (response) {
        setImage(response);
      }
    });
  }

  function takePhotoFromCamera() {
    launchCamera({saveToPhotos: true, mediaType: 'photo'}, response => {
      if (response.assets) {
        setImage(response);
      } else {
        Alert.alert(response);
      }
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setLoading(false);
      setImage();
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
        'http://210.212.94.234/dimension/',
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
      style={globalStyle.container}>
      <Text style={globalStyle.formHeading}>Dimension Analysis</Text>
      <View style={{marginTop: '10%', marginHorizontal: '10%'}}>
        <TextInput
          mode="flat"
          label="DPI (required)"
          keyboardType="numeric"
          activeUnderlineColor="black"
          onChangeText={value => setDpi(value)}
          style={globalStyle.formInput}
        />
        <Text style={[{marginTop: '10%'}, globalStyle.formText]}>Image</Text>
        <View style={globalStyle.imageSelectionPanel}>
          <Button
            icon="camera"
            mode="contained"
            color="#eae9e9"
            accessibilityLabel="Take photo from camera"
            style={globalStyle.imageSelectionButton}
            labelStyle={{fontSize: 15}}
            onPress={takePhotoFromCamera}>
            Camera
          </Button>
          <Button
            icon="google-photos"
            mode="contained"
            color="#eae9e9"
            accessibilityLabel="Choose photo from gallery"
            style={globalStyle.imageSelectionButton}
            labelStyle={{fontSize: 15}}
            onPress={chooseFromGallery}>
            Gallery
          </Button>
        </View>
        <HelperText
          type="info"
          visible={image !== undefined}
          padding="none"
          style={{fontSize: 12, color: 'black', marginLeft: 0}}>
          Image selected successfully!
        </HelperText>
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
