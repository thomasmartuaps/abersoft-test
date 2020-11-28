import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    // padding: 24
  },
  gradientBg: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    padding: 24,
  },
  buttonLandingPage: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 287, 
    height: 33,
    borderRadius: 25.5,
    marginTop: 22,
    marginBottom: 22,
  },
  buttonText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16.2587,
    fontFamily: 'Roboto, sans-serif', 
  }
}) 

export default function Home({ navigation }: { navigation: any}) {

  const goToRegister = (event: GestureResponderEvent) => {
    navigation.navigate("Login")
  };

  const goToLogin = (event: GestureResponderEvent) => {
    navigation.navigate("Login")
  };
  
  return(
    <View style={styles.background}>
      <LinearGradient
        colors={['#3549FB', '#4ED2DA']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.1, y: 1.0 }}
        style={styles.gradientBg}
        > 
          <View style={{marginBottom: 123}}>
            <TouchableOpacity
              onPress={(e) => goToRegister(e)}
              style={styles.buttonLandingPage}
            >
              <Text style={styles.buttonText}>Register Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(e) => goToLogin(e)}
              style={styles.buttonLandingPage}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
      </LinearGradient>
    </View>
  )
}