import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native';
import {colorItem} from './color';
const drawerItems = [
  {
    label: 'Dashboard',
    route: 'Dashboard',
    icon: (
      <Image
        source={require('../assets/Images/Home.png')}
        style={{height: 20, width: 20}}
      />
    ),
    subLabel: [],
  },
  {
    label: 'My Profile',
    route: 'MyProfile',
    icon: (
      <Image
        source={require('../assets/Images/profile.png')}
        style={{height: 20, width: 20}}
      />
    ),
    subLabel: [],
  },
  {
    label: 'My Team',
    route: 'open',
    icon: (
      <Image
        source={require('../assets/Images/team.png')}
        style={{height: 20, width: 20}}
      />
    ),
    subLabel: [
      {
        subLabel: 'My Direct',
        subRoute: 'MyDirect',
        subIcon: (
          <Ionicons
            style={{fontSize: 15, marginTop: 2}}
            color={colorItem.subMainColor}
            name="person-add-outline"
          />
        ),
      },
      {
        subLabel: 'My Downline',
        subRoute: 'MyDownline',
        subIcon: (
          <Ionicons
            style={{fontSize: 15, marginTop: 2}}
            color={colorItem.subMainColor}
            name="person-remove-outline"
          />
        ),
      },
      {
        subLabel: 'My Tree',
        subRoute: 'open',
        subIcon: (
          <MaterialCommunityIcons
            style={{fontSize: 15, marginTop: 2}}
            color={colorItem.subMainColor}
            name="file-tree"
          />
        ),
      },
    ],
  },
  {
    label: 'Payout',
    route: '',
    icon: (
      <Image
        source={require('../assets/Images/Availability.png')}
        style={{height: 20, width: 20}}
      />
    ),
    subLabel: [],
  },
  {
    label: 'Reward',
    route: '',
    icon: (
      <AntDesign
        style={{fontSize: 20}}
        color={colorItem.subMainColor}
        name="car"
      />
    ),
    subLabel: [],
  },
  {
    label: 'Reports',
    route: 'open',
    icon: (
      <Image
        source={require('../assets/Images/reports.png')}
        style={{height: 20, width: 20}}
      />
    ),
    subLabel: [
      {
        subLabel: 'Payout Details',
        subRoute: 'open',
        subIcon: (
          <MaterialCommunityIcons
            style={{fontSize: 15, marginTop: 2}}
            color={colorItem.subMainColor}
            name="bag-checked"
          />
        ),
      },
    ],
  },
  {
    label: 'Utilities',
    route: 'open',
    icon: (
      <Ionicons
        style={{fontSize: 20}}
        color={colorItem.subMainColor}
        name="flower"
      />
    ),
    subLabel: [
      {
        subLabel: 'Change Password',
        subRoute: 'open',
        subIcon: (
          <MaterialCommunityIcons
            style={{fontSize: 15, marginTop: 2}}
            color={colorItem.subMainColor}
            name="key"
          />
        ),
      },
    ],
  },
  {
    label: 'Logout',
    route: '',
    icon: (
      <Image
        source={require('../assets/Images/Logout.png')}
        style={{height: 20, width: 20}}
      />
    ),
    subLabel: [],
  },
];

export default drawerItems;
