import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colorItem} from '../../assets/color';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

const ProfileDetailCompo = () => {
  const {profileData} = useSelector(state=>state)
  return (
    <ImageBackground
      source={require('../../assets/Images/Logo.jpeg')}
      style={{padding: 20, marginBottom:10, height:200}}>
      <View style={{alignItems: 'center', zIndex:100}}>
        <Ionicons
          style={{fontSize: 70}}
          color="#fff"
          name="person-circle-outline"
        />
        <Text style={{fontWeight: '700', fontSize: 12, color: colorItem.white}}>
          {profileData.FirstName}
        </Text>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 12,
            color: colorItem.white,
            marginTop: 10,
          }}>
          {profileData.UserID}
        </Text>
      </View>
      <LinearGradient colors={[colorItem.subMainColor, colorItem.mainColor]} style={{height:200, opacity:0.6, width:"130%",position:"absolute", top:0}} />
    </ImageBackground>
  );
};

export default ProfileDetailCompo;
