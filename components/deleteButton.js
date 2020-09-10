import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const DeleteButton = ({onPress}) => (
  <TouchableOpacity style={styles.circleButton} onPress={onPress}>
    <View style={styles.minusButton} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  circleButton: {
    width: 22,
    height: 22,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  minusButton: {
    height: 1,
    width: '70%',
    backgroundColor: 'white',
  },
});

export default DeleteButton;
