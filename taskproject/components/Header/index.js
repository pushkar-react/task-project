import React from 'react';
import {View, Text} from 'react-native';
import {colorItem} from '../../assets/color';

const Header = ({left=()=>(<></>), right=()=>(<></>), title = ''}) => {
  return (
    <View
      style={{
        backgroundColor: colorItem.mainColor,
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
      }}>
      <View style={{width: '90%', flexDirection: 'row'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '10%',
          }}>
          <Text>{left()}</Text>
        </View>
        <View style={{justifyContent: 'center', width: '80%', marginLeft:10}}>
          <Text style={{color:colorItem.white, fontSize:15}}>{title}</Text>
        </View>
      </View>

      <View
        style={{width: '10%', justifyContent: 'center', alignItems: 'center'}}>
        <Text>{right()}</Text>
      </View>
    </View>
  );
};

export default Header;
