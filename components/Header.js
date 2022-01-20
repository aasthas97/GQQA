import React, {useContext} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {AuthContext} from '../navigation/AuthProvider';

const Header = ({}) => {
  const {logout} = useContext(AuthContext);
  return (
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
  );
};
export default Header;
