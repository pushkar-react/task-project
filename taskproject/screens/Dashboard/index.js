import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import {colorItem} from '../../assets/color';
import ProfileDetailCompo from './profileDetailCompo';
import DetailsCard from './detailsCard';
import GridCards from './gridCards';
import { useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { AddCurrentTab } from '../../components/Redux/actions';

const Dashboard = ({navigation}) => {
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
        title="Dashboard"
        right={() => (
          <Ionicons
            style={{fontSize: 30}}
            color="#fff"
            name="ios-person-circle-outline"
            onPress={() => {navigation.navigate("MyProfile")}}
          />
        )}
      />
      <ScrollView scrollIndicatorInsets={false} showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <ProfileDetailCompo />
        <DetailsCard />
        <GridCards navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default Dashboard;
