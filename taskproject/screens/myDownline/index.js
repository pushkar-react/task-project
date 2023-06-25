import React from 'react';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import DataCard from './dataCard';
import {View, Text} from 'react-native';
import { colorItem } from '../../assets/color';

const MyDownline = ({navigation}) => {
  const Data = [
    {
      Joining_Leg: 'L',
      Member: 61,
      Total_Amount: 12345.0,
      Received_Amount: 123456.0,
    },
    {
      Joining_Leg: 'L',
      Member: 61,
      Total_Amount: 12345.0,
      Received_Amount: 123456.0,
    },
  ];
  return (
    <>
      <Header
        left={() => (
          <Entypo
            style={{fontSize: 30}}
            color="#fff"
            name="menu"
            onPress={() => navigation.openDrawer()}
          />
        )}
        title="My Downline"
      />
      <View
        style={{
          backgroundColor: '#fff',
          margin: 15,
          padding: 20,
          flexDirection: 'row',
          borderRadius: 10,
          elevation: 4,
        }}>
        <Text
          style={{
            color: colorItem.mainTextColor,
            fontWeight: '700',
            width: '45%',
          }}>Associate ID: </Text>
        <Text style={{color: colorItem.mainTextColor, marginLeft: 10}}>123456000007</Text>
      </View>
      {Data.map(item => (
        <DataCard item={item} key={Math.random()} />
      ))}
    </>
  );
};

export default MyDownline;
