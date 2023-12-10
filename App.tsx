import React from 'react';
import {Text, View, Button} from 'react-native';

const App = () => {
  return (
    <>
      <View>
        <Text style={{fontSize: 20, textAlign: 'center'}}>My Dashboard</Text>
        <Text style={{fontSize: 30}}>Home </Text>
        <Text style={{fontSize: 30}}>Share </Text>
        <Text style={{fontSize: 30}}>Contact </Text>
        <Text style={{fontSize: 30}}>Blog </Text>
      </View>
      <View>
        <Button title="Press here" />
      </View>
      <View style={{paddingTop: 20}}>
        <Button title="Press here" />
      </View>
    </>
  );
};

export default App;
