import React from 'react';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import DataCard from './dataCard';
import {View, Text} from 'react-native';
import {colorItem} from '../../assets/color';
import {GetData, PostData} from '../../helpingComponents/ApiInstances';
import {useSelector} from 'react-redux';
import LoaderCompo from '../../components/LoaderCompo';

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
  const {profileData} = useSelector(state => state);

  const [FLeveldata, setFLeveldata] = React.useState([]);
  const [loader, setLoader] = React.useState(true);

  const getDirectData = async () => {
    const resp = await PostData('/business/mydownline');
    console.log(resp.myBusinessData);
    setFLeveldata(resp.myBusinessData.myTotalBusiness);
    setLoader(false);
  };

  React.useEffect(() => {
    getDirectData();
  }, []);

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
      {loader ? <LoaderCompo /> : ''}
      {FLeveldata.map(item => (
        <DataCard item={item} key={Math.random()} />
      ))}
    </>
  );
};

export default MyDownline;
