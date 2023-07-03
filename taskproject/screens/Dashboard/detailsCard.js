import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image, ScrollView, Text, View, Dimensions} from 'react-native';
import {colorItem} from '../../assets/color';
import Carousel from 'react-native-reanimated-carousel';

const DetailsCard = () => {
  const width = Dimensions.get('window').width;
  let banner = [
    {
      image: require('../../assets/Images/slide-0.jpg'),
    },
    {
      image: require('../../assets/Images/slide-1.jpg'),
    },
    {
      image: require('../../assets/Images/slide-2.jpg'),
    },
    {
      image: require('../../assets/Images/slide-4.jpg'),
    },
  ];
  return (
    <View style={{height: width / 2.5 - 40}}>
      <Carousel
        pagingEnabled
        loop={true}
        width={width}
        autoPlay={true}
        height={width / 2.5}
        autoPlayInterval={3000}
        data={banner}
        renderItem={({item}) => {
          return (
            <View
              style={[{width: width - 30, height: 120, marginHorizontal: 15,
                marginVertical: 8,}]}>
              
            </View>
          );
        }}
      />
    </View>
  );
};

export default DetailsCard;
