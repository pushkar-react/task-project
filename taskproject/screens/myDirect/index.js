import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../components/Header';
import TableData from './table';
import {GetData} from '../../helpingComponents/ApiInstances';
import LoaderCompo from '../../components/LoaderCompo';

const MyDirect = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const getDirectData = async () => {
    const resp = await GetData('/business/mydirect');
    setData(resp.data.myBusinessData.myDirect);
    setLoader(false);
  };

  useEffect(() => {
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
        title="My Direct"
      />
      {loader ? <LoaderCompo /> : ''}
      {data.map(item => (
        <TableData key={Math.random()} item={item} />
      ))}
    </>
  );
};

export default MyDirect;
