import React from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {data} from './TreeData';
import Entypo from 'react-native-vector-icons/Entypo';
import TreeNode from './FamilyTree';
import Header from '../../components/Header';
import {GetData} from '../../helpingComponents/ApiInstances';
import LoaderCompo from '../../components/LoaderCompo';

const TreeGraph = ({navigation}) => {
  const [state, setState] = React.useState();
  const [fullData, setfullData] = React.useState([]);
  const [loader, setloader] = React.useState(false);

  function convertArrayToParentChild(
    arr,
    parentId = null,
    depth = 1,
    maxDepth = 4,
  ) {
    if (depth > maxDepth) {
      return [];
    }

    const children = arr
      .filter(obj => obj.SponserID == parentId)
      .map(obj => ({
        ...obj,
        children: convertArrayToParentChild(
          arr,
          obj.UserID,
          depth + 1,
          maxDepth,
        ),
      }));

    return children;
  }

  const handleData = async (mytreedata, itemdata) => {
    let item = await convertArrayToParentChild(mytreedata, itemdata);
    setState(item[0]);
    setloader(false);
  };

  const getData = async node => {
    setloader(true);
    let resp = await GetData('/business/mytree');
    let {mytree} = resp.data.mytreeData;
    setfullData(mytree);

    if (node) {
      node.children = [];
      mytree.unshift(node);
    }

    mytree = mytree.map((el, i) => {
      if (i == 0) {
        return {...el, ['SponserID']: null};
      } else {
        return el;
      }
    });
    handleData(mytree);
  };

  React.useEffect(() => {
    getData();
  }, []);

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
      {loader ? <LoaderCompo /> : ''}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={getData} />
        }
        style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={styles.container}>
            <TreeNode node={state} handleSet={getData} setState={setState} />
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
export default TreeGraph;
