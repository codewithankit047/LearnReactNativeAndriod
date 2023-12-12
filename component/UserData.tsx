import React, {useEffect, useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import { Exstyles } from './style';

const UserData = props => {
  const [state, setstate] = useState('Ankit');
  const fruit = () => {
    setstate('Rahul');
    console.warn(state);
  };
  useEffect(() => {
    if (props) {
      // console.warn(props.age);
    }
  }, [props]);
  return (
    <>
      <View style={{backgroundColor: 'yellow'}}>
        <Text style={{fontSize: 30}}>User Data Dashboard</Text>
        <Text style={Exstyles.textBox}>Name : Ankit</Text>
        <Text style={Exstyles.textBox}>Name : Ankit</Text>
        <Text style={styles.textBox}>Name : Ankit</Text>
        <Text style={styles.textBox}>Name : Ankit</Text>
        <Text>Email : Codewithankit047@gmail.com</Text>
        <Text>Age: 29</Text>
        <Text>Phone no " 89330394274</Text>
        <Button title="on press " color={'green'} onPress={() => fruit()} />
      </View>
      <View>
        <Text>{state === 'Ankit' ? 'True' : 'False'}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textBox: {
    color: 'blue',
    fontSize: 30,
    backgroundColor: 'lightblue',
  },
});
export default UserData;
