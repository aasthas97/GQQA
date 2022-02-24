# GQQA App

Frontend for the Grain Quality and Quantity Analyzer android app built for Osaw Industrial Products Pvt. Ltd. The app allows users to take pictures of rice grains and perform dimensional analysis and quality checks on the grains.\
Tested only on Android so far, but can be customized for iOS easily. 

**Note:** This is only the front-end of the app. The backend is written in Django and is in a separate repo. The frontend makes POST request to the REST APIs for analysis.

## Requirements
1. Node JS >= 12
2. React Native 0.66.3
3. Java SE Development Kit (JDK) >= 11
4. Firebase >= 9.6.2
5. Android Studio
6. [React Native Image Picker](https://github.com/react-native-image-picker/react-native-image-picker)
7. [React Native Paper](https://callstack.github.io/react-native-paper/)

(For complete list of packages and utilities, see ``package.json```)

## Issues and To-Do
1. DPI Calibration
2. Add option to download analysis results as PDF

# Installation
For installation and setup instructions, see the [React Native Setup Guide](https://reactnative.dev/docs/environment-setup). \
After setup, clone this repository and run the app on the Android emulator.

## Running the application
1. ```npx react-native start```
2. ```npx react-native run-android```

## Generate Debug APK file
To generate a debug APK file (i.e. an APK for testing purposes, **not meant for distribution to clients**):
1. Go to the root directory and run the following command: ```react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res```
2. ```cd android```
3. ```./gradlew assembleDebug```

Once the debug assembly is complete, the APK file should be available in the ```app-frontend/android/app/build/outputs/apk/debug/``` directory as ```app-debug.apk```

# License
The software is the property of Osaw Industrial Products Pvt. Ltd. Distribution to third parties without the express consent of the company is illegal.

# Author(s)
1. Aastha Sharma
