import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
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
        <MidView/>
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

class MidView extends React.Component{
  render(){
    return(
      <View>
        <DataComponent data = "Weight" unit = "lbs"/>
        <DataComponent data = "Height" unit = "inches"/>
        <DataComponent data = "Age" unit = "years"/>
        <DataComponent data = "Duration of Exercise" unit = "minutes"/>
      </View>
    );
  }
}

/* Useful for regenerating similar TextInput components but with different purposes */
class DataComponent extends React.Component{
  render(){
    return(
      <View>
        <Text>
          {this.props.data} ({this.props.unit}):
        </Text>
        <TextInput
          placeholder = {this.props.data}
        />
      </View>
    );
  }
}