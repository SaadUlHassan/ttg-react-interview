import { TodoActionTypes } from './actions';
import update from 'immutability-helper';
import { combineReducers } from 'redux';

const defaultState = {
  tasks: []
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TodoActionTypes.addTodo:
      return {
        ...state,
      // tasks: action.payload
      tasks: [...state.tasks, action.payload]
    };
    case TodoActionTypes.deleteTodo: {
      return {
        tasks: action.payload
      };
    }

    default:
      return state;
  }
};

const reducer = combineReducers({
  current: todoReducer,
});

export default reducer;
