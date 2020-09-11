import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import Header from '../components/header';
import TodoItems from '../components/todoItems';
import DeleteButton from '../components/deleteButton';
import {removeTodo} from '../redux/actionCreators';

class Completed extends React.completed {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title="Completed" />
        <TodoItems
          data={this.props.completed}
          actionButton={DeleteButton}
          onPress={this.props.removeTodo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
  },
});

const mapStateToProps = state => ({
  completed: state.todos.filter(todo => todo.completed),
});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Completed);
