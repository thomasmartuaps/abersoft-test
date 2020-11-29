import React, { useEffect } from 'react';
import { Text, View, Image, Button, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import styles from '../styles/index';

const undrawImg = require('../images/undraw_data_processing_yrrv-1.png')

export default function Onboard({ navigation }: { navigation: any}) {
  const token = useSelector(state => state.token);

  useEffect(() => {
    if(!token) {
      navigation.navigate("Home")
    }
  }, [token]);
  
  return(
    <View style={styles.background}>
      <View
        style={styles.onboardBg}
        > 
          <View style={{ marginBottom: 123 }}>
            <Image source={ {uri: 'https://i.imgur.com/6OqRxpL.png'} }
            style={{ width: 256 }} />
            <Text style={{ fontWeight: '800', fontSize: 25, textAlign: 'center', marginTop: 28, marginBottom: 28 }}>Welcome to the app</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas scelerisque porttitor turpis viverra lobortis convallis. Libero tristique donec turpis elit adipiscing sit faucibus tincidunt. Erat porttitor amet, nibh id lorem. Volutpat quam vestibulum egestas ut odio odio. Nunc non, feugiat a diam at lacus augue. Sit lacus pharetra eget feugiat aliquam enim adipiscing. Purus nec tortor tellus, neque montes. Gravida ornare eu viverra libero. Vulputate massa turpis posuere nibh dolor pulvinar bibendum. Viverra scelerisque ut dignissim at sit s
            </Text>
          </View>
      </View>
    </View>
  )
}