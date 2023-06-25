import React, {useState} from 'react';
import {Modal, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {colorItem} from '../../assets/color';
import ChartDetail from './chartDetail';

const DataCard = ({item}) => {
  const [OpenChart, setOpenChart] = useState(false);
  const handleModal = () => {
    setOpenChart(!OpenChart);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => setOpenChart(true)}
      style={{
        backgroundColor: '#fff',
        margin: 15,
        padding: 20,
        borderRadius: 10,
        elevation: 4,
      }}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text
          style={{
            color: colorItem.mainTextColor,
            fontWeight: '700',
            width: '45%',
          }}>
          Joining Leg:{' '}
        </Text>
        <Text style={{color: colorItem.mainTextColor, marginLeft: 10}}>
          {item.Joining_Leg}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text
          style={{
            color: colorItem.mainTextColor,
            fontWeight: '700',
            width: '45%',
          }}>
          Total Member:{' '}
        </Text>
        <Text
          style={{
            color: colorItem.mainTextColor,
            width: '55%',
            marginLeft: 10,
          }}>
          {item.Member}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text
          style={{
            color: colorItem.mainTextColor,
            fontWeight: '700',
            width: '45%',
          }}>
          Total Amount:{' '}
        </Text>
        <Text
          style={{
            color: colorItem.mainTextColor,
            width: '55%',
            marginLeft: 10,
          }}>
          {item.Total_Amount}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text
          style={{
            color: colorItem.mainTextColor,
            fontWeight: '700',
            width: '45%',
          }}>
          Received Amount:{' '}
        </Text>
        <Text
          style={{
            color: colorItem.mainTextColor,
            width: '55%',
            marginLeft: 10,
          }}>
          {item.Received_Amount}
        </Text>
      </View>
      <Text
        style={{marginTop: 10, textAlign: 'right', color: colorItem.mainColor}}>
        click to view
      </Text>
      <Modal
        onRequestClose={() => {
          handleModal();
        }}
        visible={OpenChart}
        transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(55, 55, 55, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '90%',
              width: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                console.log('press');
                handleModal();
              }}
              style={{position: 'absolute', right: 10, top: 10}}>
              <Text>❌</Text>
            </TouchableOpacity>
            <Text style={{marginVertical: 10, paddingLeft: 20, color: '#222', width:"80%"}}>
              Member List
            </Text>
            <ChartDetail />
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default DataCard;
