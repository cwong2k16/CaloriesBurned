import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Style'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Container/>
      </View>
    );
  }
}

class InnerText extends React.Component {
  render(){
    return (
      <View>
        {/* Generate the container for the React-Native app */}
      </View>
    );
  }
}