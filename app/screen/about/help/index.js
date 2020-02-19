import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class HelpScreen extends Component {
  render() {
    return (
      <View>
        <Text> Contact: 010 999988 </Text>
      </View>
    );
  }
}

//define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  }
});
