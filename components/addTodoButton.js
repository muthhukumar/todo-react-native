import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const AddTodoButton = ({addTodo}) => {
  return (
    <TouchableOpacity
      title="add button"
      style={styles.container}
      onPress={addTodo}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
    marginBottom: 5,
    marginLeft: 2,
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export default AddTodoButton;
