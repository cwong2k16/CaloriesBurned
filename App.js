import React from 'react';
import { StyleSheet, Image, Text, TextInput, Picker, View, Button, ScrollView } from 'react-native';
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
      <ScrollView>
        <TopView/>
        <MidView/>
        <BottomView/>
      </ScrollView>
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
        <Image height = "33%" width = "33%" source={require('./dumbbells.png')} />
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
        <Button title = "Add" onPress = { ()=> {alert("hey");}}>
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