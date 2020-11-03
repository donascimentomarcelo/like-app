import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import * as CONST from './src/helpers/Constants';

export default class App extends React.Component {

  render () {
    return (
      <View>
        <Header 
          title={CONST.TITLE}/>
      </View>
    )
  }
}