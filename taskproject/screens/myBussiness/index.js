import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import {ScrollView, Text} from 'react-native';
import {GetData} from '../../helpingComponents/ApiInstances';
import BusinessCard from './businessCard';
import {colorItem} from '../../assets/color';
import LoaderCompo from '../../components/LoaderCompo';

const MyBussiness = ({navigation}) => {
  const [businessData, setBusinessData] = useState([]);
  const [loading, setloading] = useState(true);
  const getData = async () => {
    const response = await GetData('/business/myBusiness');
    setBusinessData(response.data.myBusinessData);
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header
        left={() => (
          <Ionicons
            style={{fontSize: 30}}
            color="#fff"
            name="chevron-back"
            onPress={() => navigation.goBack()}
          />
        )}
        title="My Business"
      />
      <ScrollView
        style={{padding: 15}}
        contentContainerStyle={{paddingBottom: 70}}
        showsVerticalScrollIndicator={false}>
        <Text style={{color: colorItem.mainTextColor, fontWeight: '700'}}>
          Self Business Report
        </Text>
        {loading ? <LoaderCompo /> : ''}
        <BusinessCard businessData={businessData} />
      </ScrollView>
    </>
  );
};

export default MyBussiness;
