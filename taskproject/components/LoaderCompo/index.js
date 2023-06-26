import React from "react";
import { ActivityIndicator, Modal, Text, View } from "react-native";

const LoaderCompo = () => {
    return(
        <Modal transparent visible={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'rgba(52, 52, 52, 0.4)',
            }}>
            <View
              style={{
                padding: 15,
                flexDirection: 'row',
                backgroundColor: '#fff',
                width: '60%',
                justifyContent: 'space-around',
                borderRadius: 5,
                alignItems: 'center',
              elevation:3
              }}>
              <ActivityIndicator color="#222" size="large" />
              <Text style={{color: '#222', fontSize: 15}}>Loading...</Text>
            </View>
          </View>
        </Modal>
    )
}

export default LoaderCompo