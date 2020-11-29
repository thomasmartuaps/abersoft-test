import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, GestureResponderEvent, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import styles from '../styles/index';
import { setUser } from '../store/actions';
import { baseUrl } from '../baseUrl';

// const baseUrl = 'http://192.168.88.12';

export default function Login({ navigation }: { navigation: any}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();

  const submitLogin = (event: GestureResponderEvent) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: `${baseUrl}:3000/login`,
      data: {
        email: email,
        pass: pass,
      }
    }).then((res) => {
      dispatch(setUser({ email: res.data.email, token: res.data.token }))
      alert(`Loggin in as ${res.data.email}...`)
      navigation.navigate("Onboard")
    }).catch((e) => {
      if (e.result.data) {
        alert(e.result.data.message)
      } else {
        alert(e)
      }
    })
  }

  return(
    <View style={styles.background}>
      <LinearGradient
        colors={['#3549FB', '#4ED2DA']}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.1, y: 1.0 }}
        style={styles.gradientBg}
        > 
          <TouchableOpacity
              style={styles.backButton}
              onPress={(e) => navigation.navigate("Home")}
            >
              <Text style={styles.buttonTextLoginReg}>Back</Text>
          </TouchableOpacity>
          <View style={styles.drawer}>
            <View style={{width: 287, marginTop: 44, marginBottom: 22}}>
              <Text style={{fontWeight: '800', fontSize: 23}}>Login</Text>
            </View>
            <TextInput style={styles.textInput} 
              onChangeText={email => setEmail(email)}
              placeholder="Email"></TextInput>
            <TextInput style={styles.textInput} 
              onChangeText={pass => setPass(pass)}
              textContentType="password"
              placeholder="Password"></TextInput>
            <TouchableOpacity
              style={styles.buttonLoginRegister}
              onPress={(e) => submitLogin(e)}
            >
              <Text style={styles.buttonTextLoginReg}>Login</Text>
            </TouchableOpacity>
          </View>
      </LinearGradient>
    </View>
  )
}