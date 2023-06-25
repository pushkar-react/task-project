import React from 'react';
import {Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {colorItem} from '../../assets/color';
import Header from '../../components/Header';
import ProfileBack from './profileBack';
import DetailCard from './detailCard';
import DetailsTab from './detailsTab';
import {useDispatch} from 'react-redux';
import {AddCurrentTab} from '../../components/Redux/actions';
import {useIsFocused} from '@react-navigation/native';

const MyProfile = ({navigation}) => {
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
        title="My Profile"
      />
      <ProfileBack />
      <DetailCard />
      <DetailsTab />
    </>
  );
};

export default MyProfile;
