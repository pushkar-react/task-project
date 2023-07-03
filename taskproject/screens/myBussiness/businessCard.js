import React, {useEffect, useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {colorItem} from '../../assets/color';
import ReportDetails from './ReportDetails';

const BusinessCard = ({businessData}) => {
  const [openModal, setOpenModal] = useState(false);
  const [detailData, setdetailData] = useState([]);
  const [totalamount, settotalamount] = useState(0);
  const [selected, setselected] = useState(0);
  const filterData = data => {
    setselected(data.TotalAmount);
    setOpenModal(true);
    businessData.paymentDetails.map(el => {
      if (el.BookingID == data.BookingID) {
        settotalamount(prev => prev + el.Amount);
        setdetailData(prev => [...prev, el]);
      }
    });
  };

  return (
    <>
      {businessData?.myTotalBusiness?.map(item => {
        return (
          <TouchableOpacity
            key={Math.random()}
            activeOpacity={0.7}
            onPress={() => filterData(item)}
            style={{
              backgroundColor: '#fff',
              elevation: 3,
              padding: 10,
              marginTop: 20,
              borderRadius: 7,
            }}>
            <Text style={{color: colorItem.mainTextColor, fontWeight: '700'}}>
              {item.UserName + `(${item.Userid})`}
            </Text>
            <Text style={{fontSize: 13,}}>
              ProjectName: {item.ProjectName}
            </Text>
            <Text style={{fontSize: 13, marginVertical: 5}}>
              PHASE-{item.Phase}
              {'  '}
              PlotNo-{item.PlotNo}
              {'  '}
              {item.PlotArea}Sq.Ft.
            </Text>
            <Text style={{fontSize: 13, color: colorItem.subMainColor}}>
              ReceivedAmount: ₹ {item.ReceivedAmount}
            </Text>
            <Text style={{fontSize: 13, color: colorItem.subMainColor}}>
              TotalAmount: ₹ {item.TotalAmount}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: colorItem.mainColor,
                textAlign: 'right',
              }}>
              View Ledger
            </Text>
          </TouchableOpacity>
        );
      })}
      <Modal
        onRequestClose={() => {
          setOpenModal(false);
        }}
        visible={openModal}
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
                setOpenModal(false);
                setdetailData([]);
                settotalamount(0);
              }}
              style={{position: 'absolute', right: 10, top: 10}}>
              <Text>❌</Text>
            </TouchableOpacity>
            <Text
              style={{
                marginVertical: 10,
                paddingLeft: 20,
                color: '#222',
                width: '80%',
              }}>
              Member List
            </Text>
            <ReportDetails
              selected={selected}
              totalamount={totalamount}
              detailData={detailData}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default BusinessCard;
