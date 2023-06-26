import React from 'react';
import {Text, View} from 'react-native';
import { colorItem } from '../../assets/color';
import { useSelector } from 'react-redux';

const DetailCard = () => {
  const {profileData} = useSelector(state=>state)
  return (
    <View
      style={{
        backgroundColor: colorItem.white,
        padding: 20,
        borderRadius: 10,
        margin: 10,
        elevation: 4,
        position:"absolute",
        top:110
      }}>
      <Text
        style={{
          color: colorItem.mainTextColor,
          fontSize: 15,
          fontWeight: '700',
        }}>
        {profileData.FirstName}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 11, width: '20%'}}>User Id</Text>
        <View style={{width: '10%'}}>
          <Text style={{fontSize: 11}}>:</Text>
        </View>
        <View style={{width: '70%'}}>
          <Text style={{color: colorItem.mainTextColor, fontSize: 11}}>
            {profileData.UserID}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 11, width: '20%'}}>DOB</Text>
        <View style={{width: '10%'}}>
          <Text style={{fontSize: 11}}>:</Text>
        </View>
        <View style={{width: '70%'}}>
          <Text style={{color: colorItem.mainTextColor, fontSize: 11}}>
            {profileData.DOB}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 11, width: '20%'}}>Mobile</Text>
        <View style={{width: '10%'}}>
          <Text style={{fontSize: 11}}>:</Text>
        </View>
        <View style={{width: '70%'}}>
          <Text style={{color: colorItem.mainTextColor, fontSize: 11}}>
            {profileData.MobileNo}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailCard;
