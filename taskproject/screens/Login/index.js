import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {colorItem} from '../../assets/color';
import {TextInput, IconButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import style from './style';

const Login = ({navigation}) => {
  const [text, setText] = React.useState({email: '', password: ''});
  const [secure, setsecure] = React.useState(true);
  const [focussed, setfocussed] = React.useState(false);
  return (
    <KeyboardAvoidingView
      enabled={false}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/Images/Front.jpg')}
        style={{flex: 1}}>
        <View
          style={style.whiteScreen}>
          <Image
            source={require('../../assets/Images/Logo.jpeg')}
            style={style.LogoImage}
          />
          <Text
            style={style.companyName}>
            WELCOME TO Sakcham Infraventures Pvt. Ltd.
          </Text>
          <TextInput
            mode="flat"
            label="Email LoginId"
            underlineColor={colorItem.mainColor}
            underlineStyle={{
              borderBottomWidth: 2,
              borderBottomColor: colorItem.mainLightColor,
            }}
            style={{
              marginTop: 40,
              backgroundColor: colorItem.white,
              borderBottomWidth: 2.5,
              borderBottomColor: colorItem.mainColor,
            }}
            outlineColor={colorItem.mainTextColor}
            textColor={colorItem.mainTextColor}
            value={text.email}
            onChangeText={text => setText(prev => ({...prev, ['email']: text}))}
          />
          <View
            style={{flexDirection: 'row', marginTop: 40, alignItems: 'center'}}>
            <TextInput
              onFocus={() => setfocussed(true)}
              onBlur={()=>setfocussed(false)}
              secureTextEntry={secure}
              mode="flat"
              underlineStyle={{
                borderBottomWidth: 2,
                borderBottomColor: colorItem.mainLightColor,
              }}
              label="Enter Password"
              underlineColor={colorItem.mainColor}
              style={{
                backgroundColor: colorItem.white,
                width: '90%',
                borderBottomWidth: 2.5,
                borderBottomColor: colorItem.mainColor,
              }}
              textColor={colorItem.mainTextColor}
              outlineColor={colorItem.mainTextColor}
              value={text.password}
              onChangeText={text =>
                setText(prev => ({...prev, ['password']: text}))
              }
            />
            <View
              onTouchEnd={() => setsecure(!secure)}
              style={{
                backgroundColor: colorItem.white,
                width: '10%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 58.2,
                borderBottomWidth: focussed ? 1.3 : 2.5,
                borderBottomColor: colorItem.mainColor,
              }}>
              <Entypo
                style={{fontSize: 20}}
                name={!secure ? 'eye-with-line' : 'eye'}
              />
            </View>
          </View>

          <View>
            <Text style={{textAlign: 'right', marginTop: 10}}>
              Forgot Password?
            </Text>
          </View>
          <View
          onTouchEnd={()=>navigation.navigate("MainScreen")}
            style={{
              height: 40,
              borderRadius: 10,
              margin: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:colorItem.mainLightColor
            }}
            // colors={[colorItem.mainColor, colorItem.subMainColor]}
            >
            <Text style={{color: colorItem.subMainColor, fontWeight: '700'}}>
              LOGIN NOW
            </Text>
          </View>
          <Text style={{textAlign: 'center', color: colorItem.mainTextColor}}>
            Don't have an Account? SignUp
          </Text>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;
