import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    marginLeft: 30,
  },
});

export default Header;
