import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class MoreScreen extends Component {
  onHelp = () => {
    this.props.navigation.navigate("Help");
  };

  render() {
    return (
      <View style={styles.container1}>
        <View style={styles.header}>
        
          <Text style={styles.h9}> R&S Estate </Text>
          <Image
            source={{
              uri:
                "https://st.depositphotos.com/1010751/4288/i/950/depositphotos_42885917-stock-photo-logo-blue-houses-with-waves.jpg"
            }}
            style={{ width: 50, height: 50, borderRadius: 200, margin: -40 }}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.h1}> LOCATION </Text>

          <Image source={{uri: "https://cityofwater.files.wordpress.com/2012/08/screen-shot-2012-08-01-at-11-23-12-am.png"}} style={{width: 399, height: 270}} />
          {/* <Image source={require("./assets/images/5.jpg")} /> */}

          <Text style={styles.h1}> CONTACT US </Text>
          <Text style={styles.h3}>
            {" "}
            Address: #129, Street 509, BKK1, Phnom Penh, Cambodia{" "}
          </Text>
          <Text style={styles.h3}> +855 (17) 898989 </Text>
          {/* <i class="fa fa-facebook-official" aria-hidden="true"></i> */}
          <Text style={styles.h3}> +855 (10) 989898 </Text>
          {/* <Text> MoreScreen </Text> */}
          <Text style={styles.h2}> Find Us on Social Media </Text>
          {/* <a href="#" class="fa fa-facebook"></a> */}
          <TouchableOpacity onPress={this.onHelp}>
            <Text style={styles.help}>Help</Text>
          </TouchableOpacity> 
          <Image source={{uri: "https://www.pngitem.com/pimgs/m/506-5065024_facebook-twitter-and-instagram-hd-png-download.png"}} style={{width: 100, height: 30}} />
        </View>
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
    // backgroundColor: "white"
  },
  help: {
    color: "black"
  },
  h1: {
    fontSize: 27,
    alignItems: "center",
    color: "red"
  },
  h2: {
    fontSize: 27,
    color: "red"
  },
  h3: {
    fontSize: 15
  },
  header: {
    height: 60,
    flexDirection: "row",
    backgroundColor: "#3498DB",
    padding: 20,
    alignItems: "center"
    // justifyContent: "flex-start"
  },
  h9: {
    fontSize: 24,
    padding: 120,
    color: "#ffffff",
    fontWeight: "600"
  },
  container1: {
    flex: 1
    
  }
});
