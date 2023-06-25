import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {colorItem} from '../../assets/color';

const ChartDetail = () => {
  const headingList = [
    'SrNo',
    'Associate Id',
    'Associate Name',
    'Joining Date',
    'Total Amount',
    'Received Amount',
  ];

  const chartData = [
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Kumar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Kumar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Kumar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Kumar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Ravi Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
    {
      srNo: 1,
      id: 2456789009,
      name: 'Prabhakar Shankar Sharma',
      date: '12/12/2022',
      total_amount: 23456,
      rec_Amount: 34567,
    },
  ];
  return (
    <>
      <ScrollView horizontal>
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
                  width: el == 'SrNo' ? 60 : el == 'Associate Name' ? 240 : 130,
                }}>
                <Text style={{color: colorItem.white, textAlign: 'center'}}>
                  {el}
                </Text>
              </View>
            ))}
          </View>
          <ScrollView contentContainerStyle={{paddingBottom: 20}}>
            {chartData.map(el => (
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
                    borderRightColor: '#bbb',
                    width: 60,
                  }}>
                  <Text style={{color: colorItem.white}}>{el.srNo}</Text>
                </View>
                <View
                  key={Math.random()}
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    paddingHorizontal: 10,
                    borderRightWidth: 0.3,
                    borderRightColor: '#fff',
                    width: 130,
                  }}>
                  <Text numberOfLines={1} style={{color: colorItem.white}}>
                    {el.id}
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
                    width: 240,
                  }}>
                  <Text style={{color: colorItem.white}}>{el.name}</Text>
                </View>
                <View
                  key={Math.random()}
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    paddingHorizontal: 10,
                    borderRightWidth: 0.3,
                    borderRightColor: '#fff',
                    width: 130,
                  }}>
                  <Text style={{color: colorItem.white}}>{el.date}</Text>
                </View>
                <View
                  key={Math.random()}
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    paddingHorizontal: 10,
                    borderRightWidth: 0.3,
                    borderRightColor: '#fff',
                    width: 130,
                  }}>
                  <Text style={{color: colorItem.white}}>{el.rec_Amount}</Text>
                </View>
                <View
                  key={Math.random()}
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    paddingHorizontal: 10,
                    borderRightWidth: 0.3,
                    borderRightColor: '#fff',
                    width: 130,
                  }}>
                  <Text style={{color: colorItem.white}}>
                    {el.total_amount}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default ChartDetail;
