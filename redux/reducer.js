import {ADD_TODO, REMOVE_TODO, MARK_AS_COMPLETE} from './actionTypes';

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        ...action.payload,
        id: state.todos.length + 1,
        completed: false,
      };
      return {
        todos: [...state.todos, newTodo],
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case MARK_AS_COMPLETE:
      const todosCopy = [...state.todos];
      const todoIndex = todosCopy.findIndex(
        (value) => value.id === action.payload.id,
      );
      todosCopy[todoIndex] = {
        ...todosCopy[todoIndex],
        completed: true,
      };
      return {
        todos: [...todosCopy],
      };

    default:
      return state;
  }
};
