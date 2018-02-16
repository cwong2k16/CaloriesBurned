import React from 'react';
import { StyleSheet, Text, TextInput, Picker, View, Button } from 'react-native';
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
        <BottomView/>
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
        <Picker>
          <Picker.Item label="Biking" value="8" />
          <Picker.Item label="Boxing" value="10" />
        </Picker>
      </View>
    );
  }
}

class BottomView extends React.Component{
  render(){
    return(
      <View>
        <Button title = "Add">
        </Button>
        <Button title = "Calculate" color = "#F44336">
        </Button>
      </View>
    );
  }
}

/* Useful for regenerating similar TextInput components but with different purposes */
class DataComponent extends React.Component{
  render(){
    return(
      <View style = {styles.textSection}>
        <Text>
          {this.props.data} ({this.props.unit}):
        </Text>
        <TextInput
          placeholder = {this.props.data}
          keyboardType = "numeric"
        />
      </View>
    );
  }
}