import React, {useState, useCallback} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button, HelperText, Switch, TextInput} from 'react-native-paper';
import globalStyle from '../utils/Style';

const Assessment = ({navigation}) => {
  const [dpi, setDpi] = useState();
  const [cluster, setCluster] = useState(0);
  const [weight, setWeight] = useState(-1);
  const [image, setImage] = useState();
  const [isLoading, setLoading] = useState(false);
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
    }, 1000);
  });

  function checkForm() {
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
      onRefresh();
      // console.log(json);
      navigation.navigate('Result', json);
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
      <Text style={globalStyle.formHeading}>Quality Analysis</Text>
      <View style={{marginTop: '10%', marginHorizontal: '10%'}}>
        <TextInput
          mode="flat"
          label="DPI (required)"
          keyboardType="numeric"
          activeUnderlineColor="black"
          onChangeText={value => setDpi(value)}
          style={globalStyle.formInput}
        />
        <TextInput
          mode="flat"
          label="Weight"
          placeholder="-1 if unknown"
          keyboardType="numeric"
          activeUnderlineColor="black"
          onChangeText={value => setWeight(value)}
          style={globalStyle.formInput}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '10%',
          }}>
          <Text style={globalStyle.formText}>Detect clusters?</Text>
          <Switch
            value={cluster}
            onValueChange={val => setCluster(val)}
            color="black"
          />
        </View>
        <Text style={[{marginTop: '8%'}, globalStyle.formText]}>Image</Text>
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
      </View>
      <Button
        icon="arrow-right-circle-outline"
        loading={isLoading == true ? true : false}
        labelStyle={{fontSize: 50, color: 'black'}}
        style={{marginTop: '2%', marginLeft: '80%'}}
        onPress={checkForm}
      />
    </ScrollView>
  );
};

export default Assessment;
