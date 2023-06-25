import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {colorItem} from '../../assets/color';
import {useDispatch} from 'react-redux';
import {AddCurrentTab} from '../../components/Redux/actions';

const GridCards = ({navigation}) => {
  const dispatch = useDispatch();
  const data = [
    {
      icon: require('../../assets/Images/business.png'),
      heading: 'MY BUSINESS',
    },
    {
      icon: require('../../assets/Images/my_downline.png'),
      heading: 'MY DOWNLINE',
      route: 'MyDownline',
    },
    {
      icon: require('../../assets/Images/my-advance.png'),
      heading: 'MY PAYOUT',
    },
    {
      icon: require('../../assets/Images/dashboardprofile.png'),
      heading: 'MY PROFILE',
      route: 'MyProfile',
    },
    {
      icon: require('../../assets/Images/business.png'),
      heading: 'TEAM PAYOUT',
    },
    {
      icon: require('../../assets/Images/plot-availibility.png'),
      heading: 'PLOT AVAILABILITY',
    },
    {
      icon: require('../../assets/Images/level-plan-tree.png'),
      heading: 'MY TREE',
    },
    {
      icon: require('../../assets/Images/level-plan-tree.png'),
      heading: 'MY DIRECT',
      route:'MyDirect'
    },
    {
      icon: require('../../assets/Images/car.png'),
      heading: 'REWARD',
    },
  ];

  const handleRoute = item => {
    if (item.heading == 'MY PROFILE' || item.heading == 'MY DOWNLINE' || item.heading == 'MY DIRECT') {
      dispatch(AddCurrentTab('My Profile'));
      navigation.navigate(item.route);
    }
  };

  return (
    <View style={{alignItems: 'center', width: '100%', paddingBottom: 10}}>
      <View
        style={{
          width: '96%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          elevation: 3,
          borderColor: '#bbb',
          borderWidth: 0.5,
          marginTop: 10,
          justifyContent: 'center',
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        {data.map(item => {
          return (
            <View
              onTouchEnd={() => handleRoute(item)}
              key={Math.random()}
              style={{
                height: 100,
                width: `${96 / 3 + 1.3}%`,
                borderWidth: 0.5,
                borderColor: '#bbb',
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={item.icon} style={{height: 40, width: 40}} />
              <Text
                style={{
                  fontSize: 12,
                  color: colorItem.subMainColor,
                  marginTop: 10,
                }}>
                {item.heading}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default GridCards;
