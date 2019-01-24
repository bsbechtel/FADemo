import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome, { Icons, IconTypes } from 'react-native-fontawesome';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text>
          Circle FAR:
          <FontAwesome type={IconTypes.FAR} >{Icons.circle}</FontAwesome>
        </Text>
        <Text>
          Circle FAS:
          <FontAwesome type={IconTypes.FAS}>{Icons.circle}</FontAwesome>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
