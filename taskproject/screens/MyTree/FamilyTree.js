import React from 'react';
import {Svg, Line, Circle} from 'react-native-svg';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { data } from './TreeData';

const TreeNode = ({node, handleSet}) => {
  const hasChildren = node?.children && node?.children.length > 0;
  return (
    <View style={styles.node}>
      <TouchableOpacity onPress={handleSet}>
        <Text style={styles.nodeName}>{node?.name}</Text>
      </TouchableOpacity>
      {hasChildren && (
        <View style={styles.childContainer}>
          <View style={{width: 2, backgroundColor: '#222', height: 20}} />
        </View>
      )}
      {hasChildren && (
        <View style={styles.childrenContainer}>
          {node?.children.map((child, index) => (
            <View key={child.name} style={styles.childContainer}>
              <Svg height="100" width="100%">
                <Line
                  x1="50%"
                  y1="10%"
                  x2="50%"
                  y2="100"
                  stroke="black"
                  strokeWidth="2"
                />
                {node?.children.length == 2 ? (
                  index == 0 ? (
                    <Line
                      x1="100%"
                      y1="10%"
                      x2="50%"
                      y2="10"
                      stroke="black"
                      strokeWidth="2"
                    />
                  ) : (
                    <Line
                      x1="0%"
                      y1="10%"
                      x2="50.1%"
                      y2="10"
                      stroke="black"
                      strokeWidth="2"
                    />
                  )
                ) : (
                  ''
                )}
              </Svg>
              <TreeNode node={child} handleSet={handleSet} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default TreeNode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  node: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  nodeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  childrenContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  childContainer: {
    alignItems: 'center',
    // marginHorizontal: 8,
    // backgroundColor: 'white',
    // borderWidth: 2,
  },
});
