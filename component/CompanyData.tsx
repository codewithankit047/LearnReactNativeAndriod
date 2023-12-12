import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const CompanyData = () => {
  const [name, setName] = useState('undefined');
  return (
    <>
      <View>
        <Text>Your name is :{name}</Text>
        <TextInput
          style={{
            padding: 10,
            backgroundColor: 'white',
            borderColor: 'red',
            margin: 10,
          }}
          placeholder="enter your name"
          onChangeText={(text) => {setName(text)}}
        />
      </View>
    </>
  );
};

export default CompanyData;
