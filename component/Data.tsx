import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export  const  UserDataMain =(props)=>{
    const item = props?.item
    return(
        <>
         <View style={styles?.box}>
              <Text style={styles?.item}>{item?.name}</Text>
              <Text style={styles?.item}>{item?.email}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'blue',
    // width: 120,
    // height: 120,
    borderBlockColor: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 5,
    padding: 5,
    borderRadius: 20,
    flexDirection: 'row',
    borderColor:'black',
  },
  item: {
    flex: 1,
    fontSize: 24,
    color: 'red',
    margin:2,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});