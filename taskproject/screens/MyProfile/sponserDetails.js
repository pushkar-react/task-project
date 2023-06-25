import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import { colorItem } from '../../assets/color';

const SponserDetails = ({sponserData}) => {
  return (
    <ScrollView style={{flex: 1,}} contentContainerStyle={{paddingBottom:20}}>
      {sponserData.map(data => (
        <View style={{flexDirection: 'row', paddingHorizontal:10}}>
          <View style={{width: '40%', padding: 10}}>
            <Text style={{color:colorItem.mainTextColor, fontSize:15, }}>{data.heading} :</Text>
          </View>
          <View style={{width: '60%', padding: 10}}>
            <Text style={{color:colorItem.mainTextColor, fontSize:15, fontWeight:"700"}}>{data.details}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default SponserDetails;
