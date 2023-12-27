import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { UserDataMain } from './Data';

const LoopFlatList = () => {
  const userData = [
    {id: 1, name: 'Alice Smith', email: 'alice.smith@example.com'},
    {id: 2, name: 'Bob Johnson', email: 'bob.johnson@example.com'},
    {id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com'},
    {id: 4, name: 'David Miller', email: 'david.miller@example.com'},
    {id: 5, name: 'Eva Davis', email: 'eva.davis@example.com'},
    {id: 6, name: 'Frank Wilson', email: 'frank.wilson@example.com'},
    {id: 7, name: 'Grace Taylor', email: 'grace.taylor@example.com'},
    {id: 8, name: 'Henry White', email: 'henry.white@example.com'},
    {id: 9, name: 'Ivy Moore', email: 'ivy.moore@example.com'},
    {id: 10, name: 'Jack Robinson', email: 'jack.robinson@example.com'},
    {id: 11, name: 'Karen Harris', email: 'karen.harris@example.com'},
    {id: 12, name: 'Liam Davis', email: 'liam.davis@example.com'},
    {id: 13, name: 'Mia Jones', email: 'mia.jones@example.com'},
    {id: 14, name: 'Noah Brown', email: 'noah.brown@example.com'},
    {id: 15, name: 'Olivia Miller', email: 'olivia.miller@example.com'},
    {id: 16, name: 'Peter Wilson', email: 'peter.wilson@example.com'},
    {id: 17, name: 'Quinn Taylor', email: 'quinn.taylor@example.com'},
    {id: 18, name: 'Rachel Moore', email: 'rachel.moore@example.com'},
    {id: 19, name: 'Samuel Robinson', email: 'samuel.robinson@example.com'},
    {id: 20, name: 'Tara Davis', email: 'tara.davis@example.com'},
    {id: 21, name: 'Ulysses Brown', email: 'ulysses.brown@example.com'},
    {id: 22, name: 'Victoria Harris', email: 'victoria.harris@example.com'},
    {id: 23, name: 'Walter Jones', email: 'walter.jones@example.com'},
    {id: 24, name: 'Xena Miller', email: 'xena.miller@example.com'},
    {id: 25, name: 'Yasmine Taylor', email: 'yasmine.taylor@example.com'},
    {id: 26, name: 'Zachary White', email: 'zachary.white@example.com'},
    {id: 27, name: 'Ava Davis', email: 'ava.davis@example.com'},
    {id: 28, name: 'Benjamin Robinson', email: 'benjamin.robinson@example.com'},
    {id: 29, name: 'Chloe Harris', email: 'chloe.harris@example.com'},
    {id: 30, name: 'Daniel Smith', email: 'daniel.smith@example.com'},
    {id: 31, name: 'Emily Taylor', email: 'emily.taylor@example.com'},
    {id: 32, name: 'Finn Brown', email: 'finn.brown@example.com'},
    {id: 33, name: 'Gabriella Moore', email: 'gabriella.moore@example.com'},
    {id: 34, name: 'Harrison Wilson', email: 'harrison.wilson@example.com'},
    {id: 35, name: 'Isabella White', email: 'isabella.white@example.com'},
    {id: 36, name: 'Jacob Davis', email: 'jacob.davis@example.com'},
    {id: 37, name: 'Kylie Robinson', email: 'kylie.robinson@example.com'},
    {id: 38, name: 'Liam Harris', email: 'liam.harris@example.com'},
    {id: 39, name: 'Mia Taylor', email: 'mia.taylor@example.com'},
    {id: 40, name: 'Noah Smith', email: 'noah.smith@example.com'},
    {id: 41, name: 'Olivia Brown', email: 'olivia.brown@example.com'},
    {id: 42, name: 'Peter Moore', email: 'peter.moore@example.com'},
    {id: 43, name: 'Quinn Wilson', email: 'quinn.wilson@example.com'},
    {id: 44, name: 'Rachel White', email: 'rachel.white@example.com'},
    {id: 45, name: 'Samuel Davis', email: 'samuel.davis@example.com'},
    {id: 46, name: 'Tara Robinson', email: 'tara.robinson@example.com'},
    {id: 47, name: 'Ulysses Harris', email: 'ulysses.harris@example.com'},
    {id: 48, name: 'Victoria Taylor', email: 'victoria.taylor@example.com'},
    {id: 49, name: 'Walter Brown', email: 'walter.brown@example.com'},
    {id: 50, name: 'Xena Moore', email: 'xena.moore@example.com'},
  ];

  return (
    <>
      <View>
        <Text style={{fontSize: 28}}>Componnet in Loop with FlatList</Text>
        <FlatList
          data={userData}
          renderItem={({item}) => (
            <UserDataMain item={item} />
           
          )}
        />
      </View>
    </>
  );
};



export default LoopFlatList;
