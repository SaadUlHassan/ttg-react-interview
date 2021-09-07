export const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
};
export const TodoActions = {
  addTodo: title => {
    return {
      type: TodoActionTypes.addTodo,
      payload: title
    }
  },

  removeTodo: tasks => dispatch => {
    dispatch({
      type: TodoActionTypes.deleteTodo,
      payload: tasks
    })
  }
}
