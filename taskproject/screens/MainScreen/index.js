import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../Dashboard';
import {
  Dimensions,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colorItem} from '../../assets/color';
import Entypo from 'react-native-vector-icons/Entypo';
import drawerItems from '../../assets/routes';
import MyProfile from '../MyProfile';
import {useDispatch, useSelector} from 'react-redux';
import {AddProfileData} from '../../components/Redux/actions';
import MyDirect from '../myDirect';
import MyDownline from '../myDownline';
import {GetData} from '../../helpingComponents/ApiInstances';
import Storage from '../../helpingComponents/storage';
import {AuthContext} from '../../App';
import TreeGraph from '../MyTree';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  const dispatch = useDispatch();

  const getProfileData = async () => {
    const res = await GetData(`/user/profile`);
    console.log(res.data);
    dispatch(AddProfileData(res.data.profileData[0]));
    
  };

  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <Drawer.Navigator
      initialRouteName={'Dashboard'}
      backBehavior={'history'}
      defaultStatus={'closed'}
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        animation: 'none',
        swipeEnabled:false,
        drawerActiveBackgroundColor: colorItem.mainLightColor,
        header: () => false,
        drawerStyle: {
          width: Dimensions.get('window').width / 1.22,
        },
      }}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="MyDirect" component={MyDirect} />
      <Drawer.Screen name="MyDownline" component={MyDownline} />
      <Drawer.Screen name="TreeGraph" component={TreeGraph} />
    </Drawer.Navigator>
  );
};

export default MainScreen;

const DrawerContent = ({navigation}) => {
  const {setToken} = React.useContext(AuthContext);
  const [open, setOpen] = React.useState('Dashboard');
  const {profileData} = useSelector(state => state);

  const handleRoute = async item => {
    if (!!!item.subRoute) {
      if (item.route == 'open') {
        if (item.label == open) {
          setOpen('');
        } else {
          setOpen(item.label);
        }
      } else if (item.route == 'logout') {
        await Storage.clearToken();
        setToken(null);
      } else {
        setOpen(item.label);
        navigation.navigate(item.route);
      }
    } else {
      navigation.navigate(item.subRoute);
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          alignItems: 'center',
          height: 130,
          backgroundColor: colorItem.mainColor,
        }}>
        <View
          onTouchEnd={() => navigation.closeDrawer()}
          activeOpacity={0.95}
          style={{position: 'absolute', right: 10, top: 10}}>
          <Entypo
            style={{fontSize: 20}}
            color="#fff"
            name="chevron-with-circle-left"
          />
        </View>
        <Image
          source={require('../../assets/Images/Logo.jpeg')}
          style={{
            height: 70,
            width: 70,
            borderRadius: 50,
            borderWidth: 5,
            borderColor: colorItem.mainTextColor,
          }}
        />
        <View style={{paddingLeft: 10, width: '70%'}}>
          <Text style={{color: colorItem.mainTextColor}}>Welcome !!</Text>
          <Text style={{color: colorItem.mainTextColor, fontWeight: '700'}}>
            {profileData.FirstName}
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}>
        {drawerItems.map(items => (
          <React.Fragment key={Math.random()}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => handleRoute(items)}
              style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderBottomWidth: 2,
                borderBottomColor: '#eee',
                marginHorizontal: 10,
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>{items.icon}</View>
                <Text
                  style={{
                    marginLeft: 10,
                    color: colorItem.subMainColor,
                    fontWeight: '700',
                  }}>
                  {items.label}
                </Text>
              </View>
              {items.subLabel.length ? (
                <Entypo
                  style={{fontSize: 20}}
                  color={colorItem.subMainColor}
                  name={open == items.label ? 'chevron-up' : 'chevron-down'}
                />
              ) : (
                ''
              )}
            </TouchableOpacity>
            {open == items.label
              ? items.subLabel.map(subItems => (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => handleRoute(subItems)}
                    key={Math.random()}
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 20,
                      paddingVertical: 20,
                      borderBottomWidth: 2,
                      borderBottomColor: '#eee',
                      // backgroundColor:
                      //   open == subItems.subLabel
                      //     ? colorItem.mainTextColor
                      //     : '#fff',
                      marginLeft: 30,
                      marginRight: 10,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View>{subItems.subIcon}</View>
                      <Text
                        style={{
                          marginLeft: 10,
                          color: colorItem.subMainColor,
                          fontWeight: '700',
                        }}>
                        {subItems.subLabel}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))
              : ''}
          </React.Fragment>
        ))}
      </ScrollView>
    </>
  );
};
