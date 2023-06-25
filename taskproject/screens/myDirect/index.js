import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../components/Header';
import TableData from './table';

const MyDirect = ({navigation}) => {
  const Data = [
    {
      ID: 'SI210416006',
      Name: 'PRADEEP KUMAR SINGH CHAUHAN',
      Leg: 'L',
      Date: '4/16/2021 12:00:00 AM',
      Amount: '4500.00',
    },
    {
      ID: 'SI210416006',
      Name: 'PRADEEP KUMAR SINGH CHAUHAN',
      Leg: 'R',
      Date: '4/16/2021 12:00:00 AM',
      Amount: '4500.00',
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
        title="My Direct"
      />
      {Data.map(item => (
        <TableData key={Math.random()} item={item} />
      ))}
    </>
  );
};

export default MyDirect;
