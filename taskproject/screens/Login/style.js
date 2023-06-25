import {StyleSheet} from 'react-native';
import { colorItem } from '../../assets/color';

const style = StyleSheet.create({
  whiteScreen: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    padding: 20,
  },
  LogoImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: colorItem.mainTextColor,
  },
  companyName: {
    color: colorItem.mainTextColor,
    fontWeight: '700',
    fontSize: 15,
    marginTop: 15,
  },
});

export default style;
