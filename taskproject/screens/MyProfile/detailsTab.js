import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {colorItem} from '../../assets/color';
import SponserDetails from './sponserDetails';
import { bankData, nomineeData, sponserData, userData } from './tabData';

const tabs = [
  'Sponser Details',
  'User Details',
  'Bank Details',
  'Nominee Details',
];

const DetailsTab = () => {
  const [currentTab, setCurrentTab] = React.useState('Sponser Details');
  return (
    <>
      <View
        style={{
          backgroundColor: colorItem.white,
          marginTop: 70,
          elevation: 3,
        }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          scrollIndicatorInsets={false}
          horizontal>
          <View style={{flexDirection: 'row'}}>
            {tabs.map(tabitem => (
              <View
                onTouchEnd={() => setCurrentTab(tabitem)}
                key={Math.random()}
                style={{
                  paddingHorizontal: 15,
                  borderBottomWidth: 2,
                  borderBottomColor:
                    currentTab == tabitem ? colorItem.subMainColor : '#fff',
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color:
                      currentTab == tabitem ? colorItem.subMainColor : '#aaa',
                  }}>
                  {tabitem}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: colorItem.white,
          marginTop: 20,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          flex: 1,
          paddingTop: 20,
          elevation: 10,
        }}>
        {currentTab == 'Sponser Details' ? (
          <SponserDetails sponserData={sponserData} />
        ) : (
          ''
        )}
        {currentTab == 'User Details' ? (
          <SponserDetails sponserData={userData} />
        ) : (
          ''
        )}
        {currentTab == 'Bank Details' ? (
          <SponserDetails sponserData={bankData} />
        ) : (
          ''
        )}
        {currentTab == 'Nominee Details' ? (
          <SponserDetails sponserData={nomineeData} />
        ) : (
          ''
        )}
      </View>
    </>
  );
};

export default DetailsTab;
