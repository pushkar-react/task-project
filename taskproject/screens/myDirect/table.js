import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {colorItem} from '../../assets/color';

const TableData = ({item}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        margin: 15,
        padding: 20,

        borderRadius: 10,
        elevation: 4,
      }}>
      <View style={{flexDirection: 'row', marginTop:10,}}>
        <Text style={{color: colorItem.mainTextColor, fontWeight: '700', width:"45%"}}>
          Associate ID:{' '}
        </Text>
        <Text style={{color: colorItem.mainTextColor, marginLeft: 10}}>
          {item.UserID}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop:10,}}>
        <Text style={{color: colorItem.mainTextColor, fontWeight: '700', width:"45%"}}>
          Associate Name:{' '}
        </Text>
        <Text style={{color: colorItem.mainTextColor, width:"55%",marginLeft: 10}}>
          {item.UserName}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop:10,}}>
        <Text style={{color: colorItem.mainTextColor, fontWeight: '700', width:"45%"}}>
          Joining Leg:{' '}
        </Text>
        <Text style={{color: colorItem.mainTextColor, width:"55%",marginLeft: 10}}>
          {item.JoiningLeg}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop:10,}}>
        <Text style={{color: colorItem.mainTextColor, fontWeight: '700', width:"45%"}}>
          Joining Date:{' '}
        </Text>
        <Text style={{color: colorItem.mainTextColor, width:"55%",marginLeft: 10}}>
          {item.JoiningDate}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop:10,}}>
        <Text style={{color: colorItem.mainTextColor, fontWeight: '700', width:"45%"}}>
          Joining Amount:{' '}
        </Text>
        <Text style={{color: colorItem.mainTextColor, width:"55%",marginLeft: 10}}>
          {item.JoiningAmount}
        </Text>
      </View>
    </View>
  );
};

export default TableData;
