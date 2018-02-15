import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Style'

export default class App extends React.Component {
  render() {
    return (
      <MainContainer/>
    );
  }
}

class MainContainer extends React.Component {
  render(){
    return (
      /* Generate the container for the React-Native app */
      <View>
        <TopView/>
      </View>
    );
  }
}

class TopView extends React.Component{
  render(){
    return (
      <Text style={styles.topView}>
        Calorie Burned Calculator
      </Text>
    );
  }
}