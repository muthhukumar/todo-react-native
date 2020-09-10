import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import Header from '../components/header';
import TodoItems from '../components/todoItems';
import AddTodoButton from '../components/addTodoButton';
import CheckButton from '../components/checkButton';
import DeleteButton from '../components/deleteButton';
import Modal from '../components/modal';
import {addTodo, removeTodo, markAsComplete} from '../redux/actionCreators';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      isModalOpen: false,
    };
  }

  render() {
    const {todos, completed} = this.props;
    return (
      <View style={styles.container}>
        {this.state.isModalOpen && (
          <Modal
            onCancel={() => this.setState({isModalOpen: false})}
            onSave={() => {
              this.setState({isModalOpen: false});
              this.props.addTodo({content: this.state.newTask});
            }}
            onChange={(value) => this.setState({newTask: value})}
          />
        )}
        <Header title="Todos" />
        <TodoItems
          data={todos}
          actionButton={CheckButton}
          onPress={this.props.markAsComplete}
        />
        <Header title="Completed" />
        <TodoItems
          data={completed}
          actionButton={DeleteButton}
          onPress={this.props.removeTodo}
        />
        <AddTodoButton addTodo={() => this.setState({isModalOpen: true})} />
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

const mapStateToProps = (state) => ({
  todos: state.todos.filter((todo) => !todo.completed),
  completed: state.todos.filter((todo) => todo.completed),
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (payload) => dispatch(addTodo(payload)),
  removeTodo: (id) => dispatch(removeTodo(id)),
  markAsComplete: (id) => dispatch(markAsComplete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
