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
        <DataComponent data = "Duration of Exercise" unit = "minutes" onChangeText={this.handleExercise}/>
        <Picker>
          <Picker.Item label="Badminton" value="7"/>
          <Picker.Item label="Basketball" value="9.3"/>
          <Picker.Item label="Biking" value="8" />
          <Picker.Item label="Boxing" value="10" />
          <Picker.Item label="Calisthenics (Light)" value="2.8"/>
          <Picker.Item label="Calisthenics (Medium)" value="3.8"/>
          <Picker.Item label="Calisthenics (Vigorous)" value="8"/>
          <Picker.Item label="Football" value="8"/>
          <Picker.Item label="Handball" value="12"/>
          <Picker.Item label="Hiking" value="9.5"/>
          <Picker.Item label="Jogging" value="7"/>
          <Picker.Item label="Jump Rope (Light)" value="11"/>
          <Picker.Item label="Jump Rope (Medium)" value="12.3"/>
          <Picker.Item label="Jump Rope (Fast)" value="13"/>
          <Picker.Item label="Lifting Weights (Medium)" value="4"/>
          <Picker.Item label="Lifting Weights (Vigorous)" value="6"/>
          <Picker.Item label="Mountain Climbing" value="8"/>
          <Picker.Item label="Ping Pong" value="4"/>
          <Picker.Item label="Running (10 mph)" value="14.5"/>
          <Picker.Item label="Running (9 mph)" value="12.8"/>
          <Picker.Item label="Running (8 mph)" value="11.8"/>
          <Picker.Item label="Running (7 mph)" value="11"/>
          <Picker.Item label="Running (6 mph)" value="9.8"/>
          <Picker.Item label="Running (5 mph)" value="8.3"/>
          <Picker.Item label="Skateboarding" value="6"/>
          <Picker.Item label="Soccer" value="10"/>
          <Picker.Item label="Stretching" value="2.3"/>
          <Picker.Item label="Swimming (General)" value="5.8"/>
          <Picker.Item label="Running (Vigorous)" value="9.8"/>
          <Picker.Item label="Tennis (Singles)" value="8"/>
          <Picker.Item label="Walking (2 mph)" value="3"/>
          <Picker.Item label="Walking (3 mph)" value="4.5"/>
          <Picker.Item label="Walking (4 mph)" value="6"/>
        </Picker>
        <Button title = "Add" onPress = { ()=> {
          alert(this.state.weight);
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