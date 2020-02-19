
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Router from './app/route'
import TestScreen from './app/screen/test';



  export default class App extends Component{
  render() {
    return (
     <Router/>
    // <TestScreen/>
    );
  }
}



