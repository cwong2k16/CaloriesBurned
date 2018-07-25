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
    sex: 'Male',
    minutes: '',
    exercise: 'Badminton',
    value: '7'
  };

  arrItems = [7, 9.3, 8, 10, 2.8, 3.8, 8, 8, 12, 9.5, 7, 11, 12.3, 13, 4, 6, 8, 4, 14.5, 12.8, 11.8, 11, 9.8,
              8.3, 6, 10, 2.3, 5.8, 9.8, 8, 3, 4.5, 6];

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

  getCaloriesBurned = (sex, weight, height, age, duration, value) => {
    calories = value * duration;
    // 		double mBMR = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    //    double fBMR = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    if(sex === "Male"){
       BMR = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    }
    else{
       BMR = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
    BMRScale = (BMR)/24;
    multiplier = BMRScale * calories;
    caloriesBurnedAfterFactors = multiplier/60;
    return caloriesBurnedAfterFactors;
  };

  render(){
    return(
      <View style={{padding:5}}>
        <ImageComponent/>
        <Picker selectedValue={this.state.sex} 
                onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue})}>
          <Picker.Item label="Male" value="Male"/>
          <Picker.Item label="Female" value="Female"/>
        </Picker>
        <DataComponent data = "Weight" unit = "lbs" onChangeText={this.handleWeight}/>
        <DataComponent data = "Height" unit = "inches" onChangeText={this.handleHeight}/>
        <DataComponent data = "Age" unit = "years" onChangeText={this.handleAge}/>
        <DataComponent data = "Duration of Exercise" unit = "minutes" onChangeText={this.handleMinutes}/>
        <Picker   
          selectedValue={this.state.exercise}
          onValueChange={(itemValue, itemIndex) => this.setState({exercise: itemValue, value: this.arrItems[itemIndex]})}>
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
        </Picker>
        <View style={{alignItems: "center"}}>
          <Button title = "Calculate" onPress = { ()=> {
            calsBurned = this.getCaloriesBurned(this.state.sex, this.state.weight, this.state.height,
                                                this.state.age, this.state.minutes, this.state.value);
            alert("Weight: " + this.state.weight + "\n" +
                  "Height: " + this.state.height + "\n" +
                  "Age: " + this.state.age + "\n" +
                  "Minutes: " + this.state.minutes + "\n" +
                  "Exercise: " + this.state.exercise + "\n" +
                  "Value: " + this.state.value + "\n" +
                  "Sex: " + this.state.sex + "\n" +
                  "Calories Burned: " + calsBurned.toFixed(0));
            }}>
          </Button>
        </View>
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