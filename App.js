import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {

  signupPressed = ()=>{
    Alert.alert("Go to Sign Up page!")
  }

  loginPressed = ()=> {
    Alert.alert("Go to Login page")
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.background}
      >
        <View>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          <Text style={styles.text}>You aim high. We take your vision higher. Digitally.</Text>
          <TouchableOpacity 
            onPress={this.signupPressed}
          >
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.loginPressed}
          >
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
      width: 280,
      height: 280,
      marginLeft: '15%',
      marginTop: '10%'
    },
    text: {
      color: 'white',
      marginTop: '-25%',
      textAlign: 'center',
    },
    signup: {
      backgroundColor: 'white',
      color: '#2a014c',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  20,
      marginTop: '80%'
    },
    login: {
      backgroundColor: '#e71488',
      color: 'white',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  20,
      marginTop: '3%'
    }
});
