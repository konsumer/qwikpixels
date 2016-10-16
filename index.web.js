/**
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native-web'

export default class QuickPixels extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.web.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,
          {'\n'} Cmd+D for dev menu
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('QuickPixels', () => QuickPixels)
AppRegistry.runApplication('QuickPixels', {
  initialProps: {},
  rootTag: document.getElementById('root')
})
