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
      source={require('../../assets/Images/dashboardBack.png')}
      style={{padding: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex:100
        }}>
        <View
          style={{
            height: 50,
            width: '40%',
            borderRadius: 50,
            borderWidth: 2,
            borderColor: colorItem.white,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 5,
            alignItems: 'center',
          }}>
          <Ionicons style={{fontSize: 30}} color="#fff" name="person-outline" />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontSize: 11}}>Personal</Text>
            <Text style={{color: '#fff', fontSize: 13, fontWeight: '700'}}>
              Business
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 30,
            width: '15%',
            borderRadius: 50,
            backgroundColor: colorItem.white,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Fontisto style={{fontSize: 20}} color="#222" name="arrow-swap" />
        </View>
        <View
          style={{
            height: 50,
            width: '40%',
            borderRadius: 50,
            borderWidth: 2,
            borderColor: colorItem.white,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Ionicons
            style={{fontSize: 30}}
            color="#fff"
            name="ios-people-outline"
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontSize: 11}}>Team</Text>
            <Text style={{color: '#fff', fontSize: 13, fontWeight: '700'}}>
              Business
            </Text>
          </View>
        </View>
      </View>
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
      <LinearGradient colors={[colorItem.subMainColor, colorItem.mainColor]} style={{height:208, opacity:0.6, width:"130%",position:"absolute", top:0}} />
    </ImageBackground>
  );
};

export default ProfileDetailCompo;
