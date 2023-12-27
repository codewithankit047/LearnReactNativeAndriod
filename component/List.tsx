import React from 'react';
import {Text, View, FlatList, StyleSheet, ScrollView} from 'react-native';

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
        <ScrollView style={{marginBottom:30}}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>List component </Text>
        <FlatList
          data={userData}
          renderItem={({item}) => <Text style={styles?.item}>{item.name}</Text>}
          keyExtractor={item => item.id}
        />

        {
          userData?.map((item)=><Text style={styles?.item}>{item?.name}</Text>)
        }
        </ScrollView>
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
    borderRadius: 95,
  },
});

export default List;
