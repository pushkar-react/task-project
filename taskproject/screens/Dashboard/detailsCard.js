import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView, Text, View} from 'react-native';
import {colorItem} from '../../assets/color';

const DetailsCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 10,
        elevation: 4,
        margin: 10,
        backgroundColor: colorItem.white,
        borderRadius: 10,
        paddingRight:30
      }}>
      <View
        style={{
          backgroundColor: colorItem.mainColor,
          width: 70,
        //   height: 70,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons
          style={{fontSize: 40, transform: [{rotate: '-30deg'}]}}
          color="#fff"
          name="megaphone"
        />
      </View>
      <View style={{paddingHorizontal:20}}>
        <Text
          style={{
            color: colorItem.mainTextColor,
            fontWeight: 'bold',
            fontSize: 13,
          }}>
          Payout
        </Text>
        <View style={{width: '90%'}}> 
          <Text style={{color: colorItem.mainTextColor, fontSize: 13}}>
            Embassy Office Parks is the manager to Embassy Real Estate
            Investment Trust (REIT)
          </Text>
        </View>
        <Text style={{color: colorItem.mainColor, textAlign: 'right'}}>
          View Details
        </Text>
      </View>
    </View>
  );
};

export default DetailsCard;
