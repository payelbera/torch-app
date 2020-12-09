import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, PermissionsAndroid, Text, Alert, StyleSheet, View } from 'react-native';
import Torch from 'react-native-torch';

export async function request_camera_runtime_permission() {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        'title': 'ReactNativeCode Camera Permission',
        'message': 'ReactNativeCode App needs access to your Camera.'
      }
    )

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert("Camera Permission Granted.");
    }
    else {
      Alert.alert("Camera Permission Not Granted");
    }
  } catch (err) {
    console.warn(err)
  }
}


export default class App extends Component {

  async componentDidMount() {
    await request_camera_runtime_permission()
  }

  turnONTorch() {
    Torch.switchState(true); // Turn ON the Torch.
  }

  turnOFFTorch() {
    Torch.switchState(false); // Turn OFF the Torch.
  }

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity onPress={this.turnONTorch.bind(this)} activeOpacity={0.6} style={styles.button} >
          <Text style={styles.TextStyle}> TURN ON TORCH </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.turnOFFTorch.bind(this)} activeOpacity={0.6} style={styles.button} >
          <Text style={styles.TextStyle}> TURN OFF TORCH </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      margin: 20
    },
    button: {
      width: '100%',
      paddingTop: 12,
      paddingBottom: 12,
      backgroundColor: '#2196f3',
      borderRadius: 7,
      marginTop: 10
    },
    TextStyle: {
      color: '#fff',
      textAlign: 'center',
    }
  });