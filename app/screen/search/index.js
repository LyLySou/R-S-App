import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h1}> R&S Estate </Text>
          <Image
            source={{
              uri:
                "https://st.depositphotos.com/1010751/4288/i/950/depositphotos_42885917-stock-photo-logo-blue-houses-with-waves.jpg"
            }}
            style={{ width: 50, height: 50, borderRadius: 200, margin: -40 }}
          />
          <Image source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdlpng.com%2Fpng%2F4659342&psig=AOvVaw1HfDmCa2M4lYzbhElUAkAF&ust=1582116787947000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjsiMKS2-cCFQAAAAAdAAAAABAe"}} style={{width: 390, height: 30}} />
      
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#94b8b8"
  },
  header: {
    height: 60,
    flexDirection: "row",
    backgroundColor: "#3498DB",
    padding: 20,
    alignItems: "center"
    
  },
  h1: {
    fontSize: 24,
    padding: 120,
    color: "#ffffff",
    fontWeight: "600"
  }
});
