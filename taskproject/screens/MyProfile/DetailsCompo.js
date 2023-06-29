import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import { colorItem } from '../../assets/color';
import { useSelector } from 'react-redux';

const DetailsCompo = ({sponserData}) => {
  const {profileData} = useSelector(state=>state)

  return (
    <ScrollView style={{flex: 1,}} contentContainerStyle={{paddingBottom:20}}>
      {sponserData.map(data => (
        <View style={{flexDirection: 'row', paddingHorizontal:10}}>
          <View style={{width: '40%', padding: 10}}>
            <Text style={{color:colorItem.mainTextColor, fontSize:15, }}>{data.heading} :</Text>
          </View>
          <View style={{width: '60%', padding: 10}}>
            <Text style={{color:colorItem.mainTextColor, fontSize:15, fontWeight:"700"}}>{profileData[data.key]}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default DetailsCompo;
