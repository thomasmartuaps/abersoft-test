import React, { useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import styles from '../styles/index';

export default function Home({ navigation }: { navigation: any}) {
  const token = useSelector(state => state.token);

  useEffect(() => {
    if(token) {
      navigation.navigate("Onboard")
    }
  }, [token])

  const goToRegister = (event: GestureResponderEvent) => {
    event.preventDefault();
    navigation.navigate("Register")
  };

  const goToLogin = (event: GestureResponderEvent) => {
    event.preventDefault();
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