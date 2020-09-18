import React from 'react';
import {StyleSheet, Alert, View} from 'react-native';
import {connect} from 'react-redux';

import TodoItems from '../components/todoItems';
import AddTodoButton from '../components/addTodoButton';
import CheckButton from '../components/checkButton';
import Modal from '../components/modal';
import {addTodo, markAsComplete} from '../redux/actionCreators';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      isModalOpen: false,
    };
  }
  componentDidMount() {
    if (global.mixpanel) {
      global.mixpanel.track('visited home screen');
      console.log(global.user);
    }
  }

  render() {
    const {todos} = this.props;
    return (
      <View style={styles.container}>
        {this.state.isModalOpen && (
          <Modal
            onCancel={() => this.setState({isModalOpen: false})}
            onSave={() => {
              this.setState({isModalOpen: false});
              this.props.addTodo({content: this.state.newTask});
            }}
            onChange={value => this.setState({newTask: value})}
          />
        )}
        <TodoItems
          data={todos}
          actionButton={CheckButton}
          onPress={this.props.markAsComplete}
        />
        <AddTodoButton
          addTodo={() => {
            this.setState({isModalOpen: true});
            mixpanel.track('add todo');
            console.log('Added new todo');
          }}
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
  todos: state.todos.filter(todo => !todo.completed),
});

const mapDispatchToProps = dispatch => ({
  addTodo: payload => dispatch(addTodo(payload)),
  markAsComplete: id => dispatch(markAsComplete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
