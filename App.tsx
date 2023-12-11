import React from 'react';
import {Text, View, Button} from 'react-native';
import UserData from './component/UserData';
import CompanyData from './component/CompanyData';

const App = () => {
  const name = 'ankit';
  const age = 39;
  function fruit() {
    return 'apple';
  }
  return (
    <>
      <View>
        <Text style={{fontSize: 20, textAlign: 'center'}}>My Dashboard</Text>
        <Text style={{fontSize: 30}}>{name} </Text>
        <Text style={{fontSize: 30}}>
          {age > 39 ? 'greater then 39 ' : 'greater then and eqal to 39a'}{' '}
        </Text>
        <Text style={{fontSize: 30}}>Contact </Text>
        <Text style={{fontSize: 30}}>{fruit()} </Text>
      </View>
      <View>
        <Button title="Press here" />
      </View>
      <View style={{paddingTop: 20}}>
        <Button title="Press here" />
        <UserData age={age} />
        <CompanyData age={age} />
      </View>
    </>
  );
};

export default App;
