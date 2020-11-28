import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '@material-ui/core/Input';

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
    backgroundColor: '#3549FB',
    justifyContent: 'center',
    alignItems: 'center',
    width: 287, 
    height: 33,
    borderRadius: 25.5,
    marginTop: 22,
    marginBottom: 22,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 16.2587,
    fontFamily: 'Roboto, sans-serif', 
  },
  drawer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 400,
    backgroundColor: '#FFF',
    margin: 0,
    padding: 0,
    borderTopLeftRadius: 51,
    borderTopRightRadius: 51,
  }
}) 

export default function Login({ navigation }: { navigation: any}) {

  return(
    <View style={styles.background}>
      <LinearGradient
        colors={['#3549FB', '#4ED2DA']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.1, y: 1.0 }}
        style={styles.gradientBg}
        > 
          <View style={styles.drawer}>
            <View style={{width: 287, marginTop: 44, marginBottom: 22}}>
              <Text style={{fontWeight: '800', fontSize: 23}}>Login</Text>
            </View>
            <Input style={{
              width: 287,
              marginTop: 17,
              marginBottom: 17,
              }} placeholder="Email"></Input>
            <Input style={{
              width: 287,
              marginTop: 17,
              marginBottom: 33,
              }} 
              type="password"
              placeholder="Password"></Input>
            <TouchableOpacity
              style={styles.buttonLandingPage}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
      </LinearGradient>
    </View>
  )
}