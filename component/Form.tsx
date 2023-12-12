import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Form = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [password, setpassword] = useState();
  const [display, setdisplay] = useState(false);
  const handleSubmit = () => {
    if (name && email && phone && password) {
      setdisplay(true);
    } else {
      console.warn('Fill the full details');
    }
  };
  const handleClear = () => {
    setname('');
    setemail('');
    setpassword('');
    setphone('');
    setdisplay(false);
  };

  return (
    <>
      <View>
        <Text>Form Component</Text>
        <TextInput
          style={styles.textInput}
          placeholder="enter your name"
          onChangeText={text => {
            setname(text);
          }}
          value={name}
        />
        <TextInput
          style={styles.textInput}
          placeholder="enter your email"
          onChangeText={text => {
            setemail(text);
          }}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="enter your phone"
          onChangeText={text => {
            setphone(text);
          }}
          value={phone}
        />
        <TextInput
          style={styles.textInput}
          placeholder="enter your password"
          secureTextEntry={true}
          onChangeText={text => {
            setpassword(text);
          }}
          value={password}
        />
      </View>
      <View style={{marginBottom: 10}} />
      <Button
        color={'green'}
        title="submit"
        onPress={() => {
          handleSubmit();
        }}
      />
      <View style={{marginBottom: 10}} />
      <Button
        title="Clear"
        onPress={() => {
          handleClear();
        }}
      />
      <View style={{marginBottom: 120}} />
      {display === true ? (
        <>
          <View>
            <Text style={{fontSize: 15}}>User Name is :{name}</Text>
            <Text style={{fontSize: 15}}>User email is :{email}</Text>
            <Text style={{fontSize: 15}}>User phone is :{phone}</Text>
            <Text style={{fontSize: 15}}>User password is :{password}</Text>
          </View>
        </>
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({
  textInput: {
    color: 'blue',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 3,
    margin: 5,
  },
});
export default Form;
