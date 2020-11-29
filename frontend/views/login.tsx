import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import styles from '../styles/index';
import { setUser } from '../store/actions';

export default function Login({ navigation }: { navigation: any}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();

  const handleLoginEmail = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleLoginPass = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPass(event.target.value);
  };

  const submitLogin = (event: GestureResponderEvent) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3000/login',
      data: {
        email: email,
        pass: pass,
      }
    }).then((res) => {
      dispatch(setUser({ email: res.data.email, token: res.data.token }))
      navigation.navigate("Onboard")
    }).catch((e) => {
      alert(e.result.data.message)
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
          <View style={styles.drawer}>
            <View style={{width: 287, marginTop: 44, marginBottom: 22}}>
              <Text style={{fontWeight: '800', fontSize: 23}}>Login</Text>
            </View>
            <Input style={{
              width: 287,
              marginTop: 17,
              marginBottom: 17,
              }} 
              placeholder="Email"
              onChange={(e) => handleLoginEmail(e)}></Input>
            <Input style={{
              width: 287,
              marginTop: 17,
              marginBottom: 33,
              }} 
              type="password"
              placeholder="Password"
              onChange={(e) => handleLoginPass(e)}></Input>
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