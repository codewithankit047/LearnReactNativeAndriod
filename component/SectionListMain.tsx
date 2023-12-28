import React from 'react';
import {SectionList, Text, View} from 'react-native';

const SectionListMain = () => {
  const user = [
    {
      id: 1,
      name: 'Ankit',
      data: ['php', 'React', 'js', 'javascript'],
    },
    {
      id: 2,
      name: 'Peter',
      data: ['jav', 'Nodedks', 'jReaadcts', 'Pythdsfon'],
    },
    {
      id: 3,
      name: 'Peter',
      data: ['jav', 'Nodasdfeks', 'jReacts', 'Pyasdfthon'],
    },
    {
      id: 4,
      name: 'Peter',
      data: ['jav', 'Noddsadfeks', 'jReasdfacts', 'Pyasfdthon'],
    },
    {
      id: 5,
      name: 'Peter',
      data: ['jav', 'Nodesadfks', 'jReacasdfts', 'Pytsadfhon'],
    },
    {
      id: 6,
      name: 'Peter',
      data: ['jav', 'Nodereks', 'jcxvReacts', 'Pytdsfhon'],
    },
  ];
  return (
    <>
      <View>
        <Text style={{fontSize: 32, textAlign: 'center'}}>Section list</Text>
        <SectionList
          sections={user}
          renderItem={({item}) => (
            <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
          )}
          renderSectionHeader={({section: {name}}) => (
            <Text style={{fontSize: 20, color: 'red'}}>{name}</Text>
          )}
        />
      </View>
    </>
  );
};

export default SectionListMain;
