import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddTodo from '../components/AddTodo';
import { useDispatch, useSelector } from 'react-redux';
import { TodoActions } from '../actions'
import ViewList from '../components/ViewList';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
  })
);

const TodoList = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [taskList, setTaskList] = useState([])
  const tasks = useSelector(state => state.todo?.current?.tasks)
  const onAddTask = (payload) => {
    dispatch(TodoActions.addTodo(payload)) //By Redux
    setTaskList([...taskList, payload]) //By Local State Management
  }

  const removeTask = (id) => {

    //By Local State Management
    setTaskList(taskList.filter(item => item.id !== id))
    
    
    //By Redux
    let filteredTasks = tasks.filter(item => item.id !== id)
    dispatch(TodoActions.removeTodo(filteredTasks))
  }
  return (
    <div className={classes.root}>
      <AddTodo onAddTask={onAddTask} />
      <ViewList taskList={tasks} removeTask={removeTask} />
    </div>
  );
};

export default TodoList;
