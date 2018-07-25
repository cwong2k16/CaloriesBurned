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
        <CenterView/>
        <BottomView/>
      </ScrollView>
    );
  }
}

class TopView extends React.Component{
  render(){
    return (
      <Text style={styles.topView}>
        FlySense Alert
      </Text>
    );
  }
}

class CenterView extends React.Component{
  arrItems = {"Badminton":"7", "Basketball":"9.3", "Biking":"8", "Boxing":"10", "Calisthenics (Light)":"2.8",
              "Calisthenics (Medium)":"3.8", "Calisthenics (Vigorous)":"8", "Football":"8", "Handball":"12", 
              "Hiking":"9.5", "Jogging":"7", "Jump Rope (Light)":"11", "Jump Rope (Medium)":"12.3",
              "Jump Rope (Fast)":"13", "Lifting Weights (Medium)":"4", "Lifting Weights (Vigorous)":"6",
              "Mountain Climbing":"8", "Ping Pong":"4", "Running (10 mph)":"14.5", "Running (9 mph)":"12.8",
              "Running (8 mph)":"11.8", "Running (7 mph)":"11", "Running (6 mph)":"9.8", "Running (5 mph)":"8.3",
              "Skateboarding":"6", "Soccer":"10", "Stretching":"2.3", "Swimming (General)":"5.8",
              "Swimming (Vigorous)":"9.8", "Tennis (Singles)":"8", "Walking 2 mph":"3", "Walking 3 mph":"4.5", 
              "Walking 4 mph":"6"};
  state = {
    weight: '',
    height: '',
    age: '',
    minutes: '',
    exercise: '',
    value: ''
  };

  handleWeight = (data)=>{
    this.setState({weight: data});
  };
  handleHeight = (data)=>{
    this.setState({height: data});
  };
  handleAge = (data)=>{
    this.setState({age: data});
  };
  handleMinutes = (data)=>{
    this.setState({minutes: data});
  };
  handleExercise = (data)=>{
    this.setState({exercise: data});
  };
  handleValue = (data)=>{
    this.setState({value: data});
  };
  render(){
    return(
      <View>
        <ImageComponent/>
        <DataComponent data = "Weight" unit = "lbs" onChangeText={this.handleWeight}/>
        <DataComponent data = "Height" unit = "inches" onChangeText={this.handleHeight}/>
        <DataComponent data = "Age" unit = "years" onChangeText={this.handleAge}/>
        <DataComponent data = "Duration of Exercise" unit = "minutes" onChangeText={this.handleMinutes}/>
        <Picker   
          selectedValue={this.state.exercise}
          onValueChange={(itemValue, itemIndex) => this.setState({exercise: itemValue, value: itemIndex})}>
          {/*
          <Picker.Item label="Badminton" value="Badminton" data="7"/>
          <Picker.Item label="Basketball" value="Basketball" data="9.3"/>
          <Picker.Item label="Biking" value="Biking" data="8" />
          <Picker.Item label="Boxing" value="Boxing" data="10" />
          <Picker.Item label="Calisthenics (Light)" value="Calisthenics (Light)" data="2.8"/>
          <Picker.Item label="Calisthenics (Medium)" value="Calisthenics (Medium)" data="3.8"/>
          <Picker.Item label="Calisthenics (Vigorous)" value="Calisthenics (Vigorous)" data="8"/>
          <Picker.Item label="Football" value="Football" data="8"/>
          <Picker.Item label="Handball" value="Handball" data="12"/>
          <Picker.Item label="Hiking" value="Hiking" data="9.5"/>
          <Picker.Item label="Jogging" value="Jogging" data="7"/>
          <Picker.Item label="Jump Rope (Light)" value=" Jump Rope (Light)" data="11"/>
          <Picker.Item label="Jump Rope (Medium)" value="JumpRope (Medium)" data="12.3"/>
          <Picker.Item label="Jump Rope (Fast)" value="JumpRope (Fast)" data="13"/>
          <Picker.Item label="Lifting Weights (Medium)" value="Lifting Weights (Medium)" data="4"/>
          <Picker.Item label="Lifting Weights (Vigorous)" value="LiftingWeights (Vigorous)" data="6"/>
          <Picker.Item label="Mountain Climbing" value="Mountain Climbing" data="8"/>
          <Picker.Item label="Ping Pong" value="Ping Pong" data="4"/>
          <Picker.Item label="Running (10 mph)" value="Running 10 mph" data="14.5"/>
          <Picker.Item label="Running (9 mph)" value="Running 9 mph" data="12.8"/>
          <Picker.Item label="Running (8 mph)" value="Running 8 mph" data="11.8"/>
          <Picker.Item label="Running (7 mph)" value="Running 7 mph" data="11"/>
          <Picker.Item label="Running (6 mph)" value="Running 6 mph" data="9.8"/>
          <Picker.Item label="Running (5 mph)" value="Running 5 mph" data="8.3"/>
          <Picker.Item label="Skateboarding" value="Skateboarding" data="6"/>
          <Picker.Item label="Soccer" value="Soccer" data="10"/>
          <Picker.Item label="Stretching" value="Stretching" data="2.3"/>
          <Picker.Item label="Swimming (General)" value="Swimming (General)" data="5.8"/>
          <Picker.Item label="Swimming (Vigorous)" value="Swimming (Vigorous)" data="9.8"/>
          <Picker.Item label="Tennis (Singles)" value="Tennis (Singles)" data="8"/>
          <Picker.Item label="Walking (2 mph)" value="Walking 2 mph" data="3"/>
          <Picker.Item label="Walking (3 mph)" value="Walking 3 mph" data="4.5"/>
          <Picker.Item label="Walking (4 mph)" value="Walking 4 mph" data="6"/>
          */}
         {Object.keys(this.arrItems).map((key) => {
          return (<Picker.Item label={key} value={key} key={key}/>) //if you have a bunch of keys value pair
          })}
         }
        </Picker>
        <Button title = "Add" onPress = { ()=> {
          alert("Weight: " + this.state.weight + "\n" +
                "Height: " + this.state.height + "\n" +
                "Age: " + this.state.age + "\n" +
                "Minutes: " + this.state.minutes + "\n" +
                "Exercise: " + this.state.exercise + "\n" +
                "Value: " + this.state.value);
          }}>
        </Button>
      </View>
    );
  }
}

class BottomView extends React.Component{
  render(){
    return(
      <View style={{alignItems:"center"}}>
        <Text> FlySense Product 2.5 </Text>
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
          onChangeText = {this.props.onChangeText}
        />
      </View>
    );
  }
}

class ImageComponent extends React.Component{
  render(){
    return(
      <View style = {{alignItems:"center"}}>
        <Image source = {require("./dumbbells.png")}>
        </Image>
      </View>
    );
  }
}