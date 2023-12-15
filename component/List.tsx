import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const List = () => {
  const userData = [
    {
      id: 1,
      name: 'ankit',
    },
    {
      id: 2,
      name: 'Vibha',
    },
    {
      id: 3,
      name: 'Sunder',
    },
    {
      id: 4,
      name: 'Yug',
    },
    {
      id: 5,
      name: 'Amit',
    },
  ];

  return (
    <>
      <View>
        <Text style={{fontSize: 30, textAlign: 'center'}}>List component </Text>
        <FlatList
          data={userData}
          renderItem={({item}) => <Text style={styles?.item}>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    backgroundColor:'green',
    borderColor:'white',
    color:'white',
    borderWidth:10,
  },
});

export default List;
