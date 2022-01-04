import React from 'react';
import {Text, Pressable} from 'react-native';
import GlobalStyle from '../utils/Style';

const CustomButton = ({
  onPress,
  displayText,
  buttonWidth,
  buttonHeight,
  bgColor,
  margin,
  textColor,
}) => {
  return (
    <Pressable
      style={[
        GlobalStyle.btn,
        {
          width: buttonWidth,
          height: buttonHeight,
          backgroundColor: bgColor,
          marginVertical: margin,
        },
      ]}
      onPress={onPress}>
      <Text style={[GlobalStyle.btnText, {color: textColor}]}>
        {displayText}
      </Text>
    </Pressable>
  );
};

CustomButton.defaultProps = {
  bgColor: '#D4CBB3',
  margin: 14,
  textColor: '#2F2F2F',
};

export default CustomButton;
