import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const Hooks = () => {
  let [state, setstate] = useState(0);
  useEffect(() => {
    console.warn(state);
  }, [state]);
  return (
    <>
      <View>
        <Text style={{fontSize: 35}} >
          UseEffect Hooks
        </Text>
        <Text style={{fontSize: 35}}>{state}</Text>
        <Button title='Click here' onPress={()=>setstate(state ++)} />
      </View>
    </>
  );
};

export default Hooks;
