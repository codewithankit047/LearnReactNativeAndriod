import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const UserData = () => {
  const [state, setstate] = useState('Ankit');
  const fruit = () => {
    setstate('Rahul');
    console.warn(state);
  };
  return (
    <>
      <View>
        <Text>User Data Dashboard</Text>
        <Text>Name : Ankit</Text>
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
export default UserData;
