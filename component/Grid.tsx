import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const Grid = () => {
  return (
    <>
      <View>
        <Text style={{fontSize: 35, textAlign: 'center'}}>
          Grid with Dynamic Data
        </Text>
        <ScrollView style={{marginBottom: 30}}>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
            <Text style={styles.item}>Ankit</Text>
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
