import {MARK_AS_COMPLETE, ADD_TODO, REMOVE_TODO} from './actionTypes';

export const addTodo = (payload) => ({type: ADD_TODO, payload});

export const removeTodo = (id) => ({type: REMOVE_TODO, payload: {id}});

export const markAsComplete = (id) => ({type: MARK_AS_COMPLETE, payload: {id}});
