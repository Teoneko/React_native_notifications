import React from 'react';
import {Button, Text, View} from 'react-native';
import { LocalNotification } from '.';

const HelloWorldApp = () => {
  const press = () => {
    LocalNotification();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
      <Button title="Press" onPress={press}/>
    </View>
  );
};
export default HelloWorldApp;
