import React from 'react';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colorItem } from '../../assets/color';


const ProfileBack = () => {
  return (
    <ImageBackground
      source={require('../../assets/Images/dashboardBack.png')}
      style={{padding: 20, height: 130}}>
      <LinearGradient
        colors={[colorItem.subMainColor, colorItem.mainColor]}
        style={{
          height: 130,
          opacity: 0.6,
          width: '130%',
          position: 'absolute',
          top: 0,
        }}
      />
    </ImageBackground>
  );
};

export default ProfileBack;
