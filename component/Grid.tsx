import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

const Grid = () => {

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
        {
            id: 325,
            name: 'Amit',
          },
          {
            id: 345,
            name: 'Amit',
          },
          {
            id: 2345,
            name: 'Amit',
          },
          {
            id: 12345,
            name: 'Amit',
          },
        {
            id: 325,
            name: 'Amit',
          },
          {
            id: 345,
            name: 'Amit',
          },
          {
            id: 2345,
            name: 'Amit',
          },
          {
            id: 12345,
            name: 'Amit',
          },
        {
            id: 325,
            name: 'Amit',
          },
          {
            id: 345,
            name: 'Amit',
          },
          {
            id: 2345,
            name: 'Amit',
          },
          {
            id: 12345,
            name: 'Amit',
          },
        {
            id: 325,
            name: 'Amit',
          },
          {
            id: 345,
            name: 'Amit',
          },
          {
            id: 2345,
            name: 'Amit',
          },
          {
            id: 12345,
            name: 'Amit',
          },
      ];
  return (
    <>
      <View>
        <Text style={{fontSize: 35, textAlign: 'center'}}>
          Grid with Dynamic Data
        </Text>
        <ScrollView style={{marginBottom: 30}}>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            
          {userData?.map(item => (
            <Text style={styles?.item}>{item?.name}</Text>
          ))}
        
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    color: 'red',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    backgroundColor: 'blue',
    borderBlockColor: 'black',
    textAlign:'center',
    textAlignVertical:'center'
  },
});

export default Grid;
