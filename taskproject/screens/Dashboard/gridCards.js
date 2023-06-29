import React from 'react';
import {Text, View, Image} from 'react-native';
import {colorItem} from '../../assets/color';
import {data} from './gridRoutesData';

const GridCards = ({navigation}) => {
  const handleRoute = item => {
    if (!!item.route) {
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
              <Image
                resizeMode="contain"
                source={item.icon}
                style={{height: 40, width: 40}}
              />
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
