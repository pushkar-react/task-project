import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../components/Header';
import ProfileBack from './profileBack';
import DetailCard from './detailCard';
import DetailsTab from './detailsTab';

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
