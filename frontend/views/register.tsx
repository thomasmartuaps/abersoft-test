import React from 'react';
import { Text, View, Button, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '@material-ui/core/Input';
import styles from '../styles/index';

export default function Register({ navigation }: { navigation: any}) {

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
              <Text style={{fontWeight: '800', fontSize: 23}}>Register Account</Text>
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
              style={styles.buttonLoginRegister}
            >
              <Text style={styles.buttonTextLoginReg}>Register Account</Text>
            </TouchableOpacity>
          </View>
      </LinearGradient>
    </View>
  )
}