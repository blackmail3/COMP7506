import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, TextInput, Text} from 'react-native';

export default class Input extends Component {
  state = {
    Num1: '',
    Num2: '',
    Num3: '',
    result: ''
  }
  handleNum1 = (text) => {
    this.setState({ Num1: text })
  }
  handleNum2 = (text) => {
    this.setState({ Num2: text })
  }
  handleNum3 = (text) => {
    this.setState({ Num3: text })
  }
  _onPressButton = () => {
    var num1 = parseInt(this.state.Num1)
    var num2 = parseInt(this.state.Num2)
    var num3 = parseInt(this.state.Num3)
    if(isNaN(num1)||isNaN(num2)||isNaN(num3))
      Alert.alert("Invalid Input!")
    else{
      var res = num1+num2+num3
      this.setState({result:String(num1+" + "+num2+" + "+num3+" = "+res)})
    }
    // Alert.alert(String("Result: " + res))
  }
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.alternativeLayoutTextContainer}>
          <TextInput style={styles.input} placeholder = "num1" keyboardType="numeric" onChangeText={this.handleNum1}
          />
          <TextInput style={styles.input} placeholder = "num2" keyboardType="numeric" onChangeText={this.handleNum2}
          />
          <TextInput style={styles.input} placeholder = "num3" keyboardType="numeric" onChangeText={this.handleNum3}
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="CALCULATE"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TextInput style={styles.input} editable={false} value={this.state.result}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  alternativeLayoutTextContainer: {
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    margin: 20
  },
  input: {
    margin: 15,
    paddingLeft:8,
    height: 40,
    borderColor: '#eeeeee',
    borderWidth: 1
  }
})