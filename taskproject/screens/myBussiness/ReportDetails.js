import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {colorItem} from '../../assets/color';

const ReportDetails = ({detailData, totalamount, selected}) => {
  const headingList = ['PaymentDate', 'ReceiptNo', 'Amount'];

  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colorItem.subMainColor,
              height: 40,
            }}>
            {headingList.map(el => (
              <View
                key={Math.random()}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  borderRightWidth: 0.3,
                  borderRightColor: '#fff',
                  width: 120,
                }}>
                <Text style={{color: colorItem.white, textAlign: 'center'}}>
                  {el}
                </Text>
              </View>
            ))}
          </View>
          <ScrollView
            contentContainerStyle={{paddingBottom: 20}}
            showsVerticalScrollIndicator={false}>
            {detailData.map((el, index) => (
              <View
                key={Math.random()}
                style={{
                  flexDirection: 'row',
                  height: 40,
                  backgroundColor: colorItem.mainLightColor,
                }}>
                <View
                  key={Math.random()}
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    paddingHorizontal: 10,
                    borderRightWidth: 0.3,
                    borderRightColor: '#fff',
                    width: 120,
                    alignItems: 'center',
                  }}>
                  <Text numberOfLines={1} style={{color: colorItem.white}}>
                    {`${new Date(el.PaymentDate).getDate()}-${
                      new Date(el.PaymentDate).getMonth() + 1
                    }-${new Date(el.PaymentDate).getFullYear()}`}
                  </Text>
                </View>
                <View
                  key={Math.random()}
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    paddingHorizontal: 10,
                    borderRightWidth: 0.3,
                    borderRightColor: '#fff',
                    width: 120,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: colorItem.white}}>{el.ReceiptNo}</Text>
                </View>
                <View
                  key={Math.random()}
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    paddingHorizontal: 10,
                    borderRightWidth: 0.3,
                    borderRightColor: '#fff',
                    width: 120,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: colorItem.white}}>{el.Amount}</Text>
                </View>
              </View>
            ))}
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colorItem.mainColor,
                height: 30,
                justifyContent: 'flex-end',
              }}>
              <View
                key={Math.random()}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  borderLeftWidth: 0.3,
                  borderLeftColor: '#fff',
                  width: 120,
                }}>
                <Text style={{color: colorItem.white, textAlign: 'center'}}>
                  Received Amt
                </Text>
              </View>
              <View
                key={Math.random()}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  borderLeftWidth: 0.3,
                  borderLeftColor: '#fff',
                  width: 120,
                }}>
                <Text style={{color: colorItem.white, textAlign: 'center'}}>
                  {totalamount}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colorItem.mainColor,
                height: 30,
                justifyContent: 'flex-end',
              }}>
              <View
                key={Math.random()}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  borderLeftWidth: 0.3,
                  borderLeftColor: '#fff',
                  width: 120,
                }}>
                <Text style={{color: colorItem.white, textAlign: 'center'}}>
                  Total Amount
                </Text>
              </View>
              <View
                key={Math.random()}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  borderLeftWidth: 0.3,
                  borderLeftColor: '#fff',
                  width: 120,
                }}>
                <Text style={{color: colorItem.white, textAlign: 'center'}}>
                  {selected}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default ReportDetails;
