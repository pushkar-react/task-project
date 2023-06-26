import {BaseToast, ErrorToast} from 'react-native-toast-message';
import {colorItem} from '../assets/color';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

export const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: props => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: colorItem.green,
        borderLeftColor: colorItem.subMainColor,
      }}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        color: '#fff',
      }}
      text2Style={{
        fontSize: 12,
        color: '#fff',
      }}
    />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: props => (
    <ErrorToast
      {...props}
      style={{backgroundColor: 'red', borderLeftColor: colorItem.subMainColor}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        color: '#fff',
      }}
      text2Style={{
        fontSize: 12,
        color: '#fff',
      }}
    />
  ),

  warn: props => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: 'orange',
        borderLeftColor: colorItem.subMainColor,
      }}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        color: '#fff',
      }}
      text2Style={{
        fontSize: 12,
        color: '#fff',
      }}
    />
  ),
};

export const successToast = message =>
  Toast.show({
    type: 'success',
    text1: 'success 🙂',
    text2: message,
  });

export const errorToast = message =>
  Toast.show({
    type: 'error',
    text1: 'error 🙁',
    text2: message,
  });
