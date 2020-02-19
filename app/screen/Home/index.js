import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

//import Card from '../../components/card'
import styles from "./../../styles";
import moment from "moment";
import MatCard from "../../components/matCard";
import { cardData, data } from "../../dummy/card";

export default class HomeScreen extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      now: moment().format("MMMM Do YYYY, h:mm:ss a"),
      userName: "",
      password: "",
      hasErrorName: false,
      hasErrorPassword: false
    };
  }

  _onProfile = () => {
    this.props.navigation.navigate("Profile");
  };

  onLogin = () => {
    const { userName, password } = this.state;
    if (!userName) {
      this.setState({ hasErrorName: true });
    }
    if (!password) {
      this.setState({ hasErrorPassword: true });
    }
    if (!userName || !password) {
      alert("Username and password are invalid!");
      return;
    }
  };

  render() {
    const { userName, password, hasErrorName, hasErrorPassword } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.body}>
        
          <View style={styles.rows}>
        
            <View style={styles.flx1}>
              <Text style={[styles.h1]}>R&S Estate</Text>
              
              <Text style={styles.helBlock}>{this.state.now}</Text>
            </View>
            <Icon name="home" style={[styles.h2, styles.avatar]} />
            
          </View>

          <View style={styles.formGroup}>
            <Text>UserName</Text>
            <TextInput
              value={userName}
              onChangeText={userName => this.setState({ userName: userName })}
              style={[styles.input, hasErrorName ? styles.hasError : ""]}
            />

            <Text>Password</Text>
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password: password })}
              style={[styles.input, hasErrorPassword ? styles.hasError : ""]}
            />
            <TouchableOpacity onPress={this.onLogin}>
              <Text>Submit</Text>
              
            </TouchableOpacity>
          </View>

          <MatCard data={cardData} />
          {data.map(m => {
            console.log(m)
            return <MatCard data={m} />;
          })}
          {/* <View style={[styles.rows, styles.m24, styles.listBorder]}>
            <Icon name="transfer-within-a-station" style={styles.iconList} />
            <Text style={[styles.flx1]}>Station</Text>
            <Icon name="keyboard-tab" style={styles.iconArrow} />
          </View>

          <View style={[styles.rows, styles.m24, styles.listBorder]}>
            <Icon name="touch-app" style={styles.iconList} />
            <Text style={[styles.flx1]}>Apps </Text>
            <Icon name="keyboard-tab" style={styles.iconArrow} />
          </View> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
