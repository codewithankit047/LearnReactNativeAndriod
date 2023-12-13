import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Swiper from 'react-native-deck-swiper';

const App = () => {
  const data = [
    {id: 1, color: 'blue'},
    {id: 2, color: 'green'},
    {id: 3, color: 'yellow'},
    {id: 4, color: 'orange'},
    {id: 5, color: 'red'},
  ];
  return (
    <>
      <Swiper
        cards={data}
        renderCard={card => (
          <View style={[styles.card, {backgroundColor: card.color}]} />
        )}
        onSwiped={cardIndex => console.log('Card swiped: ', cardIndex)}
        onSwipedAll={() => console.log('All cards have been swiped')}
        cardIndex={0}
        backgroundColor="transparent"
        stackSize={3}
        stackSeparation={20}
      />
    </>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 200,
  },
});

export default App;
