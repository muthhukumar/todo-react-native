import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const CheckButton = ({onPress}) => (
  <TouchableOpacity style={styles.circleButton} onPress={onPress} />
);

const styles = StyleSheet.create({
  circleButton: {
    width: 20,
    height: 20,
    borderRadius: 25,
    borderWidth: 1,
  },
});

export default CheckButton;
