import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {data} from './TreeData';
import Entypo from 'react-native-vector-icons/Entypo';
import TreeNode from './FamilyTree';
import Header from '../../components/Header';

const TreeGraph = ({navigation}) => {
  const [state, setState] = React.useState()
  const [loader, setloader] = React.useState()

const handleSet = () => {
  setState(data.children[0])
}

React.useEffect(()=>{
 setState(data)
},[])

  return (
    <>
      <Header
        left={() => (
          <Entypo
            style={{fontSize: 30}}
            color="#fff"
            name="menu"
            onPress={() => navigation.openDrawer()}
          />
        )}
        title="My Tree"
      />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View style={styles.container}>
          <TreeNode node={state} handleSet={handleSet} />
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fff"
  },
});
export default TreeGraph;
