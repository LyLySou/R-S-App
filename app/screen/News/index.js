import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container}> Real Estate News </Text>
      </View>
    );
  }
}
//define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 32,
    
    justifyContent: "flex-start",
    alignItems: "baseline",
    backgroundColor: "white"
  }
});
