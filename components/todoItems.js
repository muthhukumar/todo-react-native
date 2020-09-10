import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

const TodoItems = ({onPress, actionButton, data}) => {
  const ActionButton = actionButton;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.container}>
          <ActionButton onPress={() => onPress(item.id)} />
          <Text style={styles.textContent}>{item.content}</Text>
        </View>
      )}
      style={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexGrow: 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContent: {
    textAlignVertical: 'center',
    fontSize: 20,
    marginLeft: 20,
    marginVertical: 10,
  },
});

export default TodoItems;
