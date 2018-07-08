/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Message APP!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
